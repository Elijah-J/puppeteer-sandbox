import puppeteer from "puppeteer";

// ==================================================
// PUPPETEER SANDBOX - TABLE OF CONTENTS
// (Organized by complexity: Beginner → Advanced)
// ==================================================
// BEGINNER LEVEL:
// 1. Basic Browser Launch - Foundation for all Puppeteer operations
// 2. Navigate to a Website and Get Title - Basic web scraping
// 3. Capture Website Screenshot - Visual testing and monitoring
// 4. Extract Data from Page Elements - Web scraping with selectors
// 5. Wait for Element to Appear - Using waitForSelector
// 6. Set Viewport Size - Control browser window dimensions
// 7. Click and Wait for Navigation - Handle page transitions
// 8. Wait for Function - Wait for custom conditions
// 9. Get Page URL and Reload - Basic navigation methods
// 10. Count Elements on Page - Query multiple elements
// 11. Check if Element Exists - Safe element checking
// 12. Get Page Content - Extract full HTML
// 13. Type with Delay - Simulate human typing
// 14. Focus on Input Field - Direct element focus
//
// EASY LEVEL:
// 15. Form Interaction and Login Automation - Form filling and submission
// 16. Page Scrolling and Infinite Scroll Handling - Dynamic content loading
// 17. Generate PDF from Webpage - Creating reports and archiving
// 18. Keyboard and Mouse Actions - Basic input simulation
//
// INTERMEDIATE LEVEL:
// 19. Multiple Browser Tabs/Pages Management - Parallel processing
// 20. Mobile Device Emulation - Responsive testing
// 21. Cookie Management - Session handling and authentication
// 22. Browser Context Isolation - Parallel testing with isolated sessions
//
// ADVANCED LEVEL:
// 23. Download File Handling - Automated file downloads
// 24. Error Handling and Retry Logic - Robust automation
// 25. Network Request Interception - Mocking and traffic analysis
// 26. Performance Monitoring - Page load metrics
//
// EXPERT LEVEL:
// 27. Permission Management - Handle browser permissions programmatically
// 28. Accessibility Testing - Inspect accessibility tree and compliance
// 29. CDP Session and Advanced Browser Control - Low-level browser features
// 30. WebSocket and Real-time Communication Testing - Test real-time features
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
// 4. Extract Data from Page Elements
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
// 5. Wait for Element to Appear
// Description: Demonstrates how to wait for elements to appear on
// the page before interacting with them. Essential for handling
// dynamic content and avoiding "element not found" errors.
// ==================================================
// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();

//   await page.goto("https://example.com");

//   // Wait for a specific element to appear
//   await page.waitForSelector("#dynamic-content");
//   console.log("Element appeared!");

//   // Wait with custom timeout (5 seconds)
//   try {
//     await page.waitForSelector(".may-not-exist", { timeout: 5000 });
//   } catch (error) {
//     console.log("Element did not appear within 5 seconds");
//   }

//   await browser.close();
// })();

// --------------------------------------------------

// ==================================================
// 6. Set Viewport Size
// Description: Shows how to set custom viewport dimensions.
// Useful for testing responsive designs or capturing screenshots
// at specific resolutions.
// ==================================================
// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();

//   // Set viewport to common desktop size
//   await page.setViewport({
//     width: 1920,
//     height: 1080,
//     deviceScaleFactor: 1
//   });

//   await page.goto("https://example.com");

//   // Change to mobile viewport
//   await page.setViewport({
//     width: 375,
//     height: 667,
//     deviceScaleFactor: 2,
//     isMobile: true
//   });

//   await browser.close();
// })();

// --------------------------------------------------

// ==================================================
// 7. Click and Wait for Navigation
// Description: Demonstrates the proper way to click a link and
// wait for the resulting navigation. Uses Promise.all to avoid
// race conditions between click and navigation.
// ==================================================
// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();

//   await page.goto("https://example.com");

//   // Click and wait for navigation simultaneously
//   await Promise.all([
//     page.waitForNavigation(), // Wait for navigation to complete
//     page.click("a.nav-link") // Click that triggers navigation
//   ]);

//   console.log("Navigation completed!");
//   console.log("New URL:", page.url());

//   await browser.close();
// })();

// --------------------------------------------------

// ==================================================
// 8. Wait for Function
// Description: Shows how to wait for custom conditions using
// JavaScript functions. Useful for waiting for specific page
// states or variable values.
// ==================================================
// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();

//   await page.goto("https://example.com");

