import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Typography, Stack, ButtonGroup, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const CQHeader = () => {
  const navigate = useNavigate()

  return (
    <Stack 
      spacing={2} 
      alignItems='center' 
      justifyContent={{ xs: 'center', sm: 'space-between'}} 
      direction={{ xs: 'column', sm: 'row' }}
    >
      <Typography variant='h5'>Clients Query</Typography>
      <ButtonGroup variant='outlined'>
        <Button startIcon={<AddIcon />} onClick={() => navigate('/client-maintenance')}>
          Add 
        </Button>
        <Button startIcon={<ArrowBackIcon />} onClick={() => navigate('/home')}>
          Back
        </Button>
      </ButtonGroup>
    </Stack>
  )
}

export default CQHeader