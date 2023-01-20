import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCAjzWesE19qjZsmLSN-WD4nR_R7gDoAz4",
    authDomain: "psquare-cd202.firebaseapp.com",
    projectId: "psquare-cd202",
    storageBucket: "psquare-cd202.appspot.com",
    messagingSenderId: "222558165646",
    appId: "1:222558165646:web:a5de6fa407e360bb00c7df",
    measurementId: "G-048FSYCZEN"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
