import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
import { getAnalytics, isSupported } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyACp7nOybFAXlXWm7yATkjGtljaib83r5g",
  authDomain: "graphic-design-agencies.firebaseapp.com",
  projectId: "graphic-design-agencies",
  storageBucket: "graphic-design-agencies.appspot.com",
  messagingSenderId: "953872109025",
  appId: "1:953872109025:web:b9a9234cbe5fb935ec56a0",
  measurementId: "G-YR6TTYKR02"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

