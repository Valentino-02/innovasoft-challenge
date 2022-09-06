import React from 'react'
import { Grid, Box, IconButton, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

const CQSearcher = () => {
  const handleSubmit = () => {

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
          <IconButton>
            <SearchIcon />
          </IconButton>
        </Grid>
    </Grid>
  </Box>
  )
}

export default CQSearcher