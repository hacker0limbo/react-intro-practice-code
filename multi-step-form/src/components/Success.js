import React from 'react'
import FormAppBar from './FormAppBar'
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  }
}))


const Success = () => {
  const classes = useStyles()

  return (
    <>
      <FormAppBar title="Success" />
      <div className={classes.container}>
        <h1>Thank You For your Submission</h1>
        <p>You will get an email with further instructions</p>
      </div>

    </>
  )
}

export default Success
