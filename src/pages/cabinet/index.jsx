import Login from '../../components/Login';
import UserDashboard from '../../components/UserDashboard';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/router';
import { getAuth } from 'firebase/auth';
import React from 'react';
import { db } from '../../firebase';
import { getFirestore, doc, getDocs, collection } from 'firebase/firestore';
import dynamic from 'next/dynamic';

const GeneratePDF = dynamic(() => import('../../components/gen/generatorPDF'), {
  ssr: false,
});

export default function HomePage() {
  const auth = getAuth();
  const user = auth.currentUser;
  let router = useRouter();
  const { currentUser } = useAuth();
  if (!currentUser) {
    router.push('./signup');
  }
  // console.log('currentUser: ', user);


  // async function catchData() {
  //   try {
  //     const docsSnap = await getDocs('users');
  //     if (docsSnap.docs.length > 0) {
  //       docsSnap.forEach(doc => {
  //         console.log(doc.data());

  //       })
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // catchData()

  return (
    <>
      {!currentUser && <Login />}
      {currentUser && [<UserDashboard />, <GeneratePDF />]}
    </>
  );
}
