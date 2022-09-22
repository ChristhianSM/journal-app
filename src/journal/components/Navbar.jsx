import React from 'react'
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material'

export const Navbar = ({drawetWidth = 240}) => {
  return (
    <AppBar 
      position='fixed'
      sx = {{ 
              width : { sm: `calc(100% - ${drawetWidth}px)`},
              ml: { sm: `${drawetWidth}px`}
            }}
    >
      <Toolbar>
        <IconButton
          color = 'inherit'
          edge = "start"
          sx = {{ mr:2, display: {sm: "none"}}}
        >
          <MenuOutlined />
        </IconButton>

        <Grid container direction="row" justifyContent = "space-between" alignItems="center">
          <Typography variant = "h6" noWrap component = "div"> Journal App</Typography>
          <IconButton color = "error">
            <LogoutOutlined />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
