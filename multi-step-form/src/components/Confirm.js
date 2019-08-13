import React from 'react'
import Button from '@material-ui/core/Button'
import useDefaultStyles from '../styles/index'
import FormAppBar from './FormAppBar'
import TextField from '@material-ui/core/TextField';


const Confirm = (props) => {
  const { values, continueForm, backForm } = props
  const { firstName, lastName, password, email, occupation, city, bio } = values
  const classes = useDefaultStyles({ direction: 'column' });

  return (
    <>
      <FormAppBar title="Confirm User Data" />
      <div className={classes.container}>
          <TextField
            label="First Name"
            defaultValue={firstName}
            className={classes.textField}
            margin="normal"
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
          />
          <TextField
            label="Last Name"
            defaultValue={lastName}
            className={classes.textField}
            margin="normal"
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
          />
          <TextField
            label="Password"
            defaultValue={password}
            className={classes.textField}
            margin="normal"
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
          />
          <TextField
            label="Email"
            defaultValue={email}
            className={classes.textField}
            margin="normal"
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
          />
          <TextField
            label="Occupation"
            defaultValue={occupation}
            className={classes.textField}
            margin="normal"
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
          />
          <TextField
            label="City"
            defaultValue={city}
            className={classes.textField}
            margin="normal"
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
          />
          <TextField
            label="Bio"
            defaultValue={bio}
            className={classes.textField}
            margin="normal"
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
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
      </div>

    </>
  )
}

export default Confirm