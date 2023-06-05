import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';
import Login from '../components/Login';
import { getAuth } from 'firebase/auth';

export default function SignupPage() {
  const { currentUser } = useAuth();
  const auth = getAuth();
  const user = auth.currentUser;
  let router = useRouter();
  if (currentUser) {
    router.push('/cabinet');
  }
  return (
    <>
      <Login />
    </>
  );
}
