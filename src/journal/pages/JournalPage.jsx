import { AddOutlined, MailOutline } from '@mui/icons-material'
import { IconButton, Typography } from '@mui/material'
import React from 'react'
import { JournalLayout } from '../layout/JournalLayout'
import { NoteView, NothingSelectedView } from '../views'

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography variant="h1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit blanditiis ad ipsam. Accusantium vero dolore ex consequuntur iure praesentium optio distinctio voluptates, perspiciatis expedita molestiae provident, laudantium dolorum sapiente fugit?</Typography> */}
      
      {/* NothingSelected */}
      <NothingSelectedView />
      {/* NoteView */}
      {/* <NoteView /> */}


      <IconButton
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
