import { jsPDF } from "jspdf";
import React, { useState } from "react";

function generatePDF(name) {
  const doc = new jsPDF({
    orientation: "landscape",
    unit: "in",
    format: [10, 8],
  });

  doc.text(name, 3, 5);
  doc.save("Certificate.pdf");
}

export default function HomePage() {
  // const [ProfilName, useProfileName] = useState("John Doe");
  return (
    <>
      {/* <input
        value={ProfilName}
        onChange={(e) => useProfileName(e.target.value)}
        placeholder="the name"
      ></input> */}
      <button
        className="bg-blue-500 rounded-lg hover:bg-blue-700 text-white font-bold py-2 px-4"
        // @ts-ignore
        onClick={generatePDF(ProfilName)}
      >
        download
      </button>
    </>
  );
}