//   // Wait for window width to be less than 800px
//   await page.setViewport({ width: 1200, height: 800 });
//
//   // Start watching for condition
//   const watchdog = page.waitForFunction(
//     "window.innerWidth < 800"
//   );

//   // Change viewport to trigger condition
//   await page.setViewport({ width: 600, height: 800 });
//   await watchdog;
//   console.log("Window is now narrower than 800px!");

//   // Wait for custom data attribute
//   await page.waitForFunction(
//     'document.querySelector("body").getAttribute("data-loaded") === "true"'
//   );

//   await browser.close();
// })();

// --------------------------------------------------

// ==================================================
// 9. Get Page URL and Reload
// Description: Basic navigation methods including getting the
// current URL, reloading the page, and going back/forward
// in browser history.
// ==================================================
// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();

//   // Navigate to first page
//   await page.goto("https://example.com");
//   console.log("Current URL:", page.url());

//   // Navigate to another page
//   await page.goto("https://example.com/about");
//   console.log("New URL:", page.url());

//   // Go back in history
//   await page.goBack();
//   console.log("After going back:", page.url());

//   // Go forward in history
//   await page.goForward();
//   console.log("After going forward:", page.url());

//   // Reload the page
//   await page.reload({ waitUntil: "networkidle2" });
//   console.log("Page reloaded!");

//   await browser.close();
// })();

// --------------------------------------------------

// ==================================================
// 10. Count Elements on Page
// Description: Shows how to count multiple elements matching
// a selector. Useful for validating that the expected number
// of items are present on a page.
// ==================================================
// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();

//   await page.goto("https://example.com");

//   // Count all links on the page
//   const linkCount = await page.$$eval("a", links => links.length);
//   console.log(`Found ${linkCount} links on the page`);

//   // Count list items
//   const listItems = await page.$$eval("li", items => items.length);
//   console.log(`Found ${listItems} list items`);

//   // Get all paragraph texts
//   const paragraphs = await page.$$eval("p", elements =>
//     elements.map(el => el.textContent)
//   );
//   console.log("Paragraph texts:", paragraphs);

//   await browser.close();
// })();

// --------------------------------------------------

// ==================================================
// 11. Check if Element Exists
// Description: Safe way to check if an element exists on the
// page without throwing errors. Useful for conditional logic
// based on element presence.
// ==================================================
// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();

//   await page.goto("https://example.com");

//   // Method 1: Using $ (returns null if not found)
//   const element = await page.$("#specific-id");
//   if (element) {
//     console.log("Element exists!");
//     await element.click();
//   } else {
//     console.log("Element not found");
//   }

//   // Method 2: Using evaluate
//   const exists = await page.evaluate(() => {
//     return document.querySelector(".special-class") !== null;
//   });
//   console.log("Element exists:", exists);

//   // Method 3: Using waitForSelector with short timeout
//   try {
//     await page.waitForSelector(".may-exist", { timeout: 1000 });
//     console.log("Element found!");
//   } catch {
//     console.log("Element does not exist");
//   }

//   await browser.close();
// })();

// --------------------------------------------------

// ==================================================
// 12. Get Page Content
// Description: Shows how to get the full HTML content of a page
// or specific elements. Useful for debugging or saving page state.
// ==================================================
// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();

//   await page.goto("https://example.com");

//   // Get full page HTML
//   const html = await page.content();
//   console.log("Page HTML length:", html.length);

//   // Get inner HTML of specific element
//   const bodyHTML = await page.$eval("body", el => el.innerHTML);
//   console.log("Body HTML length:", bodyHTML.length);

//   // Get outer HTML of element
//   const headerHTML = await page.$eval("header", el => el.outerHTML);
//   console.log("Header HTML:", headerHTML);

//   // Get text content only (no HTML tags)
//   const textContent = await page.$eval("body", el => el.textContent);
//   console.log("Page text preview:", textContent.substring(0, 100));

//   await browser.close();
// })();

// --------------------------------------------------

// ==================================================
// 13. Type with Delay
// Description: Demonstrates typing with realistic delays to
// simulate human behavior. Useful for forms that detect
// bot-like instant typing.
// ==================================================
// (async () => {
//   const browser = await puppeteer.launch({
//     headless: false,
//     args: ['--start-maximized'] // Start browser maximized
//   });
//   const page = await browser.newPage();

