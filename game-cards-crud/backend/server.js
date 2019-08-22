import express from 'express'
import mongodb from 'mongodb'
import bodyParser from 'body-parser'

const app = express()
app.use(bodyParser.json())
const dbURL = 'mongodb://localhost:27017'

// 后端的验证, data 为前端发送过来的数据
const validate = data => {
  const errors = {
    title: '',
    cover: ''
  }
  if (data.title === '') {
    errors.title = 'Can not be empty'
  }
  if (data.cover === '') {
    errors.cover = 'Can not be empty'
  }
  const isValid = Object.values(errors).includes('')
  return {
    errors,
    isValid
  }
}

mongodb.MongoClient.connect(dbURL, (err, client) => {
  const db = client.db('redux-crud')

  // 所有 games 的路由
  app.get('/api/games', (req, res) => {
    db.collection('games').find({}).toArray((err, games) => {
      res.json({ games })
    })    
  })

  // 单个 game 的路由
  app.get('/api/game/:id', (req, res) => {
    db.collection('games').findOne({ _id: new mongodb.ObjectId(req.params.id) }, (err, game) => {
      res.json({ game })
    })
  })

  // 更新一个 game 路由
  app.put('/api/game/:id', (req, res) => {
    const { errors, isValid } = validate(req.body)

    if (isValid) {
      const { title, cover } = req.body
      db.collection('games').findOneAndUpdate(
        { _id: new mongodb.ObjectId(req.params.id) },
        { $set: { title, cover } },
        { returnOriginal: false },
        (err, result) => {
          if (err) {
            res.status(500).json({ errors: { global: err } })
          } else {
            res.json({ game: result.value })
          }
        }
      )
    } else {
      res.status(400).json({ errors })
    }
  })

  // 增加一个 game 的路由
  app.post('/api/games', (req, res) => {
    const { errors, isValid } = validate(req.body)

    if (isValid) {
      const { title, cover } = req.body
      db.collection('games').insert({ title, cover }, (err, result) => {
        if (err) {
          res.status(500).json({
            errors: {
              global: 'Something went wrong'
            }
          })
        } else {
          // 返回给前端刚刚发送的数据
          // { game: { title: xxx, cover: xxx } }
          res.json({ game: result.ops[0] })
        }
      })
    } else {
      console.log('empty form submitted')
      
      // 后端验证, 如果提交的表单为空, 返回 400, 和一个 errors 对象
      res.status(400).json({ errors })
    }
  })

  app.delete('/api/game/:id', (req, res) => {
    db.collection('games').deleteOne({ _id: new mongodb.ObjectId(req.params.id) }, (err, game) => {
      // 返回被删除的 game 的 id
      console.log('game', game)
      res.json({})
    })
  })

  // 如果不匹配, 走这个路由
  app.use((req, res) => {
    res.status(404).json({
      errors: {
        global: "Still working on it. Please try again later than we can implement it"
      }
    })
  })

  app.listen(5000, () => console.log('sever is running at 5000'))

})


