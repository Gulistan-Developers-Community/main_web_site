import React from "react";
import { jsPDF,HTMLOptionImage } from "jspdf";
import { toPng,toCanvas } from "html-to-image";


const GeneratePdf = ({ html }) => {
  


// Default export is a4 paper, portrait, using millimeters for units

const doc = new jsPDF({
  orientation: "landscape",
  unit: "in",
  format: [4, 2]
});

doc.text("Hello world!", 1, 1);
doc.save("two-by-four.pdf");

};

export default GeneratePdf;