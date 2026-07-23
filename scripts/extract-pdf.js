const fs = require('fs');
const { PDFParse } = require('pdf-parse');

const file = 'C:\\Users\\u33u66\\Downloads\\Detailed Content of our Website ESRS.pdf';
const out = 'C:\\Users\\u33u66\\Desktop\\explore-s\\scripts\\pdf-content.txt';

(async () => {
  const buffer = fs.readFileSync(file);
  const parser = new PDFParse({ data: buffer });
  const result = await parser.getText();
  fs.writeFileSync(out, result.text, 'utf8');
  console.log('PAGES:', result.total || (result.pages && result.pages.length));
  console.log('LENGTH:', result.text.length);
})().catch((e) => { console.error('ERR', e); process.exit(1); });
