import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDmQP40Ooav019VjlAQWL6tIpGFhIsOWwE",
  authDomain: "crowrl.firebaseapp.com",
  projectId: "crowrl",
  storageBucket: "crowrl.appspot.com",
  messagingSenderId: "967952319151",
  appId: "1:967952319151:web:33bb1a0afdd922244a8a5a",
};

const firebaseApp = initializeApp(firebaseConfig);


const db = getFirestore(firebaseApp);

export default db;