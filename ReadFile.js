const { readFileContent } = require('./fileImport');

readFileContent("test.txt", (err, data) => {
  console.log("ERROR:", err);
  console.log("DATA:", data);
});
