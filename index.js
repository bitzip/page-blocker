var express = require('express')
var fs = require('fs')

var app = express()
app.use(express.static('./'))

app.get('/', function (req, res) {
  res.redirect('/public/')
})

// assets
var testCSS = 'body {color: red;}'
app.get('/assets/css', function (req, res) {
  res.send(testCSS)
})

app.get('/assets/css-3s', function (req, res) {
  setTimeout(function() {
    res.send(testCSS)
  }, 3000);
})

app.get('/assets/js-3s', function (req, res) {
  setTimeout(function() {
    res.send('console.log("3s javascript")')
  }, 3000);
})

app.listen(3000, function () {
  console.log('Demo app listening on port 3000!')
})
