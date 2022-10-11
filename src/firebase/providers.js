import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { FirebaseAuth } from './config';

const googleprovider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleprovider);
    const credentials = GoogleAuthProvider.credentialFromResult( result );
    console.log(credentials);
  } catch (error) {
    console.log(error)
  }
}