import { jsPDF } from 'jspdf';
import React from "react";
import { getAuth } from "firebase/auth";

function generatePDF() {
  const auth = getAuth();
  const user = auth.currentUser;

  const doc = new jsPDF({
    orientation: "landscape",
    unit: "in",
    format: [10, 8],
  });

  doc.text(user.displayName, 3, 5);
  doc.save("Certificate.pdf");
}

export default function HomePage() {
  return (
    <>
      <button
        className="bg-blue-500 rounded-lg hover:bg-blue-700 text-white font-bold py-2 px-4"
        // @ts-ignore
        onClick={generatePDF}
      >
        download
      </button>
    </>
  );
}
