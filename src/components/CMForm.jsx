import React from 'react'
import { Grid, Box, IconButton, TextField, MenuItem } from '@mui/material'

const textFields = [
  <TextField             
    id='identification' 
    label='Identification'
    name='identification' 
    variant='outlined' 
    required
    fullWidth
  />,
  <TextField             
    id='firstName' 
    label='First Name'
    name='firstName' 
    variant='outlined' 
    required
    fullWidth
  />,
  <TextField             
    id='lastName' 
    label='Last Name'
    name='lastName' 
    variant='outlined' 
    required
    fullWidth
  />,
  <TextField  
    select           
    id='genre' 
    label='Genre'
    name='genre' 
    variant='outlined' 
    required
    fullWidth
  >
    <MenuItem value='masculine'>Masculine</MenuItem>
    <MenuItem value='femenine'>Femenine</MenuItem>
  </TextField>,
  <TextField             
    id='cellphone' 
    label='Cellphone'
    name='cellphone' 
    variant='outlined' 
    required
    fullWidth
  />,
  <TextField             
    id='otherphone' 
    label='Other Phone'
    name='otherphone' 
    variant='outlined' 
    required
    fullWidth
  />,


]

const CMForm = () => {
  const handleSubmit = () => {

  }

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <Grid 
        container 
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {textFields.map((textField, index) => (
        <Grid item xs={2} sm={4} md={4} key={index}>
          {textField}
        </Grid>
        ))}
        <Grid item xs={12}>
          <TextField             
            id='adress' 
            label='Adress'
            name='adress' 
            variant='outlined' 
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField             
            id='review' 
            label='Review'
            name='review' 
            variant='outlined' 
            required
            fullWidth
          />
        </Grid>
      </Grid>
  </Box>
  )
}

export default CMForm