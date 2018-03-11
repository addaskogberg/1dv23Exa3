/**
 *
 * @author Adda Skogberg
 * @version 1.0
 */
const express = require('express')
const app = express()
var path = require('path')

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/index.html'))
})

app.set('port', process.env.PORT || 443)

app.listen(app.get('port'), function () {
  console.log('Express started on http://localhost:' + app.get('port') + ' ; press ctrl-c to terminate')
})
