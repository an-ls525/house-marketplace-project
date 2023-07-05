// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBsSScUl9kSP4ttJBNbGKU0o79MPSYlBDw',
  authDomain: 'traversy-house-marketpla-a7498.firebaseapp.com',
  projectId: 'traversy-house-marketpla-a7498',
  storageBucket: 'traversy-house-marketpla-a7498.appspot.com',
  messagingSenderId: '632445016335',
  appId: '1:632445016335:web:69b275ae9f434072b5c67a',
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
