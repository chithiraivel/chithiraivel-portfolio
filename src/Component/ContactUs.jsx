import { Card, Grid, TextField } from '@mui/material'
import React from 'react'

const ContactUs = () => {
  return (
    <div>
       
        <Grid container spacing={3} sx={{ p: 2 }} style={{padding:'80px'}} >
        <Grid item lg={3}>
        <TextField
          id="outlined-error"
          label="FirstName"
          placeholder='Enter your first name'
          fullWidth
          inputProps={{ style: { height:'10px' } }}
        />
        </Grid>
      
        <Grid item lg={3}>
        <TextField
          id="outlined-error"
          label="FirstName"
          placeholder='Enter your first name'
          fullWidth
          inputProps={{ style: { height:'10px' } }}
        />
        </Grid>
        <Grid item lg={3}>
        <TextField
          id="outlined-error"
          label="FirstName"
          placeholder='Enter your first name'
          fullWidth
          inputProps={{ style: { height:'10px' } }}
        />
        </Grid>
        </Grid>
  
    </div>
  )
}

export default ContactUs