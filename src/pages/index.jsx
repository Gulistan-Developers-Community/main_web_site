import dynamic from 'next/dynamic';
import React from 'react';
import { useAuth } from '../context/AuthContext';
import UserList from "../components/Lists/UserList";
import ProductList from "../components/Lists/ProductList";
// const GeneratePDF = dynamic(() => import('../components/gen/generatorPDF'), {
//   ssr: false,
// });
//<UserList />

export default function HomePage() {
  const { currentUser } = useAuth();

  return (
    <>
      <main>
        {currentUser && 'signed'}
        <ProductList />
      </main>
    </>
  );
}
