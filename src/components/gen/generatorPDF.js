import { jsPDF } from "jspdf";

function generatePDF() {
  
const doc = new jsPDF({
  orientation: "landscape",
  unit: "in",
  format: [4, 2]
});

doc.text('sertifikat', 1, 1);
doc.save("Certificate.pdf");  
}

export default function HomePage() {
        return(
          <>
          <button className='bg-blue-500 rounded-lg hover:bg-blue-700 text-white font-bold py-2 px-4' onClick={generatePDF}>
       download
        </button>
        
       </>
        );
}
