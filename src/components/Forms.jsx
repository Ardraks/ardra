import { TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Forms = () => {
    var [fname,setfname]=useState("")
  return (
    <div>
      <TextField id="standard-basic" label="FirstName" variant="standard" />
      <br/>
      <br/>
      <TextField id="standard-basic" label="SecondName" variant="standard" />
      <br/>
        <Typography variant='h3'color='primary'>My Name is{fname}  </Typography>
    </div>
  )
}

export default Forms
