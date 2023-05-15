import { initializeApp, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from "firebase/storage";
import {
  deleteObject,
  ref,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import {
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
  getFirestore,
  onSnapshot,
  orderBy,
} from "firebase/firestore";

import { useEffect, useState } from "react";
import { useAuth } from "./context/AuthContext";

export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDERID,
  appId: process.env.NEXT_PUBLIC_APPID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENTID,
};

// console.log(firebaseConfig)
function initializeAppIfNecessary() {
  try {
    return getApp();
  } catch (error) {
    firebaseConfig;
    return initializeApp(firebaseConfig);
  }
}

// const app = initializeAppIfNecessary();
// const auth = getAuth(app);
// const db = getFirestore(app);

export const deleteFile = (filePath) => {
  const imageRef = ref(storage, filePath);
  return deleteObject(imageRef);
};

const uploadFile = (file, filePath) => {
  return new Promise(async (resolve, reject) => {
    const storageRef = ref(storage, filePath);
    try {
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      resolve(url);
    } catch (error) {
      reject(error);
    }
  });
};
export const updateUserRecords = (collectionName, uid, updatedObj) => {
  return new Promise(async (resolve, reject) => {
    const q = query(collection(db, collectionName), where("uid", "==", uid));
    try {
      const snapshot = await getDocs(q);
      const updatePromises = [];
      snapshot.forEach((document) => {
        updatePromises.push(
          updateDoc(doc(db, collectionName, document.id), updatedObj)
        );
      });
      await Promise.all(updatePromises);
      resolve();
    } catch (error) {
      reject(error);
    }
  });
};

export const useFirestore = (collectionName = "gallery") => {
  const [documents, setDocuments] = useState([]);
  const { setAlert } = useAuth();
  useEffect(() => {
    const q = query(
      collection(db, collectionName),
      orderBy("timestamp", "desc")
    );
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const docs = [];
        snapshot.forEach((doc) => {
          docs.push({ id: doc.id, data: doc.data() });
        });
        setDocuments(docs);
      },
      (error) => {
        setAlert({
          isAlert: true,
          severity: "error",
          message: error.message,
          timeout: 8000,
          location: "main",
        });
        console.log(error);
      }
    );

    return () => unsubscribe();
  }, [collectionName, setAlert]);

  return { documents };
};

export const app = initializeAppIfNecessary();
export const storage = getStorage();
export const db = getFirestore(app);
export const auth = getAuth(app);
