import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import useDefaultStyles from '../styles/index'
import FormAppBar from './FormAppBar'

const FormPersonalDetails = (props) => {
  const { values, handleChange, continueForm, backForm } = props
  const classes = useDefaultStyles({ direction: 'column' });

  return (
    <>
      <FormAppBar title="Enter Personal Details" />
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          label="Occupation"
          placeholder="Enter Your Occupation"
          className={classes.textField}
          value={values.occupation}
          onChange={handleChange('occupation')}
          margin="normal"
        />
        <TextField
          label="City"
          placeholder="Enter Your City"
          className={classes.textField}
          value={values.city}
          onChange={handleChange('city')}
          margin="normal"
        />
        <TextField
          label="Bio"
          placeholder="Enter Your Bio"
          className={classes.textField}
          value={values.bio}
          onChange={handleChange('bio')}
          margin="normal"
        />

        <div className={classes.buttonContainer}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={(e) => backForm(e)}
          >
            Back
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={(e) => continueForm(e)}
          >
            Continue
          </Button>
        </div>

      </form>
    </>
  )
}

export default FormPersonalDetails