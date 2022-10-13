import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';

import { FirebaseAuth } from './config';

const googleprovider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleprovider);
    // const credentials = GoogleAuthProvider.credentialFromResult( result );
    const user = result.user;
    const { displayName, email, photoURL, uid } = user;

    return {
      ok: true,
      displayName,
      email,
      photoURL, 
      uid
    }
    
  } catch (error) {
    console.log(error);
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;

    return {
      ok: false,
      errorMessage
    }
  }
}

export const registerUserWithEmailPassword = async ({email, password, displayName}) => {
  try {
    const response = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
    const { uid, photoURL } = response.user

    // Actualizar el displayName del usuario en Firebase
    await updateProfile( FirebaseAuth.currentUser, { displayName } );

    return {
      ok: true,
      uid,
      photoURL,
      email,
      displayName
    }
  } catch (error) {
    console.log(error)
    return {
      ok: false,
      errorMessage: error.message
    }
  }
}

export const loginWithEmailPassword = async (email, password) => {
  try {
    const response =  await signInWithEmailAndPassword(FirebaseAuth, email, password);
    const { uid, displayName, photoURL } = response.user;
    return {
      ok: true,
      uid,
      displayName,
      email,
      photoURL
    }
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      errorMessage: error.message
    }
  }
  
  
}

export const logoutFirebase = async () => {
  return await FirebaseAuth.signOut();
}