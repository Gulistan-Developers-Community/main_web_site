import dynamic from 'next/dynamic';
import React from 'react';
import { useAuth } from '../context/AuthContext';

const GeneratePDF = dynamic(() => import('../components/gen/generatorPDF'), {
  ssr: false,
});

export default function HomePage() {
  const { currentUser } = useAuth();

  return (
    <>
      <main className="flex justify-center text-center p-2">
        {currentUser && <GeneratePDF />}
      </main>
    </>
  );
}
