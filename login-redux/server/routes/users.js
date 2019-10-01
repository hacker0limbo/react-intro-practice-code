const express = require('express')
const router = express.Router()
const { isEmpty } = require('lodash')
const validator = require('validator')

const validateInput = data => {
  const errors = {}
  console.log(data)

  if (validator.isEmpty(data.username)) {
    errors.username = 'The field is required'
  }

  if (validator.isEmpty(data.email)) {
    errors.email = 'The field is required'
  }

  if (!validator.isEmail(data.email)) {
    errors.email = 'Email is invalid'
  }

  if (validator.isEmpty(data.password)) {
    errors.password = 'The field is required'
  }

  if (validator.isEmpty(data.passwordConfirmation)) {
    errors.passwordConfirmation = 'The field is required'
  }

  if (!validator.equals(data.password, data.passwordConfirmation)) {
    errors.passwordConfirmation = 'Password must match'
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}

router.post('/', (req, res) => {
  // 客户端设置提交以后延迟 3 秒返回给客户端信息
  setTimeout(() => {
    const { errors, isValid } = validateInput(req.body)
  
    if (isValid) {
      // 成功, 默认返回状态码 200
      res.json({ success: true })
    } else {
      res.status(400).json(errors)
    }
  }, 3000)
})

module.exports = router