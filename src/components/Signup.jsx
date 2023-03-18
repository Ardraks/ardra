import { Button, TextField } from '@mui/material'
import React from 'react'

const signup = () => {
  return (
    <div>
      <TextField label='First Name'/>
      <TextField label='Last Name'/>
      <TextField label='Email'/>
      <TextField label='password' type='password'/>
      <Button variant='contained'>Sign up</Button>
    </div>
  )
}

export default signup
