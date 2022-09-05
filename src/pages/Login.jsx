import React, { useState } from 'react'
import { Box, Paper, Avatar, Stack, TextField, Typography, FormControlLabel, Checkbox, Button, Link, InputAdornment, IconButton } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper, {})({
  padding: 20,
  width: 280,
  margin: "20px auto"

})

const Login = () => {
  const [ showPassword, setShowPassword ] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    console.log({
      user: data.get('user'),
      password: data.get('password'),
    });
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
          <Link href="/register" variant="body2">
            {"Don't have an account? Register"}
          </Link>
        </Box>
      </Stack>
    </StyledPaper>
  )
}

export default Login