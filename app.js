/**
 *
 * @author Adda Skogberg
 * @version 1.0
 */
const express = require('express')
const app = express()
app.set('port', process.env.PORT || 5000)

app.listen(app.get('port'), function () {
  console.log('Express started on http://localhost:' + app.get('port') + ' ; press ctrl-c to terminate')
})
