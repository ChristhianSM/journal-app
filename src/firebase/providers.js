import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

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