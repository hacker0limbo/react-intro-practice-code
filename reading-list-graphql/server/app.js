const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
app.use(cors())

// 连接到数据库
mongoose.connect('mongodb://test:test123@ds131914.mlab.com:31914/graphql', { 
  useNewUrlParser: true,
  useUnifiedTopology: true 
})
mongoose.connection.once('open', () => {
  console.log('mongodb connected')
})

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(4000, () => {
  console.log('listening at port 4000')
})