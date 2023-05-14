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
  if (!user) {
    router.push('/signup');
  }
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [photoURL, setPhotoURL] = useState(
    'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
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
    if (currentUser?.photoURL) {
      setPhotoURL(currentUser.photoURL);
    }
  }, [currentUser]);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    formData.firstName = inputFirstName?.current?.value || '';
    formData.lastName = inputLastName?.current?.value || '';
    formData.age = inputAge?.current?.value || '';
    console.log(formData);
    //Form submission happens here
  };

  return (
    <>
      <div className="flex items-center flex-col justify-center mx-auto max-w-7xl">
        <form className="flex flex-col" onSubmit={null}>
          <div className="fields">
            <input type="file" onChange={handleChange} />
            <button disabled={loading || !photo} onClick={handleClick}>
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
        <p>name: {displayName || 'none'}</p>
        <p>email: {email || 'none'}</p>
        <p>photoURL: {photoURL1 || 'none'}</p>
        <p>{emailVerified || 'none'}</p>
        <p>uid: {uid || 'none'}</p>
      </div>
    </>
  );
}
