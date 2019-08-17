import express from 'express'
import mongodb from 'mongodb'

const app = express()
const dbURL = 'mongodb://localhost:27017'

mongodb.MongoClient.connect(dbURL, (err, client) => {
  const db = client.db('redux-crud')
  
  app.get('/api/games', (req, res) => {
    db.collection('games').find({}).toArray((err, games) => {
      res.json({ games })
    })
  })
})

app.listen(5000, () => console.log('sever is running at 5000'))