//   // Get the screen dimensions
//   const screenDimensions = await page.evaluate(() => {
//     return {
//       width: window.screen.width,
//       height: window.screen.height,
//       availWidth: window.screen.availWidth,
//       availHeight: window.screen.availHeight
//     };
//   });

//   // Set viewport to fill the entire available window area
//   // Subtract a bit for browser chrome (address bar, etc.)
//   await page.setViewport({
//     width: screenDimensions.availWidth,
//     height: screenDimensions.availHeight - 120, // Adjust for browser UI
//     deviceScaleFactor: 1
//   });

//   // Using DemoQA's text box page for testing
//   await page.goto("https://demoqa.com/text-box");

//   // Type slowly like a human (100ms between keystrokes)
//   await page.type("#userName", "John Doe", { delay: 100 });

//   // Type email with delay
//   await page.type("#userEmail", "user@example.com", { delay: 100 });

//   // Type in address field even slower
//   await page.type("#currentAddress", "This is a test message typed slowly", {
//     delay: 150,
//   });

//   // Clear field and retype
//   await page.click("#userEmail", { clickCount: 3 }); // Triple-click to select all
//   await page.keyboard.press("Backspace");
//   await page.type("#userEmail", "newemail@example.com", { delay: 80 });

//   // Submit the form
//   await page.click("#submit");

//   // Wait a bit to see the result
//   await new Promise((resolve) => setTimeout(resolve, 2000));

//   await browser.close();
// })();

// --------------------------------------------------

// ==================================================
// 14. Focus on Input Field
// Description: Shows how to focus on form elements and handle
// keyboard events. Essential for forms that require focus
// before accepting input.
// ==================================================
// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();

//   await page.goto("https://example.com/form");

//   // Focus on an input field
//   await page.focus("#search-input");
//   console.log("Input field focused");

//   // Type after focusing
//   await page.keyboard.type("search query");

//   // Tab to next field
//   await page.keyboard.press("Tab");
//   await page.keyboard.type("next field content");

//   // Shift+Tab to go back
//   await page.keyboard.down("Shift");
//   await page.keyboard.press("Tab");
//   await page.keyboard.up("Shift");

//   // Check which element has focus
//   const focusedElement = await page.evaluate(() => {
//     return document.activeElement.tagName;
//   });
//   console.log("Focused element:", focusedElement);

//   await browser.close();
// })();

// --------------------------------------------------

// ==================================================
// 15. Form Interaction and Login Automation
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
// 16. Page Scrolling and Infinite Scroll Handling
// Description: Demonstrates how to scroll through a page and handle
// infinite scroll scenarios. Useful for scraping social media feeds,
// product listings, or any page that loads content on scroll.
// ==================================================
// (async () => {
//   const browser = await puppeteer.launch({ headless: false });
//   const page = await browser.newPage();

//   await page.goto("https://example.com");

//   // Scroll to bottom of page
//   await page.evaluate(() => {
//     window.scrollTo(0, document.body.scrollHeight);
//   });

//   // Auto-scroll function for infinite scroll pages
//   async function autoScroll(page) {
//     await page.evaluate(async () => {
//       await new Promise((resolve) => {
//         let totalHeight = 0;
//         const distance = 100;
//         const timer = setInterval(() => {
//           const scrollHeight = document.body.scrollHeight;
//           window.scrollBy(0, distance);
//           totalHeight += distance;

//           if (totalHeight >= scrollHeight) {
//             clearInterval(timer);
//             resolve();
//           }
//         }, 100);
//       });
//     });
//   }

//   // Execute auto-scroll
//   await autoScroll(page);

//   // Wait a bit for any lazy-loaded content
//   await new Promise((resolve) => setTimeout(resolve, 2000));

//   await browser.close();
//   console.log("Page scrolling completed!");
// })();

// --------------------------------------------------

// ==================================================
// 17. Generate PDF from Webpage
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
// 18. Keyboard and Mouse Actions
// Description: Demonstrates advanced keyboard and mouse interactions.
// Shows typing with delays, keyboard shortcuts, mouse movements,
// drag and drop, and complex user interaction simulation.
// ==================================================
// (async () => {
//   const browser = await puppeteer.launch({ headless: false });
//   const page = await browser.newPage();

//   await page.goto("https://example.com/form");

//   // Type with realistic delays
//   await page.type("#search", "puppeteer automation", { delay: 100 });

//   // Keyboard shortcuts
//   await page.keyboard.down("Control");
//   await page.keyboard.press("A"); // Select all
//   await page.keyboard.up("Control");

