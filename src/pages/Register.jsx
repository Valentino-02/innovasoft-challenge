import React, { useState } from 'react'
import { Box, Paper, Avatar, Stack, TextField, Typography, Button, Link } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper, {})({
  padding: 20,
  width: 280,
  margin: "20px auto"
})

const mailWarning = 'please enter a valid mail'
const passwordWarning = 'password should be between 8 and 20 characters, and have at least a number, a capital letter and a lower case letter'

const Register = () => {
  const [ passwordFailed, setPasswordFailed ] = useState(false)
  const [ passwordFailedOnce, setPasswordFailedOnce ] = useState(false)
  const [ mailFailed, setMailFailed ] = useState(false)
  const [ mailFailedOnce, setMailFailedOnce ] = useState(false)

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
      console.log('fail')
      return
    }
    console.log({
      user: data.get('user'),
      password: data.get('password'),
      isN: checkPassword(data.get('password')),
      isM: checkMail(data.get('mail'))
    });
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
          <Link href="/login" variant="body2">
            {"Already have an account? Login"}
          </Link>
        </Box>
      </Stack>
    </StyledPaper>
  )
}

export default Register