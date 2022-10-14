import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { fileUpload } from "../../helpers/filesUpload";
import { loadNotes } from "../../helpers/loadNotes";
import { addNewEntryNote, savingNewNote, setActiveNote, setNotes, setPhotosToActiveNote, setSaving, updateNote } from "./journalSlice";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    const newNote = {
      title: "title",
      body: "",
      date: new Date().getTime()
    }

    // Cambiamos el estado para que el usuario no aprete varias veces en crear una nota. 
    dispatch( savingNewNote() );

    const newDoc = doc( collection( FirebaseDB,`${uid}/journal/notes` ) );
    const setDocResp = await setDoc(newDoc, newNote);

    newNote.id = newDoc.id;

    // Agregamos la nota a nuestro estado global
    dispatch( addNewEntryNote(newNote) );

    // Ponemos la nota creada como nota activa
    dispatch( setActiveNote(newNote) );
  }
}

export const startLoadingNotes = () => {
  return async( dispatch, getState ) => {

    const { uid } = getState().auth;
    
    if (!uid) throw Error("UID no existe");

    // Traemos las notas de la base de datos
    const notes = await loadNotes(uid);
    
    // Guardamos las notas en nuestro estado
    dispatch( setNotes(notes) );
  }
}

export const startSaveNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const { activeNote } = getState().journal;

    // Bloqueamos el boton de agregar, ya que estamos actualizando una nota.
    dispatch( setSaving() );

    // Tenemos que remover el id de la nota activa
    const noteToFireStore = { ...activeNote};
    delete noteToFireStore.id;

    const docRef = doc( FirebaseDB, `${uid}/journal/notes/${activeNote.id}`);
    await setDoc( docRef, noteToFireStore, { merge: true });

    dispatch( updateNote(activeNote) );
  }
}

export const startUploadingFiles = ( files = [] ) => {
  return async (dispatch) => {
    // Bloqueamos los botones.
    dispatch( setSaving() );

    const fileUploadPromises = [];
    for (const file of files) {
      fileUploadPromises.push( fileUpload(file) );
    }
    const photosUrls = await Promise.all( fileUploadPromises );

    dispatch( setPhotosToActiveNote(photosUrls) );
  }
}