const xlsx = require('xlsx');
const fs = require('fs');

// Read Excel file
const workbook = xlsx.readFile('IT23831568.xlsx');
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];

// Convert to JSON
const jsonData = xlsx.utils.sheet_to_json(sheet, { defval: "" });


const testCases = jsonData
  .map(row => ({
    id: row['TC ID'],
    name: row['Test case name'],
    input: row['Input'],
    expected: row['Expected output']
  }))
  .filter(tc => tc.id && tc.input && tc.expected); // remove rows with missing values

// Write JSON file
fs.writeFileSync('testcases.json', JSON.stringify(testCases, null, 2));
console.log('✅ Excel converted to testcases.json with', testCases.length, 'cases');


