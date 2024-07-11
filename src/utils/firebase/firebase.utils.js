import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD63GW7GL_tH4p_rhjnM8qADw1cT9DuP4o",
  authDomain: "crwn-db-e4e43.firebaseapp.com",
  projectId: "crwn-db-e4e43",
  storageBucket: "crwn-db-e4e43.appspot.com",
  messagingSenderId: "750858550383",
  appId: "1:750858550383:web:d4c6ee2b65a89bd832219a",
};

// eslint-disable-next-line
const fireBaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const fireBaseAuth = getAuth();
export const signInWithGooglePopUp = () =>
  signInWithPopup(fireBaseAuth, googleProvider);
