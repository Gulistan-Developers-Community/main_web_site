import '../styles/global.css';
import Layout from '../components/Layout';
import AuthProvider from '../context/AuthContext';
import { NextUIProvider } from '@nextui-org/react';

export default function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
       <NextUIProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </NextUIProvider>
    </AuthProvider>
  );
}
