import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

  var firebaseConfig = {
    apiKey: "AIzaSyDBdztzX85DZn7UuZaY32c8u-fKhUlmmE4",
    authDomain: "codedapp-18dde.firebaseapp.com",
    databaseURL: "https://codedapp-18dde.firebaseio.com",
    projectId: "codedapp-18dde",
    storageBucket: "codedapp-18dde.appspot.com",
    messagingSenderId: "1021802146930",
    appId: "1:1021802146930:web:6b16ff17705aa4578226eb",
    measurementId: "G-V0SMY7J1R4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase

