import Login from '../../components/Login';
import UserDashboard from '../../components/UserDashboard';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/router';
import { getAuth } from 'firebase/auth';
import React from 'react';

export default function HomePage() {
  const auth = getAuth();
  const user = auth.currentUser;
  let router = useRouter();
  const { currentUser } = useAuth();
  if (!currentUser) {
    router.push('./signup');
  }
  console.log('currentUser: ', user);
  return (
    <>
      {!currentUser && <Login />}
      {currentUser && <UserDashboard />}
    </>
  );
}
