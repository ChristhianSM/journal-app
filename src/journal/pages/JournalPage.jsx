import { AddOutlined, MailOutline } from '@mui/icons-material'
import { IconButton, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startNewNote } from '../../store/journal'
import { JournalLayout } from '../layout/JournalLayout'
import { NoteView, NothingSelectedView } from '../views'

export const JournalPage = () => {
  const { isSaving, activeNote } = useSelector( state => state.journal );
  const dispatch = useDispatch();
  const handleClickNewNote = () => {
    dispatch( startNewNote() );
  }
  return (
    <JournalLayout>
      {/* <Typography variant="h1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit blanditiis ad ipsam. Accusantium vero dolore ex consequuntur iure praesentium optio distinctio voluptates, perspiciatis expedita molestiae provident, laudantium dolorum sapiente fugit?</Typography> */}
      
      {/* Cuando tenemos una nota activa mostramos el componente NoteView */}
      {
        !activeNote ? <NothingSelectedView /> : <NoteView />
      }


      <IconButton
        disabled = { isSaving }
        onClick={ handleClickNewNote }
        size = "large"
        sx = {{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.9},
          position: "fixed",
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx = {{fontSize: 30}}/>
      </IconButton>
    </JournalLayout>
  )
}
