import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

var config = {
  apiKey: 'AIzaSyBsc5fWMHR0JtnMu9o5jN1K7PJoBcN3F_U',
  authDomain: 'slack-app-08-12-19.firebaseapp.com',
  databaseURL: 'https://slack-app-08-12-19.firebaseio.com',
  projectId: 'slack-app-08-12-19',
  storageBucket: 'slack-app-08-12-19.appspot.com',
  messagingSenderId: '687794482825',
  appId: '1:687794482825:web:61c66c8bb8e78692'
};
// Initialize Firebase
firebase.initializeApp(config);

export default firebase;
