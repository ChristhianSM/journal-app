import { TurnedInNot } from '@mui/icons-material'
import { Drawer,Box, Toolbar, Typography, Divider, List, ListItem, ListItemButton, ListItemIcon, Grid, ListItemText } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

export const Sidebar = ({drawerWidth = 240}) => {
  const { displayName, photoURL} = useSelector(state => state.auth);
  return (
    <Box
      component = "nav"
      sx = {{ width : { sm: drawerWidth, flexShrink: {sm:0}}}}
    >
      <Drawer
        variant='permanent'
        open
        sx = {{
          display: {xs: 'block'},
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth}
        }}
      >
        <Toolbar>
          <Typography variant = "h6" noWrap component="div"> {displayName} </Typography>
        </Toolbar>
        <Divider />

        <List>
          {
            ['Enero', 'Febrero', 'Marzo', 'Abril'].map( text => (
              <ListItem keys = {text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <TurnedInNot />
                  </ListItemIcon>
                  <Grid container>
                    <ListItemText primary = {text} />
                    <ListItemText secondary = {'Lorem 20 asdasdasd asdasdasd asdasda'} />
                  </Grid>
                </ListItemButton>
              </ListItem>
            ))
          }
        </List>
      </Drawer>
    </Box>
  )
}
