import { Box, Toolbar } from '@mui/material'
import React from 'react';
import { Navbar, Sidebar } from '../components';

const drawetWidth = 240;

export const JournalLayout = ({children}) => {
  return (
    <Box sx = {{display: "flex"}}>
      {/* Navbar  drawetWidth*/}
      <Navbar drawetWidth = {drawetWidth}/>

      {/* Sidebar  drawetWidth*/}
      <Sidebar drawetWidth = {drawetWidth} />

      <Box 
        component= "main" 
        sx = {{flexGrow: 1, p:3}}
      >
        <Toolbar />
        { children }
      </Box>
    </Box>
  )
}
