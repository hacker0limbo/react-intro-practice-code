const express = require('express')
const bodyParser = require('body-parser')
const users = require('./routes/users')
const app = express()

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('hello world')
})

app.use('/api/users', users)

app.listen(6060, () => console.log('Listening at port 6060'))
