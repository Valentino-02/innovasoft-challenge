import React from 'react'
import { useNavigate } from "react-router-dom";
import { Typography, Stack, ButtonGroup, Button } from '@mui/material'
import SaveIcon from '@mui/icons-material/Save';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const CMHeader = () => {
  const navigate = useNavigate()
  return (
    <Stack 
      spacing={2} 
      alignItems='center' 
      justifyContent={{ xs: 'center', sm: 'space-between'}} 
      direction={{ xs: 'column', sm: 'row' }}
    >
      <Typography variant='h5'>Client Maintenance</Typography>
      <ButtonGroup variant='outlined'>
        <Button startIcon={<SaveIcon />} type="submit">
          Save 
        </Button>
        <Button startIcon={<ArrowBackIcon />} onClick={() => navigate('/client-query')}>
          Back
        </Button>
      </ButtonGroup>
    </Stack>
  )
}

export default CMHeader