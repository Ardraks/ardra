import React from 'react'
import { Button, TextField } from '@mui/material'
const Sign = () => {
  return (
    <div>
      <TextField label='First Name'/>
      <br></br>
      <TextField label='Last Name'/>
      <br></br>
      <TextField label='Email' type='email'/>
      <br></br>
      <TextField label='password' type='password'/>
      <br></br>
      <Button variant='contained'>Sign up</Button>
    </div>
  )
}

export default Sign
