import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
      <h1>Welcome to react</h1>
      <input placeholder='Email'></input>
      <input placeholder='password' type='password'></input>
      <Typography variant='h5'>Welcome to React</Typography>
      <TextField label='Email' variant='outlined'/>
      <br></br>
      <TextField label='password' type='password'variant='outlined'/>
      <br></br>
      <Button variant='contained' color='success'>Login</Button>
    </div>
  )
}

export default Login
