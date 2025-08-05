import puppeteer from "puppeteer";

// ==================================================
// PUPPETEER SANDBOX - TABLE OF CONTENTS
// ==================================================
// 1. Basic Browser Launch - Foundation for all Puppeteer operations
// 2. Navigate to a Website and Get Title - Basic web scraping
// 3. Capture Website Screenshot - Visual testing and monitoring
// 4. Generate PDF from Webpage - Creating reports and archiving
// 5. Extract Data from Page Elements - Web scraping with selectors
// 6. Form Interaction and Login Automation - Form filling and submission
// 7. Page Scrolling and Infinite Scroll Handling - Dynamic content loading
// 8. Multiple Browser Tabs/Pages Management - Parallel processing
// 9. Cookie Management - Session handling and authentication
// 10. Network Request Interception - Mocking and traffic analysis
// 11. Download File Handling - Automated file downloads
// 12. Mobile Device Emulation - Responsive testing
// 13. Error Handling and Retry Logic - Robust automation
// 14. Performance Monitoring - Page load metrics
// 15. Keyboard and Mouse Actions - Advanced interactions
// ==================================================

// ==================================================
// 1. Basic Browser Launch
// Description: Demonstrates how to launch a headless browser,
// create a new page, and properly close the browser instance.
// This is the foundation for all Puppeteer operations.
// ==================================================
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

// ==================================================
// 2. Navigate to a Website and Get Title
// Description: Shows how to navigate to a URL and extract
// the page title. This is useful for basic web scraping
// and verifying page loads.
// ==================================================
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

// ==================================================
// 3. Capture Website Screenshot
// Description: Demonstrates how to take a screenshot of a webpage
// and save it to a file. Useful for visual testing, monitoring,
// or creating thumbnails of websites.
// ==================================================
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

// ==================================================
// 4. Generate PDF from Webpage
// Description: Shows how to convert a webpage into a PDF document.
// Includes options for page format and background rendering.
// Perfect for creating reports or archiving web content.
// ==================================================
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

// ==================================================
// 5. Extract Data from Page Elements
// Description: Demonstrates how to extract data from specific
// HTML elements using CSS selectors. Shows extraction of text
// content and attributes, essential for web scraping tasks.
// ==================================================
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

// ==================================================
// 6. Form Interaction and Login Automation
// Description: Demonstrates how to automate form filling and
// submission. Shows typing into input fields, handling passwords,
// and submitting forms. Runs in visible mode for debugging.
// ==================================================
// (async () => {
//   // Launch browser in visible mode
//   const browser = await puppeteer.launch({ headless: false });
//   const page = await browser.newPage();

//   // Navigate to sandbox login page
//   await page.goto("https://the-internet.herokuapp.com/login");

//   // Wait 2 seconds
//   await new Promise((resolve) => setTimeout(resolve, 2000));

//   // Type in the username box
//   await page.type("#username", "tomsmith");

//   // Wait 2 seconds
//   await new Promise((resolve) => setTimeout(resolve, 2000));

//   // Type in the password box
//   await page.type("#password", "SuperSecretPassword!");

//   // Wait 2 seconds
//   await new Promise((resolve) => setTimeout(resolve, 2000));

//   // Submit the form by pressing Enter
//   await page.keyboard.press("Enter");

//   // Wait for navigation to complete
//   await page.waitForNavigation();

//   // Wait 2 seconds
//   await new Promise((resolve) => setTimeout(resolve, 2000));

//   await browser.close();
// })();

// --------------------------------------------------

// ==================================================
// 7. Page Scrolling and Infinite Scroll Handling
// Description: Demonstrates how to scroll through a page and handle
// infinite scroll scenarios. Useful for scraping social media feeds,
// product listings, or any page that loads content on scroll.
// ==================================================
(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://example.com");

  // Scroll to bottom of page
  await page.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight);
  });

  // Auto-scroll function for infinite scroll pages
  async function autoScroll(page) {
    await page.evaluate(async () => {
      await new Promise((resolve) => {
        let totalHeight = 0;
        const distance = 100;
        const timer = setInterval(() => {
          const scrollHeight = document.body.scrollHeight;
          window.scrollBy(0, distance);
          totalHeight += distance;

          if (totalHeight >= scrollHeight) {
            clearInterval(timer);
            resolve();
          }
        }, 100);
      });
    });
  }

  // Execute auto-scroll
  await autoScroll(page);

  // Wait a bit for any lazy-loaded content
  await new Promise((resolve) => setTimeout(resolve, 2000));

  await browser.close();
  console.log("Page scrolling completed!");
})();

// --------------------------------------------------

