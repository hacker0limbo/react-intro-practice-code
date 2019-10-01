import React from 'react'
import SignupForm from './SignupForm'

/**
 * 注册页面
 */
const SignupPage = props => {
  return (
    <div>
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <SignupForm />
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  )
}

export default SignupPage