import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDkrwiIknxL2tNcLXvERb_eXBCfDz04cI4',
  authDomain: 'vincent-clothing.firebaseapp.com',
  databaseURL: 'https://vincent-clothing.firebaseio.com',
  projectId: 'vincent-clothing',
  storageBucket: '',
  messagingSenderId: '1073171913455',
  appId: '1:1073171913455:web:4e2015f462903bb7'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
