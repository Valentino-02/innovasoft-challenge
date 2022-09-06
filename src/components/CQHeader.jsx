import React from 'react'
import { Typography, Stack, ButtonGroup, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const CQHeader = () => {
  return (
    <Stack 
      spacing={2} 
      alignItems='center' 
      justifyContent={{ xs: 'center', sm: 'space-between'}} 
      direction={{ xs: 'column', sm: 'row' }}
    >
      <Typography variant='h5'>Clients Query</Typography>
      <ButtonGroup variant='outlined'>
        <Button startIcon={<AddIcon />}>
          Add 
        </Button>
        <Button startIcon={<ArrowBackIcon />}>
          Back
        </Button>
      </ButtonGroup>
    </Stack>
  )
}

export default CQHeader