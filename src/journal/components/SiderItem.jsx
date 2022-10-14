import { TurnedInNot } from '@mui/icons-material'
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { setActiveNote } from '../../store/journal'

export const SiderItem = ({ id, title, body, date, imageUrls = [] }) => {
  const dispatch =  useDispatch();

  const newTitle = useMemo( () => {
    return title.length > 17 ? title.substring(0, 17) + "..." : title;
  }, [title]);

  const handleClickNote = () => {
    dispatch( setActiveNote({id, title, body, date, imageUrls}))
  }

  return (
    <ListItem 
      disablePadding
      onClick={ handleClickNote }
    >
      <ListItemButton>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid 
          container
          alignItems={"center"}>
          <ListItemText primary = { newTitle } />
          <ListItemText secondary = { body } />
        </Grid>
      </ListItemButton>
    </ListItem>
  )
}
