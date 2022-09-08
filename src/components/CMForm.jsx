import React, { useState } from 'react'
import { Grid, Box, TextField, MenuItem } from '@mui/material'

import { useStateContext } from '../context'

const CMForm = ({ interests }) => {
  const [ gender, setGender ] = useState('')
  const [ interest, setInterest ] = useState('')
  const { clientData } = useStateContext()

  const handleInterestChange = (e) => {
    setInterest(e.target.value);
  };
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const textFields = [
    <TextField             
      id='identification' 
      label='Identification'
      name='identification' 
      variant='outlined' 
      required
      fullWidth
      defaultValue={clientData.identificacion}
    />,
    <TextField             
      id='firstName' 
      label='First Name'
      name='firstName' 
      variant='outlined' 
      required
      fullWidth
      defaultValue={clientData.nombre}
    />,
    <TextField             
      id='lastName' 
      label='Last Name'
      name='lastName' 
      variant='outlined' 
      required
      fullWidth
      defaultValue={clientData.apellidos}
    />,
    <TextField  
      select           
      id='gender' 
      label='Gender'
      name='gender' 
      variant='outlined' 
      value={gender}
      onChange={handleGenderChange}
      required
      fullWidth
      defaultValue={clientData.sexo}
    >
      <MenuItem value='M'>Male</MenuItem>
      <MenuItem value='F'>Female</MenuItem>
    </TextField>,
    <TextField             
      id='cellphone' 
      label='Cellphone'
      name='cellphone' 
      variant='outlined' 
      required
      fullWidth
      defaultValue={clientData.telefonoCelular}
    />,
    <TextField             
      id='otherphone' 
      label='Other Phone'
      name='otherPhone' 
      variant='outlined' 
      required
      fullWidth
      defaultValue={clientData.otroTelefono}
    />,
    <TextField
      id="birthdate"
      label="Birth Date"
      name='birthdate' 
      type="date"
      required
      fullWidth
      InputLabelProps={{
        shrink: true,
      }}
      defaultValue={clientData.FNacimiento}
    />,
    <TextField
      id="affiliationDate"
      label="Affiliation Date"
      name='affiliationDate' 
      type="date"
      required
      fullWidth
      InputLabelProps={{
        shrink: true,
      }}
      defaultValue={clientData.FAfiliacion}
    />,
    <TextField  
      select           
      id='interest' 
      label='Interest'
      name='interest' 
      variant='outlined' 
      value={interest}
      onChange={handleInterestChange}
      required
      fullWidth
    >
      {interests?.map((item) =>(
        <MenuItem key={item.id} value={item.id}>{item.descripcion}</MenuItem>
      ))}
    </TextField>,
  ]

  return (
    <Box sx={{ mt: 1 }}>
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
            defaultValue={clientData.direccion}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField             
            id='review' 
            label='Review'
            name='review' 
            variant='outlined' 
            fullWidth
            defaultValue={clientData.resenaPersonal}
          />
        </Grid>
      </Grid>
  </Box>
  )
}

export default CMForm