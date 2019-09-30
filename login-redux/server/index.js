const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(6060, () => console.log('Listening at port 6060'))
