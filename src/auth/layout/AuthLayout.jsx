import { Grid, Typography } from '@mui/material'
import React from 'react'

export const AuthLayout = ({title = "", children}) => {
  return (
    <Grid
      container
      spacing = { 0 }
      direction = "column"
      alignItems = "center"
      justifyContent= "center"
      sx = {{minHeight: "100vh", backgroundColor: 'primary.main', padding: 4}}
    >
      <Grid
        item
        className = "box-shadow"
        xs = {3}
        sx = {{ 
          backgroundColor: "white", 
          padding: 3, 
          borderRadius: 2,
          width: {md: 450}
        }}
      >
        <Typography variant = "h5" sx = {{ mb:1 }}>{title}</Typography>

        {/* Children */}
        { children }

      </Grid>
    </Grid>
  )
}