// ==================================================
// 8. Multiple Browser Tabs/Pages Management
// Description: Shows how to work with multiple tabs simultaneously.
// Useful for comparing data across sites, parallel processing,
// or automating workflows that require multiple browser contexts.
// ==================================================
// (async () => {
//   const browser = await puppeteer.launch();
//
//   // Open multiple pages
//   const page1 = await browser.newPage();
//   const page2 = await browser.newPage();
//   const page3 = await browser.newPage();
//
//   // Navigate to different sites in parallel
//   await Promise.all([
//     page1.goto("https://example.com"),
//     page2.goto("https://example.org"),
//     page3.goto("https://example.net")
//   ]);
//
//   // Get titles from all pages
//   const titles = await Promise.all([
//     page1.title(),
//     page2.title(),
//     page3.title()
//   ]);
//
//   console.log("Page titles:", titles);
//
//   // Switch between tabs
//   await page1.bringToFront();
//   await page2.bringToFront();
//
//   await browser.close();
// })();

// --------------------------------------------------

// ==================================================
// 9. Cookie Management
// Description: Demonstrates how to get, set, and delete cookies.
// Essential for maintaining sessions, testing different user states,
// or bypassing login screens with saved authentication.
// ==================================================
// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//
//   await page.goto("https://example.com");
//
//   // Get all cookies
//   const cookies = await page.cookies();
//   console.log("Current cookies:", cookies);
//
//   // Set a custom cookie
//   await page.setCookie({
//     name: "test_cookie",
//     value: "test_value",
//     domain: "example.com",
//     path: "/",
//     expires: Date.now() / 1000 + 3600 // 1 hour from now
//   });
//
//   // Get specific cookie
//   const testCookie = await page.cookies("https://example.com");
//   console.log("Test cookie:", testCookie.find(c => c.name === "test_cookie"));
//
//   // Delete specific cookie
//   await page.deleteCookie({ name: "test_cookie" });
//
//   // Clear all cookies
//   const client = await page.target().createCDPSession();
//   await client.send("Network.clearBrowserCookies");
//
//   await browser.close();
// })();

// --------------------------------------------------

// ==================================================
// 10. Network Request Interception
// Description: Shows how to intercept, modify, and block network
// requests. Useful for testing offline scenarios, blocking ads,
// mocking API responses, or analyzing network traffic.
// ==================================================
// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//
//   // Enable request interception
//   await page.setRequestInterception(true);
//
//   page.on("request", (request) => {
//     // Block images and stylesheets for faster loading
//     if (["image", "stylesheet", "font"].includes(request.resourceType())) {
//       request.abort();
//     }
//     // Mock API response
//     else if (request.url().includes("/api/data")) {
//       request.respond({
//         status: 200,
//         contentType: "application/json",
//         body: JSON.stringify({ mocked: true, data: "test" })
//       });
//     }
//     // Allow all other requests
//     else {
//       request.continue();
//     }
//   });
//
//   // Log response details
//   page.on("response", (response) => {
//     console.log(`${response.status()} - ${response.url()}`);
//   });
//
//   await page.goto("https://example.com");
//   await browser.close();
// })();

// --------------------------------------------------

// ==================================================
// 11. Download File Handling
// Description: Demonstrates how to handle file downloads in Puppeteer.
// Shows setting download directory and waiting for downloads to complete.
// Essential for automating report downloads or file exports.
// ==================================================
// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//
//   // Set download behavior
//   const client = await page.target().createCDPSession();
//   await client.send("Page.setDownloadBehavior", {
//     behavior: "allow",
//     downloadPath: "./downloads" // Make sure this directory exists
//   });
//
//   await page.goto("https://example.com/download-page");
//
//   // Click download button and wait for download
//   await Promise.all([
//     page.waitForResponse(response => response.url().includes(".pdf")),
//     page.click("#download-button")
//   ]);
//
//   // Wait a bit for download to complete
//   await page.waitForTimeout(3000);
//
//   await browser.close();
//   console.log("Download completed!");
// })();

// --------------------------------------------------

// ==================================================
// 12. Mobile Device Emulation
// Description: Shows how to emulate mobile devices for responsive
// testing. Includes viewport, user agent, and touch event simulation.
// Perfect for mobile web testing and responsive design verification.
// ==================================================
// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//
//   // Emulate iPhone 12
//   await page.emulate({
//     viewport: {
//       width: 390,
//       height: 844,
//       deviceScaleFactor: 3,
//       isMobile: true,
//       hasTouch: true
//     },
//     userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15"
//   });
//
//   await page.goto("https://example.com");
//
//   // Take mobile screenshot
//   await page.screenshot({ path: "mobile-view.png" });
//
//   // Simulate touch events
//   await page.tap("#mobile-menu-button");
//
//   await browser.close();
//   console.log("Mobile emulation completed!");
// })();

// --------------------------------------------------

