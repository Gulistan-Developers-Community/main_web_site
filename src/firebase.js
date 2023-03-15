import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig2 = {
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINGSENDERID,
    appId: process.env.APPID,
    measurementId: process.env.MEASUREMENTID
};

const firebaseConfig = {
  apiKey: "AIzaSyBVKH3s-ocn--d3IJy5sgzOiOAtBuX3M6M",
  authDomain: "gdev-4964b.firebaseapp.com",
  projectId: "gdev-4964b",
  storageBucket: "gdev-4964b.appspot.com",
  messagingSenderId: "36854348546",
  appId: "1:36854348546:web:1b267ba434d3f4477d601b",
  measurementId: "G-7XVY1VPYB5"
};

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)