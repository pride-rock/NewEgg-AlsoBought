const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const axios = require('axios')

const models = require('./models.js')

const app = express()

app.use(bodyParser.json());
app.use(cors())

// loads folder dist, ususally contains css, html, and bundle
app.use(express.static(__dirname + '/../client/dist'));

app.get('/populate', (req, res) => {
    models.itemsData( param, () => {
        
    }
})

app.listen(3012, function() {
    console.log('listening on port 3012!');
  });