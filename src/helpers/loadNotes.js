import { collection, getDocs } from "firebase/firestore/lite"
import { FirebaseDB } from "../firebase/config"

export const loadNotes = async ( uid = "") => {

  const collectionRef = collection( FirebaseDB, `${uid}/journal/notes` );
  const docs = await getDocs( collectionRef );
  
  const notes = [];
  docs.forEach( document => {
    notes.push({
      id: document.id,
      ...document.data()
    })
  })

  return notes;
}