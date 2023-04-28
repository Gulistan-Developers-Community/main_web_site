import { getAuth, createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile, } from "firebase/auth";
import { useAuth } from "../../context/AuthContext";
import { useState } from 'react';
import { getStorage, ref, uploadBytes } from "firebase/storage";
const register = async (name, email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password).catch((err) =>
        console.log(err)
      );
      await sendEmailVerification(auth.currentUser).catch((err) =>
        console.log(err)
      );
      await updateProfile(auth.currentUser, { displayName: name }).catch(
        (err) => console.log(err)
      );
    } catch (err) {
      console.log(err);
    }
  };

export default function EditPage() {
  const storage = getStorage();
  const storageRef = ref(storage);
  const { currentUser } = useAuth()
  const auth = getAuth();
  const user = auth.currentUser;
  const [name, setName] = useState("");
  const imagesRef = ref(storage, 'images');
  console.log(imagesRef)
        return(
          <>
          <div className='flex items-center flex-col justify-center mx-auto max-w-7xl'>
          <form className='flex flex-col' onSubmit={register}>
            <input className='border-solid border-2 p-2 rounded-lg' onChange={(e) => setName(e.target.value)} placeholder='name'></input>
            <input className='border-solid border-2 p-2 rounded-lg' type="file" placeholder='foto'></input>
            <input className='border-solid border-2 p-2 rounded-lg' type="email" placeholder='email'></input>
            <input className='border-solid border-2 p-2 rounded-lg' type="password" placeholder='password'></input>
            <button className='border-2 rounded-lg bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4' onClick={() => register(name, email, password)}>
              change
                </button>
          </form>
                
        </div>
       </>
        );
}
