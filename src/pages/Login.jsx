import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { Box, Paper, Avatar, Stack, TextField, Typography, FormControlLabel, Checkbox, Button, InputAdornment, IconButton, Snackbar, Alert } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { styled } from '@mui/material/styles';

import { useStateContext } from '../context'
import { loginUser } from '../services/auth';
import { TroubleshootTwoTone } from '@mui/icons-material';

const StyledPaper = styled(Paper, {})({
  padding: 20,
  width: 280,
  margin: "20px auto"

})

const Login = () => {
  const navigate = useNavigate()

  const [ showPassword, setShowPassword ] = useState(false)
  const [ failAlert, setFailAlert ] = useState(false)

  const { userInfo, setUserInfo, setAuth } = useStateContext()

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)

    let userData = {
      "username": data.get('user'),
      "password": data.get('password')
    }

    loginUser(userData)
      .then((res) => {
        let newUserInfo = {
          "username": res.data.username,
          "userid": res.data.userid,
          "token": res.data.token
        }
        setUserInfo({
          ...userInfo,
          ...newUserInfo
        })
        localStorage.setItem('loginToken', res.data.token)
        localStorage.setItem('auth', true)
        setAuth(true)
        navigate('/home')
      })
      .catch((err) => {
        setFailAlert(true)
      })
  }

  return (
    <StyledPaper elevation={10}>
      <Stack alignItems='center' spacing={2}>
        <Avatar sx={{bgcolor: 'secondary.main' }}>
          <LoginIcon />
        </Avatar>
        <Typography variant='h3'>
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField 
            id='user' 
            label='User'
            name='user' 
            variant='outlined' 
            fullWidth
            margin="normal"
            required 
          />
          <TextField 
            id='password' 
            label='Password'
            name='password' 
            variant='outlined'
            fullWidth
            margin="normal" 
            required
            type={showPassword ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
              )
            }}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
          <Link to="/register">
            Don't have an account? Register
          </Link>
        </Box>
      </Stack>

      <Snackbar
        open={failAlert}
        autoHideDuration={200}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert severity="error" color="error" onClose={() => setFailAlert(false)}>
          Wrong Password 
        </Alert>
      </Snackbar>
    </StyledPaper>
  )
}

export default Login