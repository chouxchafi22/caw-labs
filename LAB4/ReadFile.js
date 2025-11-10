
const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
if (args.length < 1) {
  console.error('Usage: node ReadFile.js <filename>');
  process.exit(1);
}

const filename = args[0];


const filePath = path.resolve(process.cwd(), filename);

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading file "${filename}":`, err.message);
    process.exit(2);
  }
  console.log(data);
});
