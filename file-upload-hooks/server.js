const express = require('express')
const fileUpload = require('express-fileupload')

const app = express()

app.use(fileUpload())

// upload endpoint
app.post('/upload', (req, res) => {
  // 如果没有上传文件
  if (req.files === null) {
    return res.status(400).json({ msg: 'No file uploaded, Please choose a File' })
  }

  // 获取前端穿过来的文件, key 名为 file, 可以获取对应的 value
  const file = req.files.file

  file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
    if (err) {
      console.error(err)
      return res.status(500).send(err)
    }

    res.json({ 
      fileName: file.name,
      filePath: `/uploads/${file.name}`
    })
  })
})

app.listen(5000, () => console.log('Server starts at 5000'))