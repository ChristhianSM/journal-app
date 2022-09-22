import { Link as RouterLink } from 'react-router-dom'
import { Google } from '@mui/icons-material'
import { Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { AuthLayout } from '../layout/AuthLayout'

export const RegisterPage = () => {
  return (
    <AuthLayout title='Register'>
      <form>
        <Grid container>
          <Grid item xs = {12} >
            <TextField 
              label = "Nombre Completo" 
              type = "text" 
              placeholder='Christhian Juan'
              fullWidth
            />
          </Grid>

          <Grid item xs = {12} sx = {{ mt:2 }}>
            <TextField 
              label = "Correo" 
              type = "email" 
              placeholder='christhian25@gmail.com'
              fullWidth
            />
          </Grid>

          <Grid item xs = {12} sx = {{ mt:2 }}>
            <TextField 
              label = "Contraseña" 
              type = "password" 
              placeholder='**********'
              fullWidth
            />
          </Grid>

          <Grid container spacing = {2} sx = {{ mt:1, mb:2}}>
            <Grid item xs = {12}>
              <Button variant = "contained" fullWidth>
                Crear Cuenta
              </Button>
            </Grid>
          </Grid>

          <Grid container direction = "row" justifyContent="end">
            <Typography sx = {{ mr:1 }}>¿ Ya tienes cuenta ?</Typography>
            <Link component={RouterLink} color= 'inherit' to = "/auth/login">
              Ingresar
            </Link> 
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
