import { async } from "@firebase/util";
import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/providers";
import { clearNotesLogout } from "../journal";
import { checkingCredentials, login, logout } from "./authSlices"

export const checkingAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch( checkingCredentials() );
  }
}

export const startGoogleSignIn = (email, password) => {
  return async (dispatch) => {
    dispatch( checkingCredentials() );
    const result = await signInWithGoogle();
    
    if (!result.ok) dispatch( logout( result.errorMessage) );

    dispatch( login( result )); 
  }
}

export const startCreatingUserWithEmailPassword = ({email, password, displayName}) => {
  return async (dispatch) => {
    dispatch( checkingAuthentication() );
    const response = await registerUserWithEmailPassword( {email, password, displayName} );
    const { ok, uid, photoURL, errorMessage } = response;

    if (!ok) return dispatch( logout({errorMessage}) );

    dispatch( login({ uid, displayName, email, photoURL})); 
  }
}

export const startLoginWithEmailPassword = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const response = await loginWithEmailPassword( email, password);
    if (!response.ok) return dispatch( logout(response));
    dispatch( login(response) );
  }
}

export const startLogout = () => {
  return async( dispatch ) => {
    await logoutFirebase();

    dispatch( clearNotesLogout() );
    dispatch( logout() );
  }
}