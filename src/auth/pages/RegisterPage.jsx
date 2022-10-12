import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'

const formData = {
  email: "",
  password: "",
  displayName: ""
}

const formValidations = {
  email: [(value) => value.includes("@"),"El correo debe tener una @"],
  password: [(value) => value.length >= 6,"El password debe de tener mas de 6 letras"],
  displayName: [(value) => value.length >= 2,"El nombre es obligatorio"]
}

export const RegisterPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const { displayName, email, password, onInputChange, isFormValid, emailValid, passwordValid, displayNameValid } = useForm(formData, formValidations);

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
  }

  return (
    <AuthLayout title='Register'>
      <form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item xs = {12} >
            <TextField 
              label = "Nombre Completo" 
              type = "text" 
              placeholder='Christhian Juan'
              fullWidth
              name = "displayName"
              value={displayName}
              onChange = {onInputChange}
              error = {!!displayNameValid && formSubmitted}
              helperText = {displayNameValid}
            />
          </Grid>

          <Grid item xs = {12} sx = {{ mt:2 }}>
            <TextField 
              label = "Correo" 
              type = "email" 
              placeholder='christhian25@gmail.com'
              fullWidth
              name = "email"
              value={email}
              onChange = {onInputChange}
              error = {!!emailValid && formSubmitted}
              helperText = {emailValid}
            />
          </Grid>

          <Grid item xs = {12} sx = {{ mt:2 }}>
            <TextField 
              label = "Contraseña" 
              type = "password" 
              placeholder='**********'
              fullWidth
              name = "password"
              value={password}
              onChange = {onInputChange}
              error = {!!passwordValid && formSubmitted}
              helperText = {passwordValid}
            />
          </Grid>

          <Grid container spacing = {2} sx = {{ mt:1, mb:2}}>
            <Grid item xs = {12}>
              <Button 
                type = "submit" 
                variant = "contained" 
                fullWidth
              >
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
