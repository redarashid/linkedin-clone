import { auth, provide } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import * as actions from "../actions";

export function signInAPI() {
  return (dispatch) => {
    signInWithPopup(auth, provide)
      .then((payload) => {
        dispatch(actions.setUser(payload.user));
      })
      .catch((error) => alert(error.message));
  };
}

export function getUserAuth() {
  // to change user account which in stored redux
  return (dispatch) => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(actions.setUser(user));
      }
    });
  };
}

export function signOutAPI() {
  return (dispatch) => {
    auth
      .signOut()
      .then(() => {
        dispatch(actions.setUser(null));
      })
      .catch((error) => alert(error.message));
  };
}
