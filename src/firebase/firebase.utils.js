import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyB86ttzsw0BogkGYPcpDqL_YXyM-ow2TA8',
  authDomain: 'crwn-db-5a1ff.firebaseapp.com',
  databaseURL: 'https://crwn-db-5a1ff.firebaseio.com',
  projectId: 'crwn-db-5a1ff',
  storageBucket: 'crwn-db-5a1ff.appspot.com',
  messagingSenderId: '7214813698',
  appId: '1:7214813698:web:4ec6b458cf464c4cd64d1b'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;