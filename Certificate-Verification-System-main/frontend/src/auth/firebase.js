import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBUiJyDj9xhjOWMN8wd2Xj_3cNxPiVobzU",
    authDomain: "certificate-verification-fa6fb.firebaseapp.com",
    projectId: "certificate-verification-fa6fb",
    storageBucket: "certificate-verification-fa6fb.appspot.com",
    messagingSenderId: "217700847530",
    appId: "1:217700847530:web:90957fee023ab90db4a5d3",
    measurementId: "G-BJ47GPCHCK"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth,db };
