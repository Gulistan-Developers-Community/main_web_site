import { initializeApp, getApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'


export const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_APIKEY,
    authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECTID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDERID,
    appId: process.env.NEXT_PUBLIC_APPID,
    measurementId: process.env.NEXT_PUBLIC_MEASUREMENTID
};


// console.log(firebaseConfig)
function initializeAppIfNecessary() {
  try {
    return getApp();
  } catch (error) {
    firebaseConfig
    return initializeApp(firebaseConfig);
  }
}

const app = initializeAppIfNecessary();
const auth = getAuth(app)
const db = getFirestore(app)

 export {auth, db}