import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";


import { useEffect, useState } from "react";

// Initialize Firebase

const auth = getAuth();
const storage = getStorage();

export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    // @ts-ignore
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, [])

  return currentUser;
}

/**
 * @param {Blob | Uint8Array | ArrayBuffer} file
 * @param {import("@firebase/auth").User} currentUser
 * @param {{ (value: import("react").SetStateAction<boolean>): void; (arg0: boolean): void; }} setLoading
 */

export async function upload(file, currentUser, setLoading) {
  const fileRef = ref(storage, "UserProfilePhotos/" + currentUser.uid + ".png");

  setLoading(true);
  
  const snapshot = await uploadBytes(fileRef, file);
  const photoURL = await getDownloadURL(fileRef);

  updateProfile(currentUser, {photoURL});
  
  setLoading(false);
  alert("Uploaded file!");
}

