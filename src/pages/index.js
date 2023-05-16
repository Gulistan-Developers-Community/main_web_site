import dynamic from "next/dynamic";
import React from "react";

const GeneratePDF = dynamic(() => import("../components/gen/generatorPDF"), {
  ssr: false,
});

export default function HomePage() {
  return (
    <>
      <main className="flex justify-center text-center p-2">
        <GeneratePDF />
      </main>
    </>
  );
}
