import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = { //used for firebase configuration 
    apiKey: "AIzaSyD0IwPPArDtdjpWxnba6vaLTDf7rmazFms",
    authDomain: "facebook-clone-98641.firebaseapp.com",
    projectId: "facebook-clone-98641",
    storageBucket: "facebook-clone-98641.appspot.com",
    messagingSenderId: "713649127123",
    appId: "1:713649127123:web:1e80da1fe3e2b05a5f5e26",
    measurementId: "G-Q1ZXVF9FE0"
};
  
//to connect react front end to firbase backend
const firebaseApp = firebase.initializeApp(firebaseConfig);
//on firebase go to Firestore Database do the process, 
//then go to authentication and click on sign in method and choose google this will allow google authentication when logging in to app * /
const db = firebaseApp.firestore(); //get access to the database

const auth = firebase.auth(); //allow us to loggin in sign out etc.
//next we need a provider
const provider = new firebase.auth.GoogleAuthProvider();

//to access outside
export { auth, provider };
export default db;