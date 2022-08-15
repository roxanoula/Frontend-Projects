import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';
import {GlobalStyles} from './global-styles'
import {FirebaseContext} from './context/firebase'
import { seedDatabase } from './seed';

const config = {
  apiKey: "AIzaSyCVTHsv2kz6vfpNElHGJ_bbhlTzLqJhe5o",
  authDomain: "moviesapp-example.firebaseapp.com",
  projectId: "moviesapp-example",
  storageBucket: "moviesapp-example.appspot.com",
  messagingSenderId: "930771531864",
  appId: "1:930771531864:web:47cbf3aec4d7fd4e0b722d",
  measurementId: "G-RFVP5PTRB8"
}

const firebase = window.firebase.initializeApp(config)
const db = firebase.firestore();


// Makesure your firebase RULES here (https://console.firebase.google.com/u/0/project/moviesapp-example/firestore/rules)
// are set to:
/*
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read;
      allow write;
    }
  }
}
*/

//Use this line only once to populate the database.
/* seedDatabase(firebase) */

ReactDOM.render(
    <>
      <FirebaseContext.Provider value={{ firebase: window.firebase }}>
          <GlobalStyles />
          <App />
      </FirebaseContext.Provider>
    </>
  , 
    document.getElementById('root')
)