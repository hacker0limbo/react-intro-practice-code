import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import useDefaultStyles from '../styles/index'
import FormAppBar from './FormAppBar'

const FormUserDetails = (props) => {
  const { values, handleChange, continueForm } = props
  const classes = useDefaultStyles({ direction: 'column' });

  return (
    <>
      <FormAppBar title="Enter User Details" />
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          label="First Name"
          placeholder="Enter Your First Name"
          className={classes.textField}
          value={values.firstName}
          onChange={handleChange('firstName')}
          margin="normal"
        />
        <TextField
          label="Last Name"
          placeholder="Enter Your Last Name"
          className={classes.textField}
          value={values.lastName}
          onChange={handleChange('lastName')}
          margin="normal"
        />
        <TextField
          label="Email"
          placeholder="Enter Your Email"
          className={classes.textField}
          value={values.email}
          onChange={handleChange('email')}
          margin="normal"
        />
        <TextField
          label="Password"
          placeholder="Enter Your Password"
          type="password"
          className={classes.textField}
          value={values.password}
          onChange={handleChange('password')}
          margin="normal"
        />

        <br />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={(e) => continueForm(e)}
        >
          Continue
        </Button>

      </form>
    </>
  )
}

export default FormUserDetails
