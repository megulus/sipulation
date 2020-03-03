import express from 'express'
import bodyParser from 'body-parser'

const app = express()
const db = require('../data/db-config')
const port = 8080

app
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json()) 
  .get('/', (req, res) => {
    res.send('Hello!')
  })


app.listen(port, () => console.log(`Sipulation app listening on port ${port}`))