import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import classnames from 'classnames'
import { userSignupRequest } from '../actions/signupActions'

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue)

  const handleChange = e => {
    setValue(e.target.value)
  }

  return {
    value,
    onChange: handleChange
  }
}

const SignupForm = props => {
  const username = useFormInput('')
  const email = useFormInput('')
  const password = useFormInput('')
  const passwordConfirmation = useFormInput('')
  const [errors, setErrors] = useState({}) 
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()
  const history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault()

    // 表明正在提交表单, 设置提交按钮无法提交
    setIsLoading(true)
    const user = {
      username: username.value,
      email: email.value,
      password: password.value,
      passwordConfirmation: passwordConfirmation.value
    }
    try {
      const res = await dispatch(userSignupRequest(user))
      setIsLoading(false)
      if (res.status === 200 && res.data.success) {
        // 不报错, 跳转到主页
        history.push("/")
      }
    } catch(error) {
      // 将后端返回的错误设置到 errors 这个对象里
      setErrors(error.response.data)
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <h2 className="text-center mb-4">Join our community</h2>
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <svg id="i-user" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
              <path d="M22 11 C22 16 19 20 16 20 13 20 10 16 10 11 10 6 12 3 16 3 20 3 22 6 22 11 Z M4 30 L28 30 C28 21 22 20 16 20 10 20 4 21 4 30 Z" />
            </svg>
          </span>
        </div>
        <input
          type="text"
          className={classnames("form-control", { 'is-invalid': errors.username })}
          placeholder="Username"
          {...username}
        />
        {errors.username && <div className="invalid-feedback">{errors.username}</div>}
      </div>
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <svg id="i-mail" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
              <path d="M2 26 L30 26 30 6 2 6 Z M2 6 L16 16 30 6" />
            </svg>
          </span>
        </div>
        <input
          type="email"
          className={classnames("form-control", { 'is-invalid': errors.email })}
          placeholder="Email"
          {...email}
        />
        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
      </div>
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <svg id="i-edit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
              <path d="M30 7 L25 2 5 22 3 29 10 27 Z M21 6 L26 11 Z M5 22 L10 27 Z" />
            </svg>
          </span>
        </div>
        <input
          type="password"
          className={classnames("form-control", { 'is-invalid': errors.password })}
          placeholder="Password"
          {...password}
        />
        {errors.password && <div className="invalid-feedback">{errors.password}</div>}
      </div>
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <svg id="i-checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
              <path d="M2 20 L12 28 30 4" />
            </svg>
          </span>
        </div>
        <input
          type="password"
          className={classnames("form-control", { 'is-invalid': errors.passwordConfirmation })}
          placeholder="Password Confirmation"
          {...passwordConfirmation}
        />
        {errors.passwordConfirmation && <div className="invalid-feedback">{errors.passwordConfirmation}</div>}
      </div>

      <div className="form-group">
        <button 
          type="submit" 
          className="btn btn-primary btn-lg btn-block"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <span className="spinner-grow spinner-grow-sm"></span> 
              Submitting...
            </>
          ) : 'Sign Up'}
        </button>
      </div>
    </form>
  )
}

export default SignupForm