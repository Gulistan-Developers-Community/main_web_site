import { useRef } from 'react';
import Image from "next/image";
import dynamic from "next/dynamic";
import LogoImage from '../public/images/logo.png';
// const GeneratePDF = dynamic(()=>import("../components/gen/generatorPDF"),{ssr:false});

import { jsPDF } from "jspdf";

function generatePDF() {
const doc = new jsPDF({
  orientation: "landscape",
  unit: "in",
  format: [4, 2]
});

doc.text("Hello world!", 1, 1);
doc.save("Certificate.pdf");  
}



export default function HomePage() {
        const useReff = useRef();

        return(
          <>
          <div className='flex justify-center'>

          
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={generatePDF}>
       download
        </button>
        </div>
        </>
        );
}