// ==================================================
// 13. Error Handling and Retry Logic
// Description: Demonstrates robust error handling and retry mechanisms.
// Essential for creating reliable automation scripts that can handle
// network issues, element not found errors, and timeouts gracefully.
// ==================================================
// (async () => {
//   let browser;
//
//   try {
//     browser = await puppeteer.launch();
//     const page = await browser.newPage();
//
//     // Set default timeout
//     page.setDefaultTimeout(10000);
//
//     // Retry function for unreliable operations
//     async function retryOperation(fn, maxRetries = 3) {
//       for (let i = 0; i < maxRetries; i++) {
//         try {
//           return await fn();
//         } catch (error) {
//           console.log(`Attempt ${i + 1} failed:`, error.message);
//           if (i === maxRetries - 1) throw error;
//           await page.waitForTimeout(1000 * (i + 1)); // Exponential backoff
//         }
//       }
//     }
//
//     // Navigate with retry
//     await retryOperation(async () => {
//       await page.goto("https://example.com", {
//         waitUntil: "networkidle2",
//         timeout: 5000
//       });
//     });
//
//     // Wait for element with error handling
//     try {
//       await page.waitForSelector("#may-not-exist", { timeout: 3000 });
//     } catch (error) {
//       console.log("Element not found, continuing...");
//     }
//
//     // Safe element interaction
//     const element = await page.$("#button");
//     if (element) {
//       await element.click();
//     } else {
//       console.log("Button not found, skipping click");
//     }
//
//   } catch (error) {
//     console.error("Script failed:", error);
//   } finally {
//     if (browser) {
//       await browser.close();
//     }
//   }
// })();

// --------------------------------------------------

// ==================================================
// 14. Performance Monitoring
// Description: Shows how to collect performance metrics and timing data.
// Useful for monitoring page load times, identifying bottlenecks,
// and ensuring optimal user experience in automated tests.
// ==================================================
// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//
//   // Enable performance tracking
//   await page.evaluateOnNewDocument(() => {
//     window.addEventListener("load", () => {
//       window.loadTime = Date.now();
//     });
//   });
//
//   const startTime = Date.now();
//   await page.goto("https://example.com");
//   const loadTime = Date.now() - startTime;
//
//   // Get performance metrics
//   const metrics = await page.metrics();
//   console.log("Page metrics:", metrics);
//
//   // Get detailed performance timing
//   const performanceData = await page.evaluate(() => {
//     const timing = performance.timing;
//     return {
//       dns: timing.domainLookupEnd - timing.domainLookupStart,
//       tcp: timing.connectEnd - timing.connectStart,
//       request: timing.responseStart - timing.requestStart,
//       response: timing.responseEnd - timing.responseStart,
//       dom: timing.domComplete - timing.domLoading,
//       total: timing.loadEventEnd - timing.navigationStart
//     };
//   });
//
//   console.log("Load time:", loadTime + "ms");
//   console.log("Performance breakdown:", performanceData);
//
//   // Coverage analysis
//   await page.coverage.startJSCoverage();
//   await page.coverage.startCSSCoverage();
//
//   await page.goto("https://example.com");
//
//   const jsCoverage = await page.coverage.stopJSCoverage();
//   const cssCoverage = await page.coverage.stopCSSCoverage();
//
//   console.log("JS Coverage:", jsCoverage.length);
//   console.log("CSS Coverage:", cssCoverage.length);
//
//   await browser.close();
// })();

// --------------------------------------------------

// ==================================================
// 15. Keyboard and Mouse Actions
// Description: Demonstrates advanced keyboard and mouse interactions.
// Shows typing with delays, keyboard shortcuts, mouse movements,
// drag and drop, and complex user interaction simulation.
// ==================================================
// (async () => {
//   const browser = await puppeteer.launch({ headless: false });
//   const page = await browser.newPage();
//
//   await page.goto("https://example.com/form");
//
//   // Type with realistic delays
//   await page.type("#search", "puppeteer automation", { delay: 100 });
//
//   // Keyboard shortcuts
//   await page.keyboard.down("Control");
//   await page.keyboard.press("A"); // Select all
//   await page.keyboard.up("Control");
//
//   await page.keyboard.press("Backspace"); // Clear selection
//
//   // Special keys
//   await page.keyboard.press("Tab"); // Move to next field
//   await page.keyboard.press("Enter"); // Submit form
//
//   // Mouse movements
//   await page.mouse.move(100, 200); // Move to coordinates
//   await page.mouse.click(300, 400); // Click at position
//
//   // Double click
//   await page.mouse.click(300, 400, { clickCount: 2 });
//
//   // Right click
//   await page.mouse.click(300, 400, { button: "right" });
//
//   // Drag and drop
//   await page.mouse.move(100, 100);
//   await page.mouse.down();
//   await page.mouse.move(300, 300);
//   await page.mouse.up();
//
//   // Hover over element
//   await page.hover("#menu-item");
//
//   await browser.close();
// })();
