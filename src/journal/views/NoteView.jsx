import { SaveOutlined, UploadOutlined } from '@mui/icons-material'
import { Button, Grid, IconButton, TextField, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useRef } from 'react'
import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2';
import "sweetalert2/dist/sweetalert2.css";
import { useForm } from '../../hooks/useForm'
import { setActiveNote, startSaveNote, startUploadingFiles } from '../../store/journal'
import { ImagesGalery } from '../components'

export const NoteView = () => {
  const { activeNote, messageSaved, isSaving } = useSelector( state => state.journal );

  const dispatch = useDispatch();

  const { title, body, date, onInputChange, formState } = useForm(activeNote);

  const dateString = useMemo(() => {
    const newDate = new Date(date);
    return newDate.toUTCString();
  }, [date]);

  useEffect(() => {
    dispatch( setActiveNote(formState) );
  }, [formState]);

  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire("Nota actualizada", messageSaved, 'success')
    }
  }, [messageSaved]);

  const fileInputRef = useRef()

  const handleSaveNote = () => {
    dispatch( startSaveNote() );
  }

  const handleFileInputChange = ({target}) => {
    console.log(target.files);
    if (target.files === 0) return;

    dispatch( startUploadingFiles(target.files) );
  }

  return (
    <Grid 
      className='animate__animated animate__fadeIn animate__faster'
      container 
      direction="row" 
      justifyContent = "space-between"
      alignItems="center"
      sx = {{mb:1}}
    >
      <Grid item>
        <Typography fontSize = {39} fontWeight = "light">
          { dateString }
        </Typography>
      </Grid>
      <Grid item>
        <input
          style={{ display: "none" }}
          type={"file"}
          multiple
          onChange={ handleFileInputChange }
          ref = { fileInputRef }
        />
        <IconButton
          color='primary'
          disabled = { isSaving }
          onClick = { () => fileInputRef.current.click() }
        >
          <UploadOutlined></UploadOutlined>
        </IconButton>

        <Button
          disabled = {isSaving}
          color = "primary" 
          sx = {{padding:2}}
          onClick = { handleSaveNote }
        >
          <SaveOutlined sx = {{fontSize: 30, mr:1}}/>
          Guardar
        </Button>
      </Grid>

      <Grid container>
        <TextField 
          type = "text"
          variant = "filled"
          fullWidth
          label =  "Titulo"
          placeholder='Ingrese un titulo'
          sx = {{border: "none", mb:1}}
          value = { title }
          name = "title"
          onChange = { onInputChange }
        />
        <TextField 
          type = "text"
          variant = "filled"
          multiline
          fullWidth
          placeholder='¿Que sucedio en el dia de hoy?'
          minRows={5}
          name = "body"
          value = { body }
          onChange = { onInputChange }
        />
      </Grid>

    {/* Galeria de imagenes */}
    <ImagesGalery />
    </Grid>
  )
}
