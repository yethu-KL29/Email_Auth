import React from 'react'
import { AppBar, Button, Input, TextField, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'
import './style.css'
import axios from 'axios'
function Email() {
  const [input, setinput] = useState({
    email:''
  })
  const handleChange=(e)=>{
    setinput(prev=>({
     ...prev,[e.target.name]:[e.target.value]
    
    })) 
 }
 const sendEmail=async()=>{
  const res = await axios.post("http://localhost:5000/sendEmail")
  .catch((e)=>console.log(e))
  const data = res.data
  return data
 }
 const handleSubmit=(e)=>{
  e.preventDefault()
  sendEmail().then((data)=>console.log(data))
 }
  return (
    <div>
      <form>
        <div className='form'>
        <label for="email">Enter your email:</label>
        <input onChange={handleChange} type="email" id="email" name="email" value={input.email}></input>
        <Button onClick={handleSubmit} type='submit' variant='contained'>Submit</Button>
        </div>
        </form>
    </div>
  )
}

export default Email