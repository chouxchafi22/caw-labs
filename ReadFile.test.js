// fileImport.test.js
const { readFileContent } = require('./fileImport');
const fs = require('fs');

jest.mock('fs');

describe('readFileContent()', () => {
  test('reads file successfully', done => {
    fs.readFile.mockImplementation((path, encoding, cb) => {
      cb(null, "File content here");
    });

    readFileContent("test.txt", (err, data) => {
      expect(err).toBeNull();
      expect(data).toBe("File content here");
      done();
    });
  });

  test('handles file read error', done => {
    fs.readFile.mockImplementation((path, encoding, cb) => {
      cb(new Error("File missing"), null);
    });

    readFileContent("missing.txt", (err, data) => {
      expect(err).toContain("Error reading file");
      expect(data).toBeNull();
      done();
    });
  });
});
