const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const axios = require('axios')

const models = require('./models.js')

const app = express()

app.use(bodyParser.json());
app.use(cors())
app.set('port', 3012)

// loads folder dist, ususally contains css, html, and bundle
app.use(express.static(__dirname + '/../client/dist'));

app.get('/populate', (req, res) => {
    models.populate( (err, data) => {
      if(err) res.send( 'failed to get data from db at server', err)
      else res.send(data)
    })
})

app.listen(app.get('port'), function() {
    console.log('listening on port', app.get('port'));
  });

  module.exports = app