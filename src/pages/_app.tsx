import '../styles/global.css';
import Layout from '../components/Layout';
import AuthProvider from '../context/AuthContext';
import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
}
