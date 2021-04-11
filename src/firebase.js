import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCFRPM0LJ8nngBkwrEVJdzhFP6z0L0ijaQ",
    authDomain: "e-clone-95388.firebaseapp.com",
    projectId: "e-clone-95388",
    storageBucket:"e-clone-95388.appspot.com",
    messagingSenderId: "518346025326",
    appId: "1:518346025326:web:97dba0d816f5d9ac9ff97f",
    measurementId: "G-54JCH8PE4F"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig)
  const db=firebaseApp.firestore()
  const auth =firebase.auth()

  export {db,auth};