//   await page.keyboard.press("Backspace"); // Clear selection

//   // Special keys
//   await page.keyboard.press("Tab"); // Move to next field
//   await page.keyboard.press("Enter"); // Submit form

//   // Mouse movements
//   await page.mouse.move(100, 200); // Move to coordinates
//   await page.mouse.click(300, 400); // Click at position

//   // Double click
//   await page.mouse.click(300, 400, { clickCount: 2 });

//   // Right click
//   await page.mouse.click(300, 400, { button: "right" });

//   // Drag and drop
//   await page.mouse.move(100, 100);
//   await page.mouse.down();
//   await page.mouse.move(300, 300);
//   await page.mouse.up();

//   // Hover over element
//   await page.hover("#menu-item");

//   await browser.close();
// })();

// --------------------------------------------------

// ==================================================
// 19. Multiple Browser Tabs/Pages Management
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
// 20. Mobile Device Emulation
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
// 21. Cookie Management
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
// 22. Browser Context Isolation
// Description: Shows how to create isolated browser contexts that don't
// share cookies, cache, or other data. Essential for running parallel
// tests or simulating multiple users with different sessions.
// ==================================================
// (async () => {
//   const browser = await puppeteer.launch();
//
//   // Create two isolated browser contexts
//   const context1 = await browser.createBrowserContext();
//   const context2 = await browser.createBrowserContext();
//
//   // Create pages in different contexts
//   const page1 = await context1.newPage();
//   const page2 = await context2.newPage();
//
//   // Set different cookies in each context
//   await page1.goto("https://example.com");
//   await context1.setCookie({
//     name: "user_session",
//     value: "user1_token",
//     domain: "example.com"
//   });
//
//   await page2.goto("https://example.com");
//   await context2.setCookie({
//     name: "user_session",
//     value: "user2_token",
//     domain: "example.com"
//   });
//
//   // Verify isolation - each context has different cookies
//   const cookies1 = await context1.cookies();
//   const cookies2 = await context2.cookies();
//   console.log("Context 1 cookies:", cookies1);
//   console.log("Context 2 cookies:", cookies2);
//
//   // List all browser contexts
//   const contexts = browser.browserContexts();
//   console.log("Total contexts:", contexts.length);
//
//   // Close contexts when done
//   await context1.close();
//   await context2.close();
//   await browser.close();
// })();

// --------------------------------------------------

// ==================================================
// 23. Download File Handling
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
// 24. Error Handling and Retry Logic
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
// 25. Network Request Interception
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
// 26. Performance Monitoring
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
// 27. Permission Management
// Description: Shows how to manage browser permissions like geolocation,
// notifications, camera, microphone, and clipboard access. Essential for
// testing features that require user permissions without manual intervention.
// ==================================================
// (async () => {
//   const browser = await puppeteer.launch({ headless: false });
//   const context = browser.defaultBrowserContext();
//
//   // Override multiple permissions for a specific origin
//   await context.overridePermissions("https://example.com", [
//     "geolocation",
//     "notifications",
//     "camera",
//     "microphone",
//     "clipboard-read",
//     "clipboard-write"
//   ]);
//
//   const page = await browser.newPage();
//   await page.goto("https://example.com");
//
//   // Test geolocation with custom coordinates
//   await page.setGeolocation({ latitude: 37.7749, longitude: -122.4194 }); // San Francisco
//
//   // Example: Get current position using browser API
//   const position = await page.evaluate(() => {
//     return new Promise((resolve) => {
//       navigator.geolocation.getCurrentPosition((pos) => {
//         resolve({
//           latitude: pos.coords.latitude,
//           longitude: pos.coords.longitude
//         });
//       });
//     });
//   });
//   console.log("Current position:", position);
//
//   // Clear all permission overrides
//   await context.clearPermissionOverrides();
//
//   await browser.close();
// })();

// --------------------------------------------------

