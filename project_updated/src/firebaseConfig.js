import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, set } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDEXAMPLEEXAMPLEEXAMPLEEXAMPLE",
  authDomain: "elgloton-enmascarado.firebaseapp.com",
  databaseURL: "https://elgloton-enmascarado-default-rtdb.firebaseio.com",
  projectId: "elgloton-enmascarado",
  storageBucket: "elgloton-enmascarado.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abc123def456ghi789jkl"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, onValue, set };