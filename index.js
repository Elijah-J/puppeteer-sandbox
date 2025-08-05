import puppeteer from "puppeteer";

// (async () => {
//   // Launch a headless browser instance
//   const browser = await puppeteer.launch();

//   // Create a new browser page/tab
//   const page = await browser.newPage();

//   // Close the browser
//   await browser.close();
//   console.log("Browser opened and closed successfully!");
// })();

// --------------------------------------------------

// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();

//   // Navigate to a website
//   await page.goto("https://www.example.com");

//   // Get the page title
//   const title = await page.title();
//   console.log("Page title:", title);

//   await browser.close();
// })();

// --------------------------------------------------

// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();

//   // Navigate to the target website
//   await page.goto("https://www.example.com");

//   // Capture a screenshot and save it
//   await page.screenshot({ path: "screenshot.png" });

//   await browser.close();
//   console.log("Screenshot saved as screenshot.png");
// })();

// --------------------------------------------------

// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();

//   // Navigate to the page
//   await page.goto("https://example.com", {
//     waitUntil: "networkidle2", // Wait until network is idle
//   });

//   // Generate PDF from the page
//   await page.pdf({
//     path: "page.pdf",
//     format: "A4",
//     printBackground: true, // Include background colors/images
//   });

//   await browser.close();
//   console.log("PDF saved as page.pdf");
// })();

// --------------------------------------------------

// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();

//   await page.goto("https://example.com");

//   // Extract text from the first h1 element
//   const h1Text = await page.$eval("h1", (element) => element.textContent);
//   console.log("H1 text:", h1Text);

//   // Extract href from the first link
//   const firstLink = await page.$eval("a", (element) => element.href);
//   console.log("First link:", firstLink);

//   await browser.close();
// })();

// --------------------------------------------------

(async () => {
  // Launch browser in visible mode
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // Navigate to sandbox login page
  await page.goto("https://the-internet.herokuapp.com/login");

  // Wait 2 seconds
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // Type in the username box
  await page.type("#username", "tomsmith");

  // Wait 2 seconds
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // Type in the password box
  await page.type("#password", "SuperSecretPassword!");

  // Wait 2 seconds
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // Submit the form by pressing Enter
  await page.keyboard.press("Enter");

  // Wait for navigation to complete
  await page.waitForNavigation();

  // Wait 2 seconds
  await new Promise((resolve) => setTimeout(resolve, 2000));

  await browser.close();
})();
