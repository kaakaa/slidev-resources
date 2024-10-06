import fs from 'fs';
import pdf2img from 'pdf-img-convert';

const pdf = process.argv[2];
const dest = process.argv[3];

async function convert(input:string, output:string) {
    const pdfArray = await pdf2img.convert(input, {page_numbers: [1]});
    fs.writeFileSync(output, pdfArray[0], "base64");
}

convert(pdf, dest);
