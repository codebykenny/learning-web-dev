let express = require('express')
let app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/:controller', function (req, res) {
  let controller = req.params.controller;

  res.send(`You are looking for the ${controller} controller.`)
})

app.listen(8080)