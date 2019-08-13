import React, { useState } from 'react'
import FormUserDetails from './FormUserDetails'
import FormPersonalDetails from './FormPersonalDetails'
import Confirm from './Confirm'
import Success from './Success'

const UserForm = () => {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    password: '',
    email: '',
    occupation: '',
    city: '',
    bio: ''
  })

  const continueForm = (e) => {
    e.preventDefault()
    setStep(step+1)
  }

  const backForm = (e) => {
    e.preventDefault()
    setStep(step-1)
  }

  const handleChange = name => e => {
    setForm({
      ...form,
      [name]: e.target.value
    })
  }

  switch (step) {
    case 1:
      return (
        <FormUserDetails 
          continueForm={continueForm}
          handleChange={handleChange}
          values={form}
        />
      )
    case 2:
      return (
        <FormPersonalDetails 
          continueForm={continueForm}
          backForm={backForm}
          handleChange={handleChange}
          values={form}
        />
      )
    case 3:
      return (
        <Confirm 
          continueForm={continueForm}
          backForm={backForm}
          values={form}
        />
      )
    case 4:
      return <Success />
    default:
      return <h1>Error Page</h1>
  }
}

export default UserForm