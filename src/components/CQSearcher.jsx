import React, { useState } from 'react'
import { Grid, Box, IconButton, TextField, Snackbar, Alert } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

import { useStateContext } from '../context'
import { getListClients } from '../services/client';

const CQSearcher = () => {
  const { setClients } = useStateContext()
  const [ errorAlert, setErrorAlert ] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    let clientData = {
      identificacion: formData.get('identification'),
      nombre: formData.get('name')
    }
    getListClients(clientData)
      .then((res) =>{
        let clients = res.data
        setClients(clients)
        if (clients.length === 0) {
          setErrorAlert(true)
        }
      })
  }

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <Grid 
        container 
        spacing={{ xs: 2, sm: 1 }} 
        alignItems='center' 
        justifyContent={{ xs: 'center', sm: 'space-between'}} 
        direction={{ xs: 'column', sm: 'row' }}
      >
        <Grid item sm={5.5}>
          <TextField             
            id='name' 
            label='Name'
            name='name' 
            variant='outlined' 
            fullWidth
          />
        </Grid>
        <Grid item sm={5.5}>
          <TextField             
            id='identification' 
            label='Identification'
            name='identification' 
            variant='outlined' 
            fullWidth
          />
        </Grid>
        <Grid item sm={1}>
          <IconButton type="submit">
            <SearchIcon />
          </IconButton>
        </Grid>
    </Grid>

    <Snackbar
      open={errorAlert}
      autoHideDuration={200}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
    <Alert severity="info" color="info" onClose={() => setErrorAlert(false)}>
      client not found
    </Alert>
    </Snackbar>
  </Box>
  )
}

export default CQSearcher