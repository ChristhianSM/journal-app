import { Drawer,Box, Toolbar, Typography, Divider, List } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { SiderItem } from './SiderItem'

export const Sidebar = ({drawerWidth = 240}) => {
  const { displayName, photoURL} = useSelector(state => state.auth);
  const { notes } = useSelector( state => state.journal );
  return (
    <Box
      component = "nav"
      sx = {{ minWidth : { sm: drawerWidth, flexShrink: {sm:0}}}}
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
            notes.map( note => (
             <SiderItem key={note.id} {...note} />
            ))
          }
        </List>
      </Drawer>
    </Box>
  )
}
