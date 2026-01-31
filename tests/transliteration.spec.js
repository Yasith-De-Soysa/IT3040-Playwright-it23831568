const { test, expect } = require('@playwright/test');
const fs = require('fs');

const testCases = JSON.parse(fs.readFileSync('testcases.json', 'utf-8'))
  .filter(tc => tc.id && tc.name && tc.input && tc.expected);

console.log("Loaded test cases:", testCases.length);

test.describe('Singlish → Sinhala Transliteration & UI', () => {
  for (const tc of testCases) {
    test(`${tc.id} - ${tc.name}`, async ({ page }) => {
      await page.goto('https://www.swifttranslator.com/');
       await page.fill('textarea[placeholder="Input Your Singlish Text Here."]', tc.input);

      // Adjust this based on actual output element
      const outputLocator = page.locator('div.whitespace-pre-wrap.overflow-y-auto');

      await expect(outputLocator).toHaveText(tc.expected, { timeout: 5000 });

      const actualOutput = await outputLocator.textContent();
      expect(actualOutput?.trim()).toBe(tc.expected.trim());
    });
  }
});

