import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDSczUVKDwzIABl2aexOH75_LoWVI8A91M",
  authDomain: "message-maker-a7160.firebaseapp.com",
  databaseURL: "https://message-maker-a7160.firebaseio.com",
  projectId: "message-maker-a7160",
  storageBucket: "message-maker-a7160.appspot.com",
  messagingSenderId: "420883896451",
  appId: "1:420883896451:web:1e1f1d4cb749ee44dae3b6",
  measurementId: "G-D3WMDX9ZST"
};

firbase.initalizeApp(firebaseConfig);
firebase.firestore();

export default firebase;