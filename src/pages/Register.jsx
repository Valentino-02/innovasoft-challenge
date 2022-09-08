import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Box, Avatar, Stack, TextField, Typography, Button, Alert, Snackbar } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';

import { registerUser } from '../services/auth';
import { StyledPaper } from '../utils/styledComponents'


const mailWarning = 'please enter a valid mail'
const passwordWarning = 'password should be between 8 and 20 characters, and have at least a number, a capital letter and a lower case letter'

const Register = () => {
  const [ passwordFailed, setPasswordFailed ] = useState(false)
  const [ passwordFailedOnce, setPasswordFailedOnce ] = useState(false)
  const [ mailFailed, setMailFailed ] = useState(false)
  const [ mailFailedOnce, setMailFailedOnce ] = useState(false)
  const [ succesAlert, setSuccesAlert ] = useState(false)
  const [ failAlert, setFailAlert ] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    let data = new FormData(e.currentTarget)
    let passwordDidFail = !checkPassword(data.get('password'))
    let mailDidFail = !checkMail(data.get('mail'))

    setPasswordFailed(passwordDidFail)
    setPasswordFailedOnce(passwordDidFail)
    setMailFailed(mailDidFail)
    setMailFailedOnce(mailDidFail)

    if ( passwordDidFail || mailDidFail) {
      return
    }

    let userData = {
      "username": data.get('user'),
      "email": data.get('mail'),
      "password": data.get('password')
    }

    registerUser(userData)
      .then((res) => setSuccesAlert(true))
      .catch((err) => setFailAlert(true))
  }

  const handleMailChange = (e) => {
    setMailFailed(!checkMail(e.target.value))
  }
  const handlePasswordChange = (e) => {
    setPasswordFailed(!checkPassword(e.target.value))
  }
  
  const checkPassword = (password) => {
    let hasNumber = /\d/.test(password)
    let hasCapitalLetter = /[A-Z]/.test(password)
    let hasLowerCase = /[a-z]/.test(password)
    let isCorrectLength = password.length > 8 && password.length < 20
    return (hasNumber && hasCapitalLetter && hasLowerCase && isCorrectLength)
  }
  const checkMail = (mail) => {
    return /[^@]+@[^@]+\.[^@]+/.test(mail)
  }

  return (
    <StyledPaper elevation={10}>
      <Stack alignItems='center' spacing={2}>
        <Avatar sx={{bgcolor: 'secondary.main' }}>
          <PersonIcon />
        </Avatar>
        <Typography variant='h3'>
          Register
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField 
            id='user' 
            label='User Name'
            name='user' 
            variant='outlined' 
            fullWidth
            margin="normal"
            required
          />
          <TextField 
            id='mail' 
            label='E-Mail'
            name='mail' 
            variant='outlined' 
            fullWidth
            margin="normal"
            required 
            error={mailFailed}
            helperText={mailFailed? mailWarning : ''}
            onChange={mailFailedOnce? handleMailChange : () => {}}
          />
          <TextField 
            id='password' 
            label='Password'
            name='password' 
            variant='outlined'
            fullWidth
            margin="normal" 
            required
            error={passwordFailed}
            helperText={passwordFailed? passwordWarning : ''}
            onChange={passwordFailedOnce? handlePasswordChange : () => {}}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Register
          </Button>
          <Link to="/login">
            Already have an account? Login
          </Link>
        </Box>
      </Stack>
      
      <Snackbar
        open={succesAlert}
        autoHideDuration={200}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
      <Alert severity="success" color="success" onClose={() => setSuccesAlert(false)}>
        Register was a Success!
      </Alert>
      </Snackbar>
      <Snackbar
        open={failAlert}
        autoHideDuration={200}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
      <Alert severity="error" color="error" onClose={() => setFailAlert(false)}>
        There is already a User with the same name
      </Alert>
      </Snackbar>
    </StyledPaper>
  )
}

export default Register