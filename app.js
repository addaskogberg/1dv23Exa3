/**
 *
 * @author Adda Skogberg
 * @version 1.0
 */

const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const crypto = require('crypto')
const secureCompare = require('secure-compare')
const port = process.env.PORT || 80
const app = express()

var server = http.createServer(app).listen(port, () => {
  console.log('express started on http://localhost:' + port)
})

var io = require('socket.io')(server)

app.use(express.static('public'))
app.use(bodyParser.json())

app.get('/payload', (req, res, next) => {
  res.send('payload')
})

io.on('connection', function (socket) {
  app.post('/payload', (req, res, next) => {
    // POST data from Git
    let payload = JSON.stringify(req.body)
    let ourData = req.body

    // get header
    let signature = req.headers['x-hub-signature']

    // kolla om det är rätt eventyp
    const event = req.headers['x-github-event'] // if issues .... = 200 plocka ut signatur.
    console.log('x-github-event ' + event)

    // Set up verification for SHA security

    console.log(process.env.USER_KEY)
    let hmac = crypto.createHmac('sha1', 'leyndarmal') // ändra till environment variabel
    hmac.update(payload)
    let hashedSecret = 'sha1=' + hmac.digest('hex')

    // console.log(signature)
    // console.log(hashedSecret)

    if (secureCompare(signature, hashedSecret)) {
      console.log('the data came from Git')
      if (event === 'issues') {
        io.emit('issue', { issue: ourData.issue })
        console.log(ourData.issue.title)
      } else if (event === 'issue_comment') {
        io.emit('issue_comment', { issue_comment: ourData.comment })
        console.log(ourData.comment.body)
      }
      res.sendStatus(200)
    } else {
      res.sendStatus(403)
    }
  })
})
