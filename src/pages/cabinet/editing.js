import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from 'firebase/auth';
import { useAuth, upload } from '../../hooks/authHook';

import { getStorage, ref, uploadBytes } from 'firebase/storage';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Login from '../../components/Login';
import { useRouter } from 'next/router';
import React from "react";

export default function EditPage() {
  const auth = getAuth();
  const user = auth.currentUser;

  const displayName = user?.displayName;
  const email = user?.email;
  const photoURL1 = user?.photoURL;
  const emailVerified = user?.emailVerified;
  const uid = user?.uid;

  let router = useRouter();
  const currentUser = useAuth();

  useEffect(() => {
    if (!user) {
      router.push("/signup");
    }
  }, [router, user]);

  const [name, setName] = useState();
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [photoURL, setPhotoURL] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
  );
  console.log(currentUser);

  function handleChange(e) {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  }

  function handleClick() {
    upload(photo, currentUser, setLoading);
  }

  updateProfile(auth.currentUser, {
    displayName: name,
    photoURL: photo,
  })
    .then(() => {
      // Profile updated!
      // ...
    })
    .catch((error) => {
      // An error occurred
      // ...
    });

  useEffect(() => {
    // @ts-ignore
    if (currentUser?.photoURL) {
      // @ts-ignore
      setPhotoURL(currentUser.photoURL);
    }
  }, [currentUser]);

  return (
    <>
      <div className="flex items-center flex-col justify-center mx-auto max-w-7xl">
        <form className="flex flex-col" onSubmit={null}>
          <label
            htmlFor="email-address-icon"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Name
          </label>
          <div className="relative">
            <input
              type="text"
              id="email-address-icon"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John Doe"
              onChange={(e) =>
                setName(
                  // @ts-ignore
                  e.target.value
                )
              }
            />
          </div>

          <div className="fields flex flex-col">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="user_avatar"
            >
              Upload Profile photo
            </label>
            <input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              aria-describedby="user_avatar_help"
              id="user_avatar"
              type="file"
              onChange={handleChange}
            />
            <div
              className="mt-1 text-sm text-gray-500 dark:text-gray-300"
              id="user_avatar_help"
            ></div>

            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              disabled={loading || !photo}
              onClick={handleClick}
            >
              Upload
            </button>
            <Image
              width={20}
              height={20}
              src={photoURL}
              alt="Avatar"
              className="avatar"
            />
          </div>
        </form>
        <p>name: {displayName || "none"}</p>
        <p>email: {email || "none"}</p>
        <p>photoURL: {photoURL1 || "none"}</p>
        <p>{emailVerified || "none"}</p>
        <p>uid: {uid || "none"}</p>
      </div>
    </>
  );
}
