import React, { useState, useEffect } from 'react'
import TokenForm from './TokenForm'

const TokenApp = () => {
  const [token, setToken] = useState(sessionStorage.getItem("token"))

  useEffect(() => {
    if (token != null) {
      // token 被更新(触发的 onSubmit 方法, setToken), 存储到 sessionStorage
      sessionStorage.setItem('token', token)
    }
  })

  return (
    <div>
      {token ? token : <TokenForm setToken={setToken} />}
    </div>
  )
}

export default TokenApp
