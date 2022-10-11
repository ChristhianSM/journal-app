import {Link as RouterLink} from 'react-router-dom'
import { Google } from '@mui/icons-material'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { useDispatch } from 'react-redux'
import { checkingAuthentication, startGoogleSignIn } from '../../store/auth'

export const LoginPage = () => {
  const dispath = useDispatch();
  const { email, password, onInputChange } = useForm({
    email: "christhian2524@gmail.com",
    password: "123456"
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    dispath( checkingAuthentication() );
  }

  const handleGoogleSignIn = () => {
    dispath( startGoogleSignIn() );
  }
  return (
    <AuthLayout title='Login'>
      <form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item xs = {12} >
            <TextField 
              label = "Correo" 
              type = "email" 
              placeholder='correo@google.com'
              fullWidth
              name='email'
              value={email}
              onChange = {onInputChange}
            />
          </Grid>

          <Grid item xs = {12} sx = {{ mt:2 }}>
            <TextField 
              label = "Contraseña" 
              type = "password" 
              placeholder='**********'
              fullWidth
              name='password'
              value={password}
              onChange = {onInputChange}
            />
          </Grid>

          <Grid container spacing = {2} sx = {{ mt:1, mb:2}}>
            <Grid item xs = {12} sm = {6}>
              <Button type='submit' variant = "contained" fullWidth>
                Login
              </Button>
            </Grid>
            <Grid item xs = {12} sm = {6}>
              <Button 
                onClick={ handleGoogleSignIn } 
                variant = "contained" 
                fullWidth
              >
                <Google />
                <Typography sx = {{ml:1}}> Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction = "row" justifyContent="end">
            <Link component={RouterLink} color= 'inherit' to = "/auth/register">
              Crear una cuenta
            </Link> 
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
