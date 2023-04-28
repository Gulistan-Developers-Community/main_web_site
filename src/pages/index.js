import dynamic from "next/dynamic";
 
const GeneratePDF = dynamic(()=>import("../components/gen/generatorPDF"),{ssr:false});

export default function HomePage() {
        return(
          <>
          <main className="flex justify-center text-center p-2">
           <GeneratePDF/>
          </main>
          </>
        );
}
