import { useRef } from 'react';
import Image from "next/image";
import dynamic from "next/dynamic";
import LogoImage from '../public/images/logo.png';
// const GeneratePDF = dynamic(()=>import("../components/gen/generatorPDF"),{ssr:false});
import { getAuth } from "firebase/auth";
import { useAuth } from "../context/AuthContext";
import { jsPDF } from "jspdf";


function generatePDF() {
  
const doc = new jsPDF({
  orientation: "landscape",
  unit: "in",
  format: [4, 2]
});

doc.text('qwe', 1, 1);
doc.save("Certificate.pdf");  
}



export default function HomePage() {
  const { currentUser } = useAuth()
  const auth = getAuth();
  const user = auth.currentUser;
console.log(user.displayName)
        const useReff = useRef();

        return(
          <>
          <div className='flex flex-col justify-center max-w-lg'>
          <form className='flex flex-col' onSubmit={console.log('submited')}>
            <input className='border-solid border-2 p-2 rounded-lg' placeholder='name'></input>
            <input className='border-solid border-2 p-2 rounded-lg' placeholder=''></input>
            <button className='border-2 rounded-lg bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4' onClick={null}>
              change
                </button>
          </form>
                <button className='bg-blue-500 rounded-lg hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={generatePDF}>
       download
        </button>
        </div>
        </>
        );
}
