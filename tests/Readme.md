# Singlish → Sinhala Transliteration Automated Testing

## Overview
This project automates the testing of a Singlish → Sinhala transliteration web application using **Playwright**.  
The purpose is to validate the accuracy of transliteration outputs and verify UI functionality against a curated set of **35 original test cases**.  

The test cases were designed in Excel, converted to JSON, and executed through Playwright scripts. They cover:
- **Positive Functional Tests (`Pos_Fun_*`)** – everyday sentences, questions, requests, blessings, formatted inputs (dates, currency, measurements).
- **Negative Functional Tests (`Neg_Fun_*`)** – invalid inputs such as typos, slang, unsupported characters, excessive vowels, and joined words.
- **UI Tests (`Pos_UI_*`)** – validation of the "Copy to Clipboard" functionality.
- To run the tests first you need to convert the excel file to json using the script.


## Tools & Dependencies
- [Playwright](https://playwright.dev/) – browser automation and testing framework
- [xlsx](https://www.npmjs.com/package/xlsx) – Excel to JSON conversion
- Node.js – runtime environment

Install dependencies:
```bash
npm install

npm install xlsx

node scripts/convert-excel.js

npx playwright test