// ==================================================
// 28. Accessibility Testing
// Description: Demonstrates how to use Puppeteer's accessibility API
// to inspect the accessibility tree, find focused elements, and ensure
// your web application is accessible to users with assistive technologies.
// ==================================================
// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//
//   await page.goto("https://example.com");
//
//   // Capture the entire accessibility tree
//   const snapshot = await page.accessibility.snapshot();
//   console.log("Accessibility tree:", JSON.stringify(snapshot, null, 2));
//
//   // Find and log the currently focused element
//   function findFocusedNode(node) {
//     if (node.focused) return node;
//     for (const child of node.children || []) {
//       const foundNode = findFocusedNode(child);
//       if (foundNode) return foundNode;
//     }
//     return null;
//   }
//
//   const focusedNode = findFocusedNode(snapshot);
//   console.log("Focused element:", focusedNode?.name);
//
//   // Get only interesting nodes (filters out irrelevant nodes)
//   const interestingSnapshot = await page.accessibility.snapshot({
//     interestingOnly: true
//   });
//
//   // Check specific element's accessibility
//   const buttonSnapshot = await page.accessibility.snapshot({
//     root: await page.$("button")
//   });
//   console.log("Button accessibility:", buttonSnapshot);
//
//   await browser.close();
// })();

// --------------------------------------------------

// ==================================================
// 29. CDP Session and Advanced Browser Control
// Description: Demonstrates how to create Chrome DevTools Protocol (CDP)
// sessions for advanced browser control. Shows how to access low-level
// browser features, network conditions, and debugging capabilities.
// ==================================================
// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//
//   // Create a CDP session for the page
//   const client = await page.target().createCDPSession();
//
//   // Enable network domain for advanced network control
//   await client.send("Network.enable");
//
//   // Simulate slow 3G network conditions
//   await client.send("Network.emulateNetworkConditions", {
//     offline: false,
//     downloadThroughput: (750 * 1024) / 8, // 750kb/s
//     uploadThroughput: (250 * 1024) / 8,   // 250kb/s
//     latency: 100 // 100ms latency
//   });
//
//   // Enable runtime domain for console API
//   await client.send("Runtime.enable");
//
//   // Listen to console API calls
//   client.on("Runtime.consoleAPICalled", (event) => {
//     console.log(`Console ${event.type}:`, event.args);
//   });
//
//   // Navigate and observe network performance
//   await page.goto("https://example.com");
//
//   // Get performance metrics via CDP
//   const performanceMetrics = await client.send("Performance.getMetrics");
//   console.log("Performance metrics:", performanceMetrics.metrics);
//
//   // Take a heap snapshot
//   await client.send("HeapProfiler.enable");
//   const heapSnapshot = await client.send("HeapProfiler.takeHeapSnapshot");
//   console.log("Heap snapshot taken");
//
//   // Disable network throttling
//   await client.send("Network.emulateNetworkConditions", {
//     offline: false,
//     downloadThroughput: -1,
//     uploadThroughput: -1,
//     latency: 0
//   });
//
//   await browser.close();
// })();

// --------------------------------------------------

// ==================================================
// 30. WebSocket and Real-time Communication Testing
// Description: Shows how to test WebSocket connections and real-time
// features. Includes intercepting WebSocket frames, simulating messages,
// and testing connection stability.
// ==================================================
// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//
//   // Track WebSocket connections
//   const webSocketFrames = [];
//
//   const client = await page.target().createCDPSession();
//   await client.send("Network.enable");
//
//   // Listen for WebSocket creation
//   client.on("Network.webSocketCreated", ({ requestId, url }) => {
//     console.log("WebSocket created:", url);
//   });
//
//   // Listen for WebSocket frames
//   client.on("Network.webSocketFrameReceived", ({ requestId, response }) => {
//     console.log("WebSocket received:", response.payloadData);
//     webSocketFrames.push({
//       type: "received",
//       data: response.payloadData,
//       timestamp: Date.now()
//     });
//   });
//
//   client.on("Network.webSocketFrameSent", ({ requestId, response }) => {
//     console.log("WebSocket sent:", response.payloadData);
//     webSocketFrames.push({
//       type: "sent",
//       data: response.payloadData,
//       timestamp: Date.now()
//     });
//   });
//
//   // Navigate to page with WebSocket
//   await page.goto("https://example.com/websocket-demo");
//
//   // Execute WebSocket operations in page context
//   await page.evaluate(() => {
//     const ws = new WebSocket("wss://example.com/socket");
//
//     ws.onopen = () => {
//       console.log("WebSocket connected");
//       ws.send(JSON.stringify({ type: "ping" }));
//     };
//
//     ws.onmessage = (event) => {
//       console.log("Received:", event.data);
//     };
//
//     window.ws = ws; // Expose for testing
//   });
//
//   // Wait for WebSocket activity
//   await page.waitForTimeout(5000);
//
//   // Analyze WebSocket communication
//   console.log("Total WebSocket frames:", webSocketFrames.length);
//   console.log("Frames log:", webSocketFrames);
//
//   await browser.close();
// })();
