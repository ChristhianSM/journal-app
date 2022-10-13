import React from 'react'
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material'
import { useDispatch } from 'react-redux'
import { startLogout } from '../../store/auth/thunks'

export const Navbar = ({drawetWidth = 240}) => {

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch( startLogout ());
  }
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
          <IconButton 
            color = "error"
            onClick={handleLogout}  
          >
            <LogoutOutlined />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
