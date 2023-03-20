import { Button, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Hi = () => {
    var [fname,setfname]=useState("")
   
const changeName = (event)=>{
   const{name,value} =event.target;
    setfname(value);
}
useEffect(()=>{
    setfname("[Enter name]")
},[])

  return (
    <div>
        <br/>
        <br/>
        <Typography variant='h3'color='primary'>My Name is{fname}  </Typography>
        <br></br>
      <TextField id="outlined-basic" label="Enter Name" onChange={(e)=> changeName(e)}variant="outlined" />
      <br/>
      <br/>
      <Button variant="text">Login</Button>
      <br/>
    </div>
  )
}

export default Hi
