
const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);



if (args.length === 0) {
  console.error('Usage examples:');
  console.error('  node exo4.js "Some text to save"');
  console.error('  node exo4.js destination.txt "Text to save to file"');
  process.exit(1);
}

let destFile;
let text;

if (args.length === 1) {
  destFile = 'f.txt';
  text = args[0];
} else {

  destFile = args[0];
  text = args.slice(1).join(' ');
}


const filePath = path.resolve(process.cwd(), destFile);

try {
  fs.writeFileSync(filePath, text, 'utf8');
  console.log('The file has been saved!');
 const content = fs.readFileSync(filePath, 'utf8');
  console.log('--- File content ---');
  console.log(content);
} catch (err) {
  console.error('Error writing or reading file:', err.message);
  process.exit(2);
}
