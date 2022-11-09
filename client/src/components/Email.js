import React from 'react'
import { AppBar, Button, Input, TextField, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
function Email() {
  return (
    <div>
        <Box>
           <AppBar> <Toolbar>hy</Toolbar></AppBar>
           <form >
        <Box className='form' bgcolor='inherit'>
       
    
      <TextField  name='name'  placeholder='name' sx={{width:400}}/>
        <TextField  name='email'   type={'email'} placeholder='email' sx={{width:400}}/>
        <TextField  name='password'   type={'password'} placeholder='password' sx={{width:400}}/>
        <Button type='submit' variant='contained' color='warning'>Submit</Button>
        <Button  variant='outlined'  >Change to</Button>
       
      </Box>
      </form>
        </Box>
    </div>
  )
}

export default Email