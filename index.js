import puppeteer from "puppeteer";

// ==================================================
// PUPPETEER SANDBOX - TABLE OF CONTENTS
// (Organized by complexity: Beginner → Advanced)
// ==================================================
// BEGINNER LEVEL:
// 1. Basic Browser Launch - Foundation for all Puppeteer operations
// 2. Navigate to a Website and Get Title - Basic web scraping
// 3. Get Page URL and Reload - Basic navigation methods
// 4. Reload/Refresh Page - Force page refresh with cache options
// 5. Set Viewport Size - Control browser window dimensions
// 6. Capture Website Screenshot - Visual testing and monitoring
// 7. Get Page Content - Extract full HTML
// 8. Check if Element Exists - Safe element checking
// 9. Get Text Content Only - Extract visible text without HTML
// 10. Count Elements on Page - Query multiple elements
// 11. Extract Data from Page Elements - Web scraping with selectors
// 12. Get Element Attributes - Extract href, src, data attributes
// 13. Get All Links from Page - Extract all href attributes
// 14. Check Element Visibility - Determine if element is visible/hidden
// 15. Check Element Enabled/Disabled State - Verify if buttons/inputs are interactive
// 16. Focus on Input Field - Direct element focus
// 17. Clear Input Fields - Reset form elements
// 18. Type with Delay - Simulate human typing
// 19. Click and Wait for Navigation - Handle page transitions
// 20. Press Keyboard Keys - Enter, Tab, Escape key presses
// 21. Scroll to Element - Bring elements into view
// 22. Mouse Hover - Hover over elements
// 23. Navigate Browser History - Go back/forward between pages
// 24. Wait for Element to Appear - Using waitForSelector
// 25. Wait for Text to Appear - Wait for specific text content
// 26. Work with Checkboxes and Radio Buttons - Form element states
// 27. Select Dropdown Option - Choose from select elements
// 28. Check If Checkbox/Radio Is Checked - Get current state of form elements
// 29. Get Selected Dropdown Value - Read current selection from dropdowns
// 30. Double Click and Right Click - Advanced mouse interactions
// 31. Upload Files - Handle file input elements
// 32. Wait for Element to Disappear - Wait for loading spinners to vanish
// 33. Take Element Screenshot - Capture specific elements
// 34. Full Page Screenshot - Capture entire scrollable page
// 35. Handle JavaScript Dialogs - Manage alerts, confirms, prompts
// 36. Extract Table Data - Scrape HTML tables
// 37. Basic iframe Handling - Access content inside iframes
// 38. Get Page Dimensions and Scroll Position - Window size and scroll info
// 39. Get Element Position and Size - BoundingBox for layout testing
// 40. Basic Performance Timing - Simple page load time measurement
// 41. Cookie Management - Get, set, delete cookies
// 42. Get All Page Cookies - Retrieve all cookies at once
// 43. Local Storage Access - Read/write browser storage
// 44. Session Storage Access - Manage session storage
// 45. Get Console Messages - Capture browser console logs
// 46. Wait for Function - Wait for custom conditions
// 47. Execute Async JavaScript - Run async code in page context
// 48. Monitor Network Requests - Basic request logging
// 49. Wait for Network Idle - Wait for all requests to finish
// 50. Generate PDF from Page - Save page as PDF
// 51. Emulate Dark Mode - Media feature emulation
// 52. Emulate Mobile Device - Device emulation for testing
// 53. Set User Agent - Change browser identification
// 54. Emulate Network Speed - Slow/Fast connection simulation
// 55. Set Geolocation - Mock GPS location
// 56. Set Timezone - Change browser timezone
// 57. Set Language/Locale - Browser language settings
// 58. Set Extra HTTP Headers - Custom request headers
// 59. Block Images/CSS/Fonts - Resource blocking
// 60. Handle Basic Authentication - Auth dialog handling
//
// EASY LEVEL:
// 61. Form Interaction and Login Automation - Form filling and submission
// 62. Page Scrolling and Infinite Scroll Handling - Dynamic content loading
// 63. Generate PDF from Webpage - Creating reports and archiving
// 64. Keyboard and Mouse Actions - Basic input simulation
// 65. Search and Navigation with Locators - Using aria locators and text selectors
//
// INTERMEDIATE LEVEL:
// 66. Multiple Browser Tabs/Pages Management - Parallel processing
// 67. Mobile Device Emulation - Responsive testing
// 68. Cookie Management - Session handling and authentication
// 69. Browser Context Isolation - Parallel testing with isolated sessions
//
// ADVANCED LEVEL:
// 70. Download File Handling - Automated file downloads
// 71. Error Handling and Retry Logic - Robust automation
// 72. Network Request Interception - Mocking and traffic analysis
// 73. Parallel Execution and Worker Management - Run multiple browsers concurrently
//
// EXPERT LEVEL:
// 74. Permission Management - Handle browser permissions programmatically
// 75. Accessibility Testing - Inspect accessibility tree and compliance
// 76. CDP Session and Advanced Browser Control - Low-level browser features
// 77. WebSocket and Real-time Communication Testing - Test real-time features
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
// 6. Capture Website Screenshot
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
// 11. Extract Data from Page Elements
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
// 24. Wait for Element to Appear
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
// 5. Set Viewport Size
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
// 19. Click and Wait for Navigation
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
// 46. Wait for Function
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
// 3. Get Page URL and Reload
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
// 8. Check if Element Exists
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
// 7. Get Page Content
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
// 18. Type with Delay
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
// 16. Focus on Input Field
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
// 13. Get All Links from Page
// Description: Demonstrates how to extract all links (href attributes)
// from a webpage. Useful for site mapping, broken link checking,
// or content discovery. Shows both internal and external links.
// ==================================================
// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//
//   await page.goto("https://example.com");
//
//   // Extract all links from the page
//   const links = await page.evaluate(() => {
//     // Get all anchor elements
//     const anchors = document.querySelectorAll('a');
//
//     // Extract href from each anchor
//     return Array.from(anchors).map(anchor => ({
//       href: anchor.href,
//       text: anchor.textContent.trim(),
//       // Check if link is external
//       isExternal: anchor.hostname !== window.location.hostname
//     }));
//   });
//
//   console.log(`Found ${links.length} links:`);
//
//   // Separate internal and external links
//   const internalLinks = links.filter(link => !link.isExternal);
//   const externalLinks = links.filter(link => link.isExternal);
//
//   console.log(`Internal links: ${internalLinks.length}`);
//   console.log(`External links: ${externalLinks.length}`);
//
//   // Display first 5 links
//   links.slice(0, 5).forEach(link => {
//     console.log(`- ${link.text}: ${link.href}`);
//   });
//
//   await browser.close();
// })();

// --------------------------------------------------

// ==================================================
// 35. Handle JavaScript Dialogs
// Description: Shows how to handle JavaScript alerts, confirms,
// and prompts. Essential for automating sites that use these
// dialogs for user interaction or validation.
// ==================================================
// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//
//   // Set up dialog handler before navigation
//   page.on('dialog', async dialog => {
//     console.log(`Dialog type: ${dialog.type()}`);
//     console.log(`Dialog message: ${dialog.message()}`);
//
//     // Handle different dialog types
//     if (dialog.type() === 'alert') {
//       await dialog.accept();
//     } else if (dialog.type() === 'confirm') {
//       // Accept or dismiss based on your logic
//       await dialog.accept(); // or dialog.dismiss()
//     } else if (dialog.type() === 'prompt') {
//       // Provide input for prompt
//       await dialog.accept('My prompt response');
//     }
//   });
//
//   await page.goto('data:text/html,<button onclick="alert(\'Hello!\')">Alert</button>');
//
//   // Trigger the alert
//   await page.click('button');
//
//   // Example with confirm dialog
//   await page.evaluate(() => {
//     const result = confirm('Do you want to proceed?');
//     console.log('Confirm result:', result);
//   });
//
//   // Example with prompt dialog
//   await page.evaluate(() => {
//     const name = prompt('What is your name?');
//     console.log('Prompt result:', name);
//   });
//
//   await browser.close();
// })();

// --------------------------------------------------

// ==================================================
// 36. Extract Table Data
// Description: Demonstrates how to extract structured data from
// HTML tables. Common use case for scraping tabular data like
// prices, schedules, or any structured information.
// ==================================================
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Navigate to a page with a table
  await page.goto(
    "https://en.wikipedia.org/wiki/List_of_Totally_Spies!_episodes"
  );

  // Extract table data
  const tableData = await page.evaluate(() => {
    // Find the first table on the page
    const table = document.querySelector("#mw-content-text > div.mw-content-ltr.mw-parser-output > table:nth-child(12)");
    if (!table) return null;

    const rows = Array.from(table.querySelectorAll("tr"));

    // Extract headers
    const headers = Array.from(rows[0].querySelectorAll("th")).map((th) =>
      th.textContent.trim()
    );

    // Extract data rows
    const data = rows.slice(1).map((row) => {
      const cells = Array.from(row.querySelectorAll("td"));
      return cells.map((cell) => cell.textContent.trim());
    });

    return { headers, data };
  });

  if (tableData) {
    console.log("Table Headers:", tableData.headers);
    console.log(`Found ${tableData.data.length} rows`);

    // Display all rows
    console.log("\nFirst 5 rows:");
    tableData.data.forEach((row, index) => {
      console.log(`Row ${index + 1}:`, row.slice(0, 3).join(" | "));
    });
  }

  await browser.close();
})();

// --------------------------------------------------

// ==================================================
// 37. Basic iframe Handling
// Description: Shows how to access and interact with content
// inside iframes. Many websites use iframes for embedded content,
// ads, or third-party widgets.
// ==================================================
// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//
//   // Create a test page with an iframe
//   await page.goto('data:text/html,<h1>Main Page</h1><iframe src="data:text/html,<h2>Inside iframe</h2><button id=\'iframe-btn\'>Click me</button>" width="300" height="200"></iframe>');
//
//   // Get all frames on the page
//   const frames = page.frames();
//   console.log(`Found ${frames.length} frames`);
//
//   // Access the iframe (frames[0] is the main frame)
//   const iframe = frames[1];
//
//   if (iframe) {
//     // Extract text from iframe
//     const iframeText = await iframe.$eval('h2', el => el.textContent);
//     console.log('Text in iframe:', iframeText);
//
//     // Click button inside iframe
//     await iframe.click('#iframe-btn');
//     console.log('Clicked button in iframe');
//
//     // Execute JavaScript in iframe context
//     const result = await iframe.evaluate(() => {
//       return document.body.innerHTML;
//     });
//     console.log('iframe HTML:', result);
//   }
//
//   // Alternative: Find iframe by selector and get its frame
//   const frameElement = await page.$('iframe');
//   const frame = await frameElement.contentFrame();
//   console.log('Frame URL:', frame.url());
//
//   await browser.close();
// })();

// --------------------------------------------------

// ==================================================
// 12. Get Element Attributes
// Description: Demonstrates how to extract various attributes
// from elements like href, src, data attributes, etc. Essential
// for scraping links, images, and custom data attributes.
// ==================================================
// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//
//   await page.goto('https://example.com');
//
//   // Get single element attribute
//   const linkHref = await page.$eval('a', el => el.getAttribute('href'));
//   console.log('First link href:', linkHref);
//
//   // Get multiple attributes from an element
//   const elementInfo = await page.$eval('a', el => ({
//     href: el.getAttribute('href'),
//     text: el.textContent,
//     className: el.className,
//     id: el.id,
//     // Get all data attributes
//     dataAttributes: Object.entries(el.dataset)
//   }));
//   console.log('Element info:', elementInfo);
//
//   // Get attributes from multiple elements
//   const allImages = await page.$$eval('img', images =>
//     images.map(img => ({
//       src: img.src,
//       alt: img.alt,
//       width: img.width,
//       height: img.height,
//       naturalWidth: img.naturalWidth,
//       naturalHeight: img.naturalHeight
//     }))
//   );
//   console.log(`Found ${allImages.length} images`);
//
//   // Get custom data attributes
//   await page.goto('data:text/html,<div data-user-id="123" data-role="admin" data-active="true">User</div>');
//   const dataAttrs = await page.$eval('div', el => el.dataset);
//   console.log('Data attributes:', dataAttrs);
//
//   await browser.close();
// })();

// --------------------------------------------------

// ==================================================
// 26. Work with Checkboxes and Radio Buttons
// Description: Shows how to interact with checkbox and radio button
// form elements. Check/uncheck states, verify current selection,
// and handle multiple options.
// ==================================================
// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//
//   // Navigate to a form with checkboxes and radio buttons
//   await page.goto('data:text/html,<form><input type="checkbox" id="terms"> Accept Terms<br><input type="checkbox" id="newsletter" checked> Newsletter<br><input type="radio" name="plan" value="basic" id="basic"> Basic<br><input type="radio" name="plan" value="pro" id="pro" checked> Pro</form>');
//
//   // Check if checkbox is checked
//   const termsChecked = await page.$eval('#terms', el => el.checked);
//   console.log('Terms checked:', termsChecked); // false
//
//   // Check the checkbox
//   await page.click('#terms');
//
//   // Verify it's now checked
//   const termsNowChecked = await page.$eval('#terms', el => el.checked);
//   console.log('Terms now checked:', termsNowChecked); // true
//
//   // Uncheck the newsletter checkbox
//   await page.click('#newsletter');
//
//   // Select a radio button
//   await page.click('#basic');
//
//   // Get selected radio button value
//   const selectedPlan = await page.evaluate(() => {
//     const selected = document.querySelector('input[name="plan"]:checked');
//     return selected ? selected.value : null;
//   });
//   console.log('Selected plan:', selectedPlan); // basic
//
//   // Get all checkbox states
//   const checkboxStates = await page.evaluate(() => {
//     const checkboxes = document.querySelectorAll('input[type="checkbox"]');
//     return Array.from(checkboxes).map(cb => ({
//       id: cb.id,
//       checked: cb.checked
//     }));
//   });
//   console.log('Checkbox states:', checkboxStates);
//
//   await browser.close();
// })();

// --------------------------------------------------

// ==================================================
// 27. Select Dropdown Option
// Description: Demonstrates how to select options from dropdown
// (select) elements. Shows single selection, getting current value,
// and handling multiple selection dropdowns.
// ==================================================
// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//
//   // Create test page with dropdown
//   await page.goto('data:text/html,<select id="country"><option value="">Choose...</option><option value="us">United States</option><option value="uk">United Kingdom</option><option value="ca">Canada</option></select><br><select id="colors" multiple><option value="red">Red</option><option value="blue">Blue</option><option value="green">Green</option></select>');
//
//   // Select by value
//   await page.select('#country', 'uk');
//
//   // Get selected value
//   const selectedCountry = await page.$eval('#country', el => el.value);
//   console.log('Selected country:', selectedCountry); // uk
//
//   // Get selected text
//   const selectedText = await page.$eval('#country', el => {
//     return el.options[el.selectedIndex].text;
//   });
//   console.log('Selected text:', selectedText); // United Kingdom
//
//   // Select multiple options
//   await page.select('#colors', 'red', 'blue');
//
//   // Get all selected values from multi-select
//   const selectedColors = await page.$$eval('#colors option:checked',
//     options => options.map(option => option.value)
//   );
//   console.log('Selected colors:', selectedColors); // ['red', 'blue']
//
//   // Get all available options
//   const allCountries = await page.$$eval('#country option',
//     options => options.map(opt => ({
//       value: opt.value,
//       text: opt.text,
//       selected: opt.selected
//     }))
//   );
//   console.log('All country options:', allCountries);
//
//   await browser.close();
// })();

// --------------------------------------------------

// ==================================================
// 9. Get Text Content Only
// Description: Shows how to extract visible text content without HTML
// tags. Demonstrates the difference between textContent, innerText,
// and innerHTML for clean text extraction.
// ==================================================
// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//
//   // Navigate to a page with various HTML elements
//   await page.goto('data:text/html,<div id="content"><h1>Main Title</h1><p>This is <strong>bold</strong> and <em>italic</em> text.</p><div style="display:none">Hidden text</div><script>console.log("Script content")</script></div>');
//
//   // Get textContent (includes hidden elements and scripts)
//   const textContent = await page.$eval('#content', el => el.textContent);
//   console.log('textContent:', textContent);
//
//   // Get innerText (visible text only, respects styling)
//   const innerText = await page.$eval('#content', el => el.innerText);
//   console.log('innerText:', innerText);
//
//   // Get innerHTML (full HTML)
//   const innerHTML = await page.$eval('#content', el => el.innerHTML);
//   console.log('innerHTML:', innerHTML);
//
//   // Get all visible text from page
//   const allText = await page.evaluate(() => {
//     return document.body.innerText;
//   });
//   console.log('All visible text:', allText);
//
//   // Get text with whitespace normalized
//   const cleanText = await page.$eval('#content', el => {
//     return el.innerText.replace(/\s+/g, ' ').trim();
//   });
//   console.log('Clean text:', cleanText);
//
//   // Extract text from specific elements only
//   const paragraphTexts = await page.$$eval('p', paragraphs =>
//     paragraphs.map(p => p.innerText)
//   );
//   console.log('Paragraph texts:', paragraphTexts);
//
//   await browser.close();
// })();

// --------------------------------------------------

// ==================================================
// 17. Clear Input Fields
// Description: Demonstrates various ways to clear input fields including
// text inputs, textareas, and contenteditable elements. Shows the
// difference between clear() method and other clearing techniques.
// ==================================================
// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//
//   // Create a test page with various input types
//   await page.goto('data:text/html,<form><input type="text" id="username" value="existing text"><textarea id="message">Some long text here</textarea><div id="editable" contenteditable="true">Editable content</div></form>');
//
//   // Method 1: Triple click and type (replaces all content)
//   const usernameInput = await page.$('#username');
//   await usernameInput.click({ clickCount: 3 });
//   await page.type('#username', 'new username');
//
//   // Method 2: Clear using keyboard shortcuts (Ctrl+A, Delete)
//   await page.focus('#message');
//   await page.keyboard.down('Control');
//   await page.keyboard.press('a');
//   await page.keyboard.up('Control');
//   await page.keyboard.press('Backspace');
//   await page.type('#message', 'new message');
//
//   // Method 3: Clear by setting value to empty string
//   await page.evaluate(() => {
//     document.querySelector('#username').value = '';
//   });
//   await page.type('#username', 'cleared and typed');
//
//   // Method 4: Clear using fill() method (Puppeteer 8.0+)
//   await page.fill('#username', ''); // Clear
//   await page.fill('#username', 'filled with new text'); // Fill with new text
//
//   // Clear contenteditable element
//   await page.evaluate(() => {
//     document.querySelector('#editable').innerHTML = '';
//   });
//   await page.type('#editable', 'New editable content');
//
//   // Get final values
//   const finalValues = await page.evaluate(() => ({
//     username: document.querySelector('#username').value,
//     message: document.querySelector('#message').value,
//     editable: document.querySelector('#editable').innerText
//   }));
//   console.log('Final values:', finalValues);
//
//   await browser.close();
// })();

// --------------------------------------------------

// ==================================================
// 33. Take Element Screenshot
// Description: Shows how to capture screenshots of specific elements
// rather than the entire page. Useful for visual testing, creating
// thumbnails, or documenting specific UI components.
// ==================================================
// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//
//   // Navigate to a page with different elements
//   await page.goto('https://example.com');
//
//   // Take screenshot of specific element
//   const h1Element = await page.$('h1');
//   if (h1Element) {
//     await h1Element.screenshot({ path: 'heading.png' });
//     console.log('Heading screenshot saved');
//   }
//
//   // Take screenshot with padding
//   const contentDiv = await page.$('div');
//   if (contentDiv) {
//     await contentDiv.screenshot({
//       path: 'content-with-padding.png',
//       padding: { top: 10, right: 10, bottom: 10, left: 10 }
//     });
//   }
//
//   // Take screenshot of multiple elements
//   const paragraphs = await page.$$('p');
//   for (let i = 0; i < paragraphs.length; i++) {
//     await paragraphs[i].screenshot({ path: `paragraph-${i}.png` });
//   }
//
//   // Take screenshot in different formats
//   if (h1Element) {
//     // JPEG with quality setting
//     await h1Element.screenshot({
//       path: 'heading.jpg',
//       type: 'jpeg',
//       quality: 80
//     });
//
//     // WebP format
//     await h1Element.screenshot({
//       path: 'heading.webp',
//       type: 'webp'
//     });
//   }
//
//   // Get screenshot as buffer instead of saving to file
//   const screenshotBuffer = await h1Element.screenshot({ encoding: 'base64' });
//   console.log('Screenshot base64 length:', screenshotBuffer.length);
//
//   await browser.close();
// })();

// --------------------------------------------------

// ==================================================
// 25. Wait for Text to Appear
// Description: Demonstrates various ways to wait for specific text
// content to appear on the page. Useful for dynamic content, AJAX
// responses, and ensuring content is loaded before interacting.
// ==================================================
// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//
//   // Create a page that loads content dynamically
//   await page.goto('data:text/html,<div id="status">Loading...</div><script>setTimeout(() => { document.getElementById("status").textContent = "Content loaded!"; }, 2000);</script>');
//
//   // Method 1: Wait for specific text using waitForFunction
//   await page.waitForFunction(
//     text => document.body.innerText.includes(text),
//     {},
//     'Content loaded!'
//   );
//   console.log('Text appeared!');
//
//   // Method 2: Wait for element with specific text
//   await page.goto('data:text/html,<div id="container"></div><script>setTimeout(() => { document.getElementById("container").innerHTML = "<span>Success message</span>"; }, 1000);</script>');
//
//   await page.waitForSelector('span::-p-text(Success message)');
//   console.log('Success message appeared!');
//
//   // Method 3: Wait for text with XPath
//   await page.goto('data:text/html,<div id="result"></div><script>setTimeout(() => { document.getElementById("result").textContent = "Operation completed"; }, 1500);</script>');
//
//   await page.waitForXPath('//*[contains(text(), "Operation completed")]');
//   console.log('Operation completed text found!');
//
//   // Method 4: Wait for text with custom timeout and polling
//   await page.goto('data:text/html,<div id="slow"></div><script>setTimeout(() => { document.getElementById("slow").textContent = "Finally loaded"; }, 3000);</script>');
//
//   await page.waitForFunction(
//     () => document.querySelector('#slow')?.textContent === 'Finally loaded',
//     { polling: 100, timeout: 5000 }
//   );
//   console.log('Slow content loaded!');
//
//   // Method 5: Wait for text to disappear
//   await page.goto('data:text/html,<div id="loader">Please wait...</div><script>setTimeout(() => { document.getElementById("loader").remove(); }, 2000);</script>');
//
//   await page.waitForFunction(
//     () => !document.body.textContent.includes('Please wait...'),
//     { timeout: 5000 }
//   );
//   console.log('Loading text disappeared!');
//
//   await browser.close();
// })();

// --------------------------------------------------

// ==================================================
// 30. Double Click and Right Click
// Description: Shows how to perform advanced mouse interactions like
// double-clicking and right-clicking (context menu). Includes handling
// browser context menus and detecting double-click events.
// ==================================================
// (async () => {
//   const browser = await puppeteer.launch({ headless: false });
//   const page = await browser.newPage();
//
//   // Create a test page with click handlers
//   await page.goto('data:text/html,<div id="target" style="width:200px;height:200px;background:#ccc;text-align:center;line-height:200px;">Click me!</div><div id="log"></div><script>const target = document.getElementById("target"); const log = document.getElementById("log"); target.addEventListener("dblclick", () => { log.innerHTML += "Double clicked!<br>"; }); target.addEventListener("contextmenu", (e) => { e.preventDefault(); log.innerHTML += "Right clicked!<br>"; });</script>');
//
//   // Double click
//   const element = await page.$('#target');
//   await element.click({ clickCount: 2 });
//   console.log('Double clicked the element');
//
//   // Wait a bit to see the result
//   await page.waitForTimeout(1000);
//
//   // Right click (context menu)
//   await element.click({ button: 'right' });
//   console.log('Right clicked the element');
//
//   // Middle click
//   await element.click({ button: 'middle' });
//   console.log('Middle clicked the element');
//
//   // Double click at specific coordinates
//   const box = await element.boundingBox();
//   await page.mouse.click(box.x + box.width / 2, box.y + box.height / 2, { clickCount: 2 });
//
//   // Right click at specific coordinates
//   await page.mouse.click(box.x + box.width / 2, box.y + box.height / 2, { button: 'right' });
//
//   // Get the log to verify events were triggered
//   const logContent = await page.$eval('#log', el => el.innerHTML);
//   console.log('Event log:', logContent);
//
//   // Handle actual context menu if it appears
//   page.on('dialog', async dialog => {
//     console.log('Dialog appeared:', dialog.message());
//     await dialog.dismiss();
//   });
//
//   await browser.close();
// })();

// --------------------------------------------------

// ==================================================
// 21. Scroll to Element
// Description: Demonstrates different ways to scroll elements into view.
// Essential for interacting with elements that are outside the viewport
// or handling lazy-loaded content that appears on scroll.
// ==================================================
// (async () => {
//   const browser = await puppeteer.launch({ headless: false });
//   const page = await browser.newPage();
//   await page.setViewport({ width: 800, height: 600 });
//
//   // Create a page with scrollable content
//   await page.goto('data:text/html,<style>body { margin: 0; } .section { height: 800px; padding: 20px; } #section1 { background: #f0f0f0; } #section2 { background: #e0e0e0; } #section3 { background: #d0d0d0; } #target { background: yellow; padding: 20px; }</style><div id="section1" class="section">Section 1 - Scroll down to see more</div><div id="section2" class="section">Section 2</div><div id="section3" class="section">Section 3<div id="target">Target Element - I should be visible!</div></div>');
//
//   // Method 1: Scroll element into view using scrollIntoView
//   await page.evaluate(() => {
//     document.querySelector('#target').scrollIntoView();
//   });
//   console.log('Scrolled to target using scrollIntoView');
//   await page.waitForTimeout(1000);
//
//   // Method 2: Smooth scroll to element
//   await page.evaluate(() => {
//     window.scrollTo(0, 0); // Reset scroll position
//   });
//   await page.waitForTimeout(500);
//
//   await page.evaluate(() => {
//     document.querySelector('#target').scrollIntoView({
//       behavior: 'smooth',
//       block: 'center'
//     });
//   });
//   console.log('Smooth scrolled to target');
//   await page.waitForTimeout(1500);
//
//   // Method 3: Scroll to element and click (Puppeteer auto-scrolls)
//   await page.evaluate(() => window.scrollTo(0, 0)); // Reset
//   const targetElement = await page.$('#target');
//   await targetElement.click(); // Puppeteer will scroll to element automatically
//   console.log('Clicked element (auto-scrolled)');
//
//   // Method 4: Scroll by specific amount
//   await page.evaluate(() => {
//     window.scrollBy(0, 500);
//   });
//   console.log('Scrolled by 500 pixels');
//
//   // Method 5: Scroll to bottom of page
//   await page.evaluate(() => {
//     window.scrollTo(0, document.body.scrollHeight);
//   });
//   console.log('Scrolled to bottom');
//
//   // Method 6: Check if element is in viewport after scrolling
//   const isInViewport = await page.evaluate(() => {
//     const element = document.querySelector('#target');
//     const rect = element.getBoundingClientRect();
//     return rect.top >= 0 && rect.bottom <= window.innerHeight;
//   });
//   console.log('Target in viewport:', isInViewport);
//
//   await browser.close();
// })();

// --------------------------------------------------

// ==================================================
// 23. Navigate Browser History
// Description: Shows how to navigate back and forward through browser
// history. Useful for testing multi-page workflows and handling
// navigation flows that require going back to previous pages.
// ==================================================
// (async () => {
//   const browser = await puppeteer.launch({ headless: false });
//   const page = await browser.newPage();
//
//   // Navigate to first page
//   await page.goto('https://example.com');
//   console.log('Page 1:', await page.title());
//
//   // Navigate to second page
//   await page.goto('https://example.org');
//   console.log('Page 2:', await page.title());
//
//   // Navigate to third page
//   await page.goto('https://example.net');
//   console.log('Page 3:', await page.title());
//
//   // Go back one page
//   await page.goBack();
//   console.log('After going back:', await page.title());
//   console.log('Current URL:', page.url());
//
//   // Go back again
//   await page.goBack();
//   console.log('After going back again:', await page.title());
//
//   // Go forward
//   await page.goForward();
//   console.log('After going forward:', await page.title());
//
//   // Go forward again
//   await page.goForward();
//   console.log('After going forward again:', await page.title());
//
//   // Check if we can go back/forward
//   await page.goBack();
//   const canGoBack = await page.evaluate(() => window.history.length > 1);
//   const canGoForward = await page.evaluate(() => {
//     // This is an approximation - there's no direct way to check
//     return window.history.length > window.history.state;
//   });
//   console.log('Can go back:', canGoBack);
//   console.log('History length:', await page.evaluate(() => window.history.length));
//
//   await browser.close();
// })();

// --------------------------------------------------

// ==================================================
// 4. Reload/Refresh Page
// Description: Demonstrates different ways to reload a page including
// hard refresh (bypass cache) and soft refresh. Useful for testing
// dynamic content updates and cache behavior.
// ==================================================
// (async () => {
//   const browser = await puppeteer.launch({ headless: false });
//   const page = await browser.newPage();
//
//   // Navigate to a page
//   await page.goto('https://example.com');
//   console.log('Initial load:', await page.title());
//
//   // Method 1: Simple reload
//   await page.reload();
//   console.log('After reload:', await page.title());
//
//   // Method 2: Hard reload (bypass cache)
//   await page.reload({ waitUntil: 'networkidle0' });
//   console.log('After hard reload');
//
//   // Method 3: Reload with different wait conditions
//   await page.reload({ waitUntil: 'domcontentloaded' });
//   console.log('Reloaded until DOM content loaded');
//
//   // Method 4: Using keyboard shortcut (Ctrl+R)
//   await page.keyboard.down('Control');
//   await page.keyboard.press('r');
//   await page.keyboard.up('Control');
//   await page.waitForNavigation();
//   console.log('Reloaded with Ctrl+R');
//
//   // Method 5: Hard refresh with keyboard (Ctrl+Shift+R)
//   await page.keyboard.down('Control');
//   await page.keyboard.down('Shift');
//   await page.keyboard.press('r');
//   await page.keyboard.up('Shift');
//   await page.keyboard.up('Control');
//   await page.waitForNavigation();
//   console.log('Hard refresh with Ctrl+Shift+R');
//
//   // Method 6: Navigate to current URL (another way to refresh)
//   const currentUrl = page.url();
//   await page.goto(currentUrl, { waitUntil: 'networkidle2' });
//   console.log('Refreshed by navigating to same URL');
//
//   // Check if page actually reloaded by injecting a variable
//   await page.evaluate(() => {
//     window.testVariable = 'before reload';
//   });
//
//   await page.reload();
//
//   const variableExists = await page.evaluate(() => {
//     return typeof window.testVariable !== 'undefined';
//   });
//   console.log('Variable persisted after reload:', variableExists); // Should be false
//
//   await browser.close();
// })();

// --------------------------------------------------

// ==================================================
// 31. Upload Files
// Description: Shows how to handle file input elements and upload files.
// Essential for testing forms with file uploads, profile pictures,
// document submissions, etc.
// ==================================================
// (async () => {
//   const browser = await puppeteer.launch({ headless: false });
//   const page = await browser.newPage();
//
//   // Create a test page with file input
//   await page.goto('data:text/html,<form><input type="file" id="single-file" accept="image/*"><input type="file" id="multiple-files" multiple><div id="result"></div></form><script>document.getElementById("single-file").addEventListener("change", (e) => { document.getElementById("result").textContent = "Selected: " + e.target.files[0]?.name; }); document.getElementById("multiple-files").addEventListener("change", (e) => { document.getElementById("result").textContent = "Selected " + e.target.files.length + " files"; });</script>');
//
//   // Method 1: Upload single file
//   const fileInput = await page.$('#single-file');
//   await fileInput.uploadFile('./test-file.txt');
//   console.log('Single file uploaded');
//
//   // Wait to see the result
//   await page.waitForTimeout(1000);
//
//   // Method 2: Upload multiple files
//   const multipleFileInput = await page.$('#multiple-files');
//   await multipleFileInput.uploadFile(
//     './file1.txt',
//     './file2.txt',
//     './file3.txt'
//   );
//   console.log('Multiple files uploaded');
//
//   // Method 3: Upload file using file path
//   const path = require('path');
//   const filePath = path.join(__dirname, 'test-image.png');
//   await fileInput.uploadFile(filePath);
//   console.log('File uploaded using absolute path');
//
//   // Method 4: Check uploaded file info
//   const uploadedFileName = await page.evaluate(() => {
//     const input = document.querySelector('#single-file');
//     return input.files[0]?.name || 'No file';
//   });
//   console.log('Uploaded file name:', uploadedFileName);
//
//   // Method 5: Clear file input
//   await page.evaluate(() => {
//     document.querySelector('#single-file').value = '';
//   });
//   console.log('File input cleared');
//
//   // Method 6: Trigger file input without clicking (useful for hidden inputs)
//   await page.evaluate(() => {
//     const input = document.querySelector('#single-file');
//     input.click();
//   });
//   // Note: This opens file dialog in headed mode
//
//   // Get file count from multiple file input
//   const fileCount = await page.evaluate(() => {
//     const input = document.querySelector('#multiple-files');
//     return input.files.length;
//   });
//   console.log('Number of files selected:', fileCount);
//
//   await browser.close();
// })();

// --------------------------------------------------

// ==================================================
// 20. Press Keyboard Keys
// Description: Demonstrates how to simulate keyboard key presses including
// special keys like Enter, Tab, Escape, arrow keys, and keyboard shortcuts.
// Essential for form navigation and keyboard-based interactions.
// ==================================================
// (async () => {
//   const browser = await puppeteer.launch({ headless: false });
//   const page = await browser.newPage();
//
//   // Create a test page with form elements
//   await page.goto('data:text/html,<form><input type="text" id="field1" placeholder="Field 1"><input type="text" id="field2" placeholder="Field 2"><textarea id="textarea" placeholder="Textarea"></textarea><button id="submit">Submit</button></form><div id="log"></div><script>document.addEventListener("keydown", (e) => { if (e.key === "Escape") document.getElementById("log").innerHTML += "Escape pressed<br>"; }); document.getElementById("submit").addEventListener("click", () => { document.getElementById("log").innerHTML += "Form submitted<br>"; });</script>');
//
//   // Focus first field
//   await page.focus('#field1');
//   await page.type('#field1', 'Hello');
//
//   // Press Tab to move to next field
//   await page.keyboard.press('Tab');
//   await page.keyboard.type('World');
//   console.log('Tabbed to next field');
//
//   // Press Shift+Tab to go back
//   await page.keyboard.down('Shift');
//   await page.keyboard.press('Tab');
//   await page.keyboard.up('Shift');
//   console.log('Shift+Tabbed to previous field');
//
//   // Clear field with Ctrl+A and Delete
//   await page.keyboard.down('Control');
//   await page.keyboard.press('a');
//   await page.keyboard.up('Control');
//   await page.keyboard.press('Delete');
//   await page.keyboard.type('New text');
//
//   // Press Enter to submit form
//   await page.keyboard.press('Enter');
//   console.log('Pressed Enter to submit');
//
//   // Press Escape key
//   await page.keyboard.press('Escape');
//   console.log('Pressed Escape');
//
//   // Arrow key navigation in textarea
//   await page.focus('#textarea');
//   await page.keyboard.type('Line 1');
//   await page.keyboard.press('Enter');
//   await page.keyboard.type('Line 2');
//   await page.keyboard.press('ArrowUp');
//   await page.keyboard.press('End'); // Go to end of line
//   await page.keyboard.type(' - edited');
//
//   // Home and End keys
//   await page.keyboard.press('Home');
//   console.log('Pressed Home key');
//   await page.keyboard.press('End');
//   console.log('Pressed End key');
//
//   // Page Up and Page Down
//   await page.keyboard.press('PageUp');
//   await page.keyboard.press('PageDown');
//
//   // Function keys
//   await page.keyboard.press('F1');
//   console.log('Pressed F1');
//
//   // Keyboard shortcuts (Ctrl+S)
//   await page.keyboard.down('Control');
//   await page.keyboard.press('s');
//   await page.keyboard.up('Control');
//   console.log('Pressed Ctrl+S');
//
//   // Type special characters
//   await page.keyboard.type('Special chars: @#$%');
//
//   // Hold key down for repeat
//   await page.keyboard.down('a');
//   await page.waitForTimeout(500); // Hold for 500ms
//   await page.keyboard.up('a');
//   console.log('Held key down');
//
//   await browser.close();
// })();

// --------------------------------------------------

// ==================================================
// 14. Check Element Visibility
// Description: Shows different ways to check if an element is visible,
// hidden, or in the viewport. Essential for testing dynamic UI states,
// conditional rendering, and responsive layouts.
// ==================================================
// (async () => {
//   const browser = await puppeteer.launch({ headless: false });
//   const page = await browser.newPage();
//   await page.setViewport({ width: 800, height: 600 });
//
//   // Create test page with various visibility states
//   await page.goto('data:text/html,<style>.hidden { display: none; } .invisible { visibility: hidden; } .zero-opacity { opacity: 0; } .off-screen { position: absolute; left: -9999px; } .below-fold { margin-top: 1000px; }</style><div id="visible">Visible element</div><div id="hidden" class="hidden">Hidden element</div><div id="invisible" class="invisible">Invisible element</div><div id="zero-opacity" class="zero-opacity">Zero opacity element</div><div id="off-screen" class="off-screen">Off-screen element</div><div id="below-fold" class="below-fold">Below fold element</div>');
//
//   // Method 1: Check if element is visible (display !== none)
//   const isVisible = await page.$eval('#visible', el => {
//     const style = window.getComputedStyle(el);
//     return style.display !== 'none';
//   });
//   console.log('Element visible (display):', isVisible);
//
//   // Method 2: Check if element is hidden (display: none)
//   const isHidden = await page.$eval('#hidden', el => {
//     return el.offsetParent === null;
//   });
//   console.log('Element hidden:', isHidden);
//
//   // Method 3: Check visibility property
//   const visibilityHidden = await page.$eval('#invisible', el => {
//     const style = window.getComputedStyle(el);
//     return style.visibility === 'hidden';
//   });
//   console.log('Visibility hidden:', visibilityHidden);
//
//   // Method 4: Check opacity
//   const hasZeroOpacity = await page.$eval('#zero-opacity', el => {
//     const style = window.getComputedStyle(el);
//     return parseFloat(style.opacity) === 0;
//   });
//   console.log('Has zero opacity:', hasZeroOpacity);
//
//   // Method 5: Check if element is in viewport
//   const isInViewport = await page.$eval('#visible', el => {
//     const rect = el.getBoundingClientRect();
//     return (
//       rect.top >= 0 &&
//       rect.left >= 0 &&
//       rect.bottom <= window.innerHeight &&
//       rect.right <= window.innerWidth
//     );
//   });
//   console.log('Element in viewport:', isInViewport);
//
//   // Method 6: Check if element is below fold
//   const isBelowFold = await page.$eval('#below-fold', el => {
//     const rect = el.getBoundingClientRect();
//     return rect.top > window.innerHeight;
//   });
//   console.log('Element below fold:', isBelowFold);
//
//   // Method 7: Comprehensive visibility check
//   const isFullyVisible = await page.$eval('#visible', el => {
//     const style = window.getComputedStyle(el);
//     const rect = el.getBoundingClientRect();
//
//     return (
//       style.display !== 'none' &&
//       style.visibility !== 'hidden' &&
//       parseFloat(style.opacity) > 0 &&
//       rect.width > 0 &&
//       rect.height > 0 &&
//       rect.top < window.innerHeight &&
//       rect.bottom > 0 &&
//       rect.left < window.innerWidth &&
//       rect.right > 0
//     );
//   });
//   console.log('Element fully visible:', isFullyVisible);
//
//   // Method 8: Wait for element to become visible
//   await page.evaluate(() => {
//     setTimeout(() => {
//       document.querySelector('#hidden').classList.remove('hidden');
//     }, 2000);
//   });
//
//   await page.waitForSelector('#hidden:not(.hidden)');
//   console.log('Element became visible');
//
//   await browser.close();
// })();

// --------------------------------------------------

// ==================================================
// 28. Check If Checkbox/Radio Is Checked
// Description: Shows how to check the current state of checkboxes and
// radio buttons. Essential for form validation, testing user selections,
// and verifying default states.
// ==================================================
// (async () => {
//   const browser = await puppeteer.launch({ headless: false });
//   const page = await browser.newPage();
//
//   // Create test form with checkboxes and radio buttons
//   await page.goto('data:text/html,<form><label><input type="checkbox" id="checkbox1" checked> Checkbox 1 (checked)</label><br><label><input type="checkbox" id="checkbox2"> Checkbox 2</label><br><br><label><input type="radio" name="group1" id="radio1" value="option1" checked> Radio 1</label><br><label><input type="radio" name="group1" id="radio2" value="option2"> Radio 2</label><br><label><input type="radio" name="group1" id="radio3" value="option3"> Radio 3</label><br><br><div id="status"></div></form>');
//
//   // Method 1: Check if checkbox is checked
//   const isChecked1 = await page.$eval('#checkbox1', el => el.checked);
//   console.log('Checkbox 1 is checked:', isChecked1);
//
//   const isChecked2 = await page.$eval('#checkbox2', el => el.checked);
//   console.log('Checkbox 2 is checked:', isChecked2);
//
//   // Method 2: Check which radio button is selected
//   const selectedRadio = await page.evaluate(() => {
//     const radios = document.querySelectorAll('input[name="group1"]');
//     for (const radio of radios) {
//       if (radio.checked) {
//         return radio.value;
//       }
//     }
//     return null;
//   });
//   console.log('Selected radio value:', selectedRadio);
//
//   // Method 3: Get all checked checkboxes
//   const checkedCheckboxes = await page.evaluate(() => {
//     return Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
//       .map(cb => cb.id);
//   });
//   console.log('Checked checkboxes:', checkedCheckboxes);
//
//   // Method 4: Check state using attribute
//   const hasCheckedAttribute = await page.$eval('#checkbox1', el =>
//     el.hasAttribute('checked')
//   );
//   console.log('Has checked attribute:', hasCheckedAttribute);
//
//   // Toggle checkbox and check new state
//   await page.click('#checkbox2');
//   const newState = await page.$eval('#checkbox2', el => el.checked);
//   console.log('Checkbox 2 after click:', newState);
//
//   // Method 5: Wait for checkbox to be checked
//   await page.evaluate(() => {
//     setTimeout(() => {
//       document.querySelector('#checkbox2').checked = false;
//     }, 2000);
//   });
//
//   await page.waitForFunction(
//     () => !document.querySelector('#checkbox2').checked,
//     { timeout: 5000 }
//   );
//   console.log('Checkbox 2 became unchecked');
//
//   // Method 6: Check indeterminate state (for checkboxes)
//   await page.evaluate(() => {
//     document.querySelector('#checkbox1').indeterminate = true;
//   });
//
//   const isIndeterminate = await page.$eval('#checkbox1', el => el.indeterminate);
//   console.log('Checkbox 1 is indeterminate:', isIndeterminate);
//
//   // Method 7: Get form data including checkbox/radio states
//   const formData = await page.evaluate(() => {
//     const form = document.querySelector('form');
//     const data = new FormData(form);
//     const result = {};
//     for (const [key, value] of data.entries()) {
//       result[key] = value;
//     }
//     return result;
//   });
//   console.log('Form data:', formData);
//
//   await browser.close();
// })();

// --------------------------------------------------

// ==================================================
// 29. Get Selected Dropdown Value
// Description: Demonstrates various ways to get the currently selected
// value from dropdown menus (select elements). Shows how to get value,
// text, and index of selected options.
// ==================================================
// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//
//   // Create test page with dropdown
//   await page.goto('data:text/html,<form><select id="single-select"><option value="">--Select--</option><option value="apple">Apple</option><option value="banana" selected>Banana</option><option value="cherry">Cherry</option></select><br><br><select id="multi-select" multiple size="4"><option value="red">Red</option><option value="green" selected>Green</option><option value="blue">Blue</option><option value="yellow" selected>Yellow</option></select></form>');
//
//   // Method 1: Get selected value from single select
//   const selectedValue = await page.$eval('#single-select', el => el.value);
//   console.log('Selected value:', selectedValue);
//
//   // Method 2: Get selected text (visible text)
//   const selectedText = await page.$eval('#single-select', el => {
//     return el.options[el.selectedIndex]?.text || '';
//   });
//   console.log('Selected text:', selectedText);
//
//   // Method 3: Get selected index
//   const selectedIndex = await page.$eval('#single-select', el => el.selectedIndex);
//   console.log('Selected index:', selectedIndex);
//
//   // Method 4: Get all option details
//   const selectedOption = await page.$eval('#single-select', el => {
//     const option = el.options[el.selectedIndex];
//     return {
//       value: option.value,
//       text: option.text,
//       index: el.selectedIndex
//     };
//   });
//   console.log('Selected option details:', selectedOption);
//
//   // Method 5: Get multiple selected values
//   const multipleValues = await page.$eval('#multi-select', el => {
//     return Array.from(el.selectedOptions).map(option => option.value);
//   });
//   console.log('Multiple selected values:', multipleValues);
//
//   // Method 6: Get multiple selected texts
//   const multipleTexts = await page.$eval('#multi-select', el => {
//     return Array.from(el.selectedOptions).map(option => option.text);
//   });
//   console.log('Multiple selected texts:', multipleTexts);
//
//   // Method 7: Check if specific option is selected
//   const isAppleSelected = await page.$eval('#single-select', el => {
//     return el.value === 'apple';
//   });
//   console.log('Is Apple selected:', isAppleSelected);
//
//   // Method 8: Get all options (not just selected)
//   const allOptions = await page.$$eval('#single-select option', options =>
//     options.map(option => ({
//       value: option.value,
//       text: option.text,
//       selected: option.selected
//     }))
//   );
//   console.log('All options:', allOptions);
//
//   // Change selection and get new value
//   await page.select('#single-select', 'cherry');
//   const newValue = await page.$eval('#single-select', el => el.value);
//   console.log('New selected value:', newValue);
//
//   // Method 9: Wait for specific value to be selected
//   await page.evaluate(() => {
//     setTimeout(() => {
//       document.querySelector('#single-select').value = 'apple';
//     }, 2000);
//   });
//
//   await page.waitForFunction(
//     () => document.querySelector('#single-select').value === 'apple',
//     { timeout: 5000 }
//   );
//   console.log('Apple became selected');
//
//   await browser.close();
// })();

// --------------------------------------------------

// ==================================================
// 15. Check Element Enabled/Disabled State
// Description: Shows how to check if form elements and buttons are
// enabled or disabled. Essential for testing form validation, conditional
// interactions, and UI state management.
// ==================================================
// (async () => {
//   const browser = await puppeteer.launch({ headless: false });
//   const page = await browser.newPage();
//
//   // Create test page with various enabled/disabled elements
//   await page.goto('data:text/html,<form><input type="text" id="enabled-input" placeholder="Enabled input"><input type="text" id="disabled-input" placeholder="Disabled input" disabled><br><br><button id="enabled-button">Enabled Button</button><button id="disabled-button" disabled>Disabled Button</button><br><br><select id="disabled-select" disabled><option>Option 1</option></select><br><br><textarea id="readonly-textarea" readonly>Read-only text</textarea><br><br><button id="toggle-button">Toggle States</button></form><script>document.getElementById("toggle-button").addEventListener("click", () => { const input = document.getElementById("disabled-input"); input.disabled = !input.disabled; });</script>');
//
//   // Method 1: Check if element is disabled
//   const isInputDisabled = await page.$eval('#disabled-input', el => el.disabled);
//   console.log('Input is disabled:', isInputDisabled);
//
//   const isButtonEnabled = await page.$eval('#enabled-button', el => !el.disabled);
//   console.log('Button is enabled:', isButtonEnabled);
//
//   // Method 2: Check using attribute
//   const hasDisabledAttr = await page.$eval('#disabled-button', el =>
//     el.hasAttribute('disabled')
//   );
//   console.log('Has disabled attribute:', hasDisabledAttr);
//
//   // Method 3: Check if element is readonly
//   const isReadonly = await page.$eval('#readonly-textarea', el => el.readOnly);
//   console.log('Textarea is readonly:', isReadonly);
//
//   // Method 4: Check multiple elements
//   const elementStates = await page.evaluate(() => {
//     const elements = ['enabled-input', 'disabled-input', 'enabled-button', 'disabled-button'];
//     return elements.map(id => ({
//       id,
//       disabled: document.getElementById(id).disabled,
//       readonly: document.getElementById(id).readOnly || false
//     }));
//   });
//   console.log('Element states:', elementStates);
//
//   // Method 5: Wait for element to become enabled
//   await page.click('#toggle-button');
//
//   await page.waitForFunction(
//     () => !document.querySelector('#disabled-input').disabled,
//     { timeout: 5000 }
//   );
//   console.log('Input became enabled');
//
//   // Method 6: Check if element is clickable (not disabled)
//   const isClickable = await page.evaluate(() => {
//     const button = document.querySelector('#enabled-button');
//     return !button.disabled &&
//            window.getComputedStyle(button).pointerEvents !== 'none' &&
//            window.getComputedStyle(button).visibility !== 'hidden';
//   });
//   console.log('Button is clickable:', isClickable);
//
//   // Method 7: Try to interact with disabled element
//   try {
//     await page.click('#disabled-button', { timeout: 1000 });
//   } catch (error) {
//     console.log('Cannot click disabled button (expected)');
//   }
//
//   // Method 8: Get all disabled form elements
//   const disabledElements = await page.$$eval('[disabled]', elements =>
//     elements.map(el => ({
//       tagName: el.tagName,
//       id: el.id,
//       type: el.type || null
//     }))
//   );
//   console.log('Disabled elements:', disabledElements);
//
//   // Method 9: Check form field validity
//   const fieldValidity = await page.evaluate(() => {
//     const input = document.querySelector('#enabled-input');
//     input.required = true;
//     return {
//       valid: input.checkValidity(),
//       willValidate: input.willValidate,
//       validationMessage: input.validationMessage
//     };
//   });
//   console.log('Field validity:', fieldValidity);
//
//   await browser.close();
// })();

// --------------------------------------------------

// ==================================================
// 32. Wait for Element to Disappear
// Description: Demonstrates various ways to wait for elements to disappear
// from the page. Essential for handling loading spinners, modals, alerts,
// and other temporary UI elements.
// ==================================================
// (async () => {
//   const browser = await puppeteer.launch({ headless: false });
//   const page = await browser.newPage();
//
//   // Create test page with disappearing elements
//   await page.goto('data:text/html,<div id="loader" style="background: yellow; padding: 20px;">Loading...</div><div id="modal" style="background: lightblue; padding: 20px; margin: 10px 0;">Modal Dialog</div><div id="notification" style="background: lightgreen; padding: 20px;">Notification</div><button onclick="document.getElementById(\'loader\').remove()">Remove Loader</button><button onclick="document.getElementById(\'modal\').style.display=\'none\'">Hide Modal</button><script>setTimeout(() => { document.getElementById("notification").remove(); }, 3000);</script>');
//
//   // Method 1: Wait for element to be removed from DOM
//   await page.evaluate(() => {
//     setTimeout(() => {
//       document.querySelector('#loader').remove();
//     }, 2000);
//   });
//
//   await page.waitForSelector('#loader', { state: 'detached' });
//   console.log('Loader element was removed from DOM');
//
//   // Method 2: Wait for element to become hidden (display: none)
//   await page.evaluate(() => {
//     setTimeout(() => {
//       document.querySelector('#modal').style.display = 'none';
//     }, 1500);
//   });
//
//   await page.waitForSelector('#modal', { state: 'hidden' });
//   console.log('Modal became hidden');
//
//   // Method 3: Wait using waitForFunction
//   await page.waitForFunction(
//     () => !document.querySelector('#notification'),
//     { timeout: 5000 }
//   );
//   console.log('Notification disappeared');
//
//   // Method 4: Wait for element count to decrease
//   await page.goto('data:text/html,<div class="item">Item 1</div><div class="item">Item 2</div><div class="item">Item 3</div><script>setInterval(() => { const items = document.querySelectorAll(".item"); if (items.length > 0) items[0].remove(); }, 1000);</script>');
//
//   await page.waitForFunction(
//     () => document.querySelectorAll('.item').length === 0,
//     { timeout: 5000 }
//   );
//   console.log('All items disappeared');
//
//   // Method 5: Wait for specific text to disappear
//   await page.goto('data:text/html,<div id="status">Processing...</div><script>setTimeout(() => { document.getElementById("status").textContent = "Complete"; }, 2000);</script>');
//
//   await page.waitForFunction(
//     () => !document.body.textContent.includes('Processing...'),
//     { timeout: 5000 }
//   );
//   console.log('Processing text disappeared');
//
//   // Method 6: Wait for element to fade out (opacity)
//   await page.goto('data:text/html,<div id="fader" style="transition: opacity 2s;">Fading element</div><script>setTimeout(() => { document.getElementById("fader").style.opacity = "0"; }, 1000);</script>');
//
//   await page.waitForFunction(
//     () => {
//       const element = document.querySelector('#fader');
//       return element && window.getComputedStyle(element).opacity === '0';
//     },
//     { timeout: 5000 }
//   );
//   console.log('Element faded out');
//
//   // Method 7: Wait for loading class to be removed
//   await page.goto('data:text/html,<div id="content" class="loading">Content</div><script>setTimeout(() => { document.getElementById("content").classList.remove("loading"); }, 2000);</script>');
//
//   await page.waitForSelector('#content:not(.loading)');
//   console.log('Loading class was removed');
//
//   // Method 8: Wait with custom polling interval
//   await page.goto('data:text/html,<div id="slow-fade">Slow fade</div><script>let opacity = 1; setInterval(() => { opacity -= 0.01; document.getElementById("slow-fade").style.opacity = opacity; if (opacity <= 0) document.getElementById("slow-fade").remove(); }, 50);</script>');
//
//   await page.waitForFunction(
//     () => !document.querySelector('#slow-fade'),
//     { polling: 100, timeout: 10000 }
//   );
//   console.log('Slow fade element disappeared');
//
//   await browser.close();
// })();

// --------------------------------------------------

// ==================================================
// 38. Get Page Dimensions and Scroll Position
// Description: Shows how to get viewport dimensions, page dimensions,
// and scroll position. Essential for responsive testing, layout verification,
// and scroll-based interactions.
// ==================================================
// (async () => {
//   const browser = await puppeteer.launch({ headless: false });
//   const page = await browser.newPage();
//
//   // Set a specific viewport size
//   await page.setViewport({ width: 800, height: 600 });
//
//   // Navigate to a page with scrollable content
//   await page.goto('data:text/html,<style>body { margin: 0; height: 2000px; width: 1500px; background: linear-gradient(to bottom, white, gray); } .marker { position: absolute; top: 500px; left: 300px; background: red; padding: 20px; }</style><h1>Scrollable Page</h1><div class="marker">Marker at 500px from top</div>');
//
//   // Method 1: Get viewport dimensions
//   const viewport = await page.viewport();
//   console.log('Viewport:', viewport);
//
//   // Method 2: Get window dimensions (inner width/height)
//   const windowDimensions = await page.evaluate(() => ({
//     innerWidth: window.innerWidth,
//     innerHeight: window.innerHeight,
//     outerWidth: window.outerWidth,
//     outerHeight: window.outerHeight
//   }));
//   console.log('Window dimensions:', windowDimensions);
//
//   // Method 3: Get document dimensions
//   const documentDimensions = await page.evaluate(() => ({
//     scrollWidth: document.documentElement.scrollWidth,
//     scrollHeight: document.documentElement.scrollHeight,
//     clientWidth: document.documentElement.clientWidth,
//     clientHeight: document.documentElement.clientHeight
//   }));
//   console.log('Document dimensions:', documentDimensions);
//
//   // Method 4: Get current scroll position
//   const scrollPosition = await page.evaluate(() => ({
//     scrollX: window.scrollX,
//     scrollY: window.scrollY,
//     pageXOffset: window.pageXOffset,
//     pageYOffset: window.pageYOffset
//   }));
//   console.log('Initial scroll position:', scrollPosition);
//
//   // Scroll to specific position
//   await page.evaluate(() => window.scrollTo(300, 400));
//
//   // Get new scroll position
//   const newScrollPosition = await page.evaluate(() => ({
//     x: window.scrollX,
//     y: window.scrollY
//   }));
//   console.log('New scroll position:', newScrollPosition);
//
//   // Method 5: Get scroll percentage
//   const scrollPercentage = await page.evaluate(() => {
//     const maxScrollY = document.documentElement.scrollHeight - window.innerHeight;
//     const maxScrollX = document.documentElement.scrollWidth - window.innerWidth;
//     return {
//       vertical: (window.scrollY / maxScrollY) * 100,
//       horizontal: (window.scrollX / maxScrollX) * 100
//     };
//   });
//   console.log('Scroll percentage:', scrollPercentage);
//
//   // Method 6: Check if at bottom of page
//   await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
//
//   const isAtBottom = await page.evaluate(() => {
//     return window.innerHeight + window.scrollY >= document.body.scrollHeight;
//   });
//   console.log('At bottom of page:', isAtBottom);
//
//   // Method 7: Get screen dimensions
//   const screenDimensions = await page.evaluate(() => ({
//     width: window.screen.width,
//     height: window.screen.height,
//     availWidth: window.screen.availWidth,
//     availHeight: window.screen.availHeight,
//     colorDepth: window.screen.colorDepth,
//     pixelDepth: window.screen.pixelDepth
//   }));
//   console.log('Screen dimensions:', screenDimensions);
//
//   // Method 8: Monitor scroll events
//   await page.evaluate(() => {
//     window.addEventListener('scroll', () => {
//       window.lastScrollPosition = {
//         x: window.scrollX,
//         y: window.scrollY,
//         time: Date.now()
//       };
//     });
//   });
//
//   // Scroll and check
//   await page.evaluate(() => window.scrollBy(0, 100));
//   await page.waitForTimeout(100);
//
//   const lastScroll = await page.evaluate(() => window.lastScrollPosition);
//   console.log('Last scroll event:', lastScroll);
//
//   await browser.close();
// })();

// --------------------------------------------------

// ==================================================
// 39. Get Element Position and Size
// Description: Shows how to get element dimensions, position, and
// bounding box information. Essential for layout testing, visual
// regression testing, and element interaction verification.
// ==================================================
// (async () => {
//   const browser = await puppeteer.launch({ headless: false });
//   const page = await browser.newPage();
//   await page.setViewport({ width: 1200, height: 800 });
//
//   // Create test page with various elements
//   await page.goto('data:text/html,<style>body { margin: 50px; } #box1 { width: 200px; height: 100px; background: red; margin: 20px; padding: 10px; border: 5px solid black; } #box2 { position: absolute; top: 300px; left: 400px; width: 150px; height: 150px; background: blue; transform: rotate(45deg); }</style><div id="box1">Box 1 with margin, padding, border</div><div id="box2">Box 2 rotated</div>');
//
//   // Method 1: Get bounding box (position and size)
//   const box1 = await page.$('#box1');
//   const boundingBox = await box1.boundingBox();
//   console.log('Box 1 bounding box:', boundingBox);
//   // Returns: { x, y, width, height }
//
//   // Method 2: Get detailed element dimensions
//   const dimensions = await page.$eval('#box1', el => {
//     const rect = el.getBoundingClientRect();
//     const styles = window.getComputedStyle(el);
//     return {
//       // Position
//       top: rect.top,
//       left: rect.left,
//       right: rect.right,
//       bottom: rect.bottom,
//       // Size
//       width: rect.width,
//       height: rect.height,
//       // With margins
//       marginTop: parseInt(styles.marginTop),
//       marginLeft: parseInt(styles.marginLeft),
//       marginRight: parseInt(styles.marginRight),
//       marginBottom: parseInt(styles.marginBottom),
//       // Padding
//       paddingTop: parseInt(styles.paddingTop),
//       paddingLeft: parseInt(styles.paddingLeft),
//       // Border
//       borderTopWidth: parseInt(styles.borderTopWidth),
//       borderLeftWidth: parseInt(styles.borderLeftWidth),
//       // Computed dimensions
//       offsetWidth: el.offsetWidth,
//       offsetHeight: el.offsetHeight,
//       clientWidth: el.clientWidth,
//       clientHeight: el.clientHeight,
//       scrollWidth: el.scrollWidth,
//       scrollHeight: el.scrollHeight
//     };
//   });
//   console.log('Detailed dimensions:', dimensions);
//
//   // Method 3: Get position relative to page (including scroll)
//   const pagePosition = await page.$eval('#box1', el => {
//     const rect = el.getBoundingClientRect();
//     return {
//       x: rect.left + window.scrollX,
//       y: rect.top + window.scrollY
//     };
//   });
//   console.log('Position relative to page:', pagePosition);
//
//   // Method 4: Get center point of element
//   const centerPoint = await page.$eval('#box1', el => {
//     const rect = el.getBoundingClientRect();
//     return {
//       x: rect.left + rect.width / 2,
//       y: rect.top + rect.height / 2
//     };
//   });
//   console.log('Center point:', centerPoint);
//
//   // Method 5: Check if elements overlap
//   const elementsOverlap = await page.evaluate(() => {
//     const rect1 = document.querySelector('#box1').getBoundingClientRect();
//     const rect2 = document.querySelector('#box2').getBoundingClientRect();
//
//     return !(rect1.right < rect2.left ||
//              rect1.left > rect2.right ||
//              rect1.bottom < rect2.top ||
//              rect1.top > rect2.bottom);
//   });
//   console.log('Elements overlap:', elementsOverlap);
//
//   // Method 6: Get transformed element bounds
//   const transformedBounds = await page.$eval('#box2', el => {
//     const rect = el.getBoundingClientRect();
//     return {
//       width: rect.width,
//       height: rect.height,
//       // Note: transformed elements have different bounds
//       actualWidth: el.offsetWidth,
//       actualHeight: el.offsetHeight
//     };
//   });
//   console.log('Transformed element bounds:', transformedBounds);
//
//   // Method 7: Get multiple elements' positions
//   const allBoxes = await page.$$eval('div[id^="box"]', boxes =>
//     boxes.map(box => ({
//       id: box.id,
//       x: box.getBoundingClientRect().left,
//       y: box.getBoundingClientRect().top,
//       width: box.getBoundingClientRect().width,
//       height: box.getBoundingClientRect().height
//     }))
//   );
//   console.log('All boxes:', allBoxes);
//
//   // Method 8: Click at specific position within element
//   const box2 = await page.$('#box2');
//   const box2BoundingBox = await box2.boundingBox();
//   await page.mouse.click(
//     box2BoundingBox.x + box2BoundingBox.width / 2,
//     box2BoundingBox.y + box2BoundingBox.height / 2
//   );
//   console.log('Clicked center of box2');
//
//   await browser.close();
// })();

// --------------------------------------------------

// ==================================================
// 45. Get Console Messages
// Description: Shows how to capture browser console messages including
// logs, warnings, errors, and debug information. Essential for debugging
// JavaScript issues and monitoring application behavior.
// ==================================================
// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//
//   // Array to store console messages
//   const consoleMessages = [];
//
//   // Method 1: Listen to all console events
//   page.on('console', msg => {
//     consoleMessages.push({
//       type: msg.type(),
//       text: msg.text(),
//       location: msg.location(),
//       args: msg.args()
//     });
//     console.log(`Console ${msg.type()}: ${msg.text()}`);
//   });
//
//   // Method 2: Listen to specific console types
//   page.on('console', msg => {
//     if (msg.type() === 'error') {
//       console.log('ERROR:', msg.text());
//     } else if (msg.type() === 'warning') {
//       console.log('WARNING:', msg.text());
//     }
//   });
//
//   // Method 3: Listen to page errors (uncaught exceptions)
//   page.on('pageerror', error => {
//     console.log('Page error:', error.message);
//   });
//
//   // Navigate to page with console messages
//   await page.goto('data:text/html,<script>console.log("Hello from page"); console.warn("This is a warning"); console.error("This is an error"); console.info("Info message"); console.debug("Debug message"); setTimeout(() => { throw new Error("Uncaught error!"); }, 1000);</script>');
//
//   // Wait for console messages
//   await page.waitForTimeout(2000);
//
//   // Method 4: Get console message details
//   page.on('console', async msg => {
//     // Get the arguments
//     const args = await Promise.all(
//       msg.args().map(arg => arg.jsonValue())
//     );
//     console.log('Detailed message:', {
//       type: msg.type(),
//       text: msg.text(),
//       args: args,
//       stackTrace: msg.stackTrace()
//     });
//   });
//
//   // Trigger more console messages
//   await page.evaluate(() => {
//     console.log('String message');
//     console.log('Multiple', 'arguments', 123, true);
//     console.log({ object: 'value' });
//     console.table([{ a: 1, b: 2 }, { a: 3, b: 4 }]);
//     console.group('Group name');
//     console.log('Inside group');
//     console.groupEnd();
//   });
//
//   // Method 5: Filter console messages
//   const errors = consoleMessages.filter(msg => msg.type === 'error');
//   const warnings = consoleMessages.filter(msg => msg.type === 'warning');
//   console.log('Total errors:', errors.length);
//   console.log('Total warnings:', warnings.length);
//
//   // Method 6: Assert no console errors
//   const hasErrors = consoleMessages.some(msg => msg.type === 'error');
//   if (hasErrors) {
//     console.log('Page has console errors!');
//   }
//
//   // Method 7: Inject console override
//   await page.evaluateOnNewDocument(() => {
//     const originalLog = console.log;
//     console.log = function(...args) {
//       window.consoleHistory = window.consoleHistory || [];
//       window.consoleHistory.push({
//         type: 'log',
//         args: args,
//         timestamp: new Date()
//       });
//       originalLog.apply(console, args);
//     };
//   });
//
//   // Reload to see injected console
//   await page.reload();
//   await page.evaluate(() => {
//     console.log('Test after injection');
//   });
//
//   const consoleHistory = await page.evaluate(() => window.consoleHistory);
//   console.log('Console history:', consoleHistory);
//
//   // Method 8: Monitor network errors through console
//   page.on('console', msg => {
//     if (msg.text().includes('Failed to fetch') ||
//         msg.text().includes('NetworkError')) {
//       console.log('Network error detected:', msg.text());
//     }
//   });
//
//   await browser.close();
// })();

// --------------------------------------------------

// ==================================================
// 40. Basic Performance Timing
// Description: Shows how to measure basic page load performance metrics.
// Essential for monitoring site speed, identifying bottlenecks, and
// ensuring good user experience.
// ==================================================
// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//
//   // Method 1: Measure simple page load time
//   const startTime = Date.now();
//   await page.goto('https://example.com', { waitUntil: 'load' });
//   const loadTime = Date.now() - startTime;
//   console.log('Page load time:', loadTime + 'ms');
//
//   // Method 2: Get navigation timing
//   const navigationTiming = await page.evaluate(() => {
//     const timing = window.performance.timing;
//     return {
//       // Total load time
//       loadTime: timing.loadEventEnd - timing.navigationStart,
//       // Time to first byte
//       ttfb: timing.responseStart - timing.navigationStart,
//       // DOM ready time
//       domReady: timing.domContentLoadedEventEnd - timing.navigationStart,
//       // DNS lookup time
//       dnsTime: timing.domainLookupEnd - timing.domainLookupStart,
//       // TCP connection time
//       connectTime: timing.connectEnd - timing.connectStart,
//       // Response time
//       responseTime: timing.responseEnd - timing.responseStart,
//       // DOM processing time
//       domProcessing: timing.domComplete - timing.domLoading
//     };
//   });
//   console.log('Navigation timing:', navigationTiming);
//
//   // Method 3: Measure specific operations
//   const searchStartTime = Date.now();
//   await page.type('input[type="search"]', 'test query');
//   await page.keyboard.press('Enter');
//   await page.waitForSelector('.results', { timeout: 5000 });
//   const searchTime = Date.now() - searchStartTime;
//   console.log('Search operation time:', searchTime + 'ms');
//
//   // Method 4: Get page metrics
//   const metrics = await page.metrics();
//   console.log('Page metrics:', {
//     timestamp: metrics.Timestamp,
//     documents: metrics.Documents,
//     frames: metrics.Frames,
//     jsEventListeners: metrics.JSEventListeners,
//     nodes: metrics.Nodes,
//     layoutCount: metrics.LayoutCount,
//     styleRecalcCount: metrics.RecalcStyleCount,
//     layoutDuration: metrics.LayoutDuration,
//     scriptDuration: metrics.ScriptDuration,
//     taskDuration: metrics.TaskDuration,
//     jsHeapUsedSize: (metrics.JSHeapUsedSize / 1024 / 1024).toFixed(2) + 'MB',
//     jsHeapTotalSize: (metrics.JSHeapTotalSize / 1024 / 1024).toFixed(2) + 'MB'
//   });
//
//   // Method 5: Measure first contentful paint
//   const paintTiming = await page.evaluate(() => {
//     const paintMetrics = performance.getEntriesByType('paint');
//     const fcp = paintMetrics.find(metric => metric.name === 'first-contentful-paint');
//     const fp = paintMetrics.find(metric => metric.name === 'first-paint');
//     return {
//       firstPaint: fp ? fp.startTime : null,
//       firstContentfulPaint: fcp ? fcp.startTime : null
//     };
//   });
//   console.log('Paint timing:', paintTiming);
//
//   // Method 6: Measure resource loading times
//   const resourceTimings = await page.evaluate(() => {
//     const resources = performance.getEntriesByType('resource');
//     return resources.slice(0, 5).map(resource => ({
//       name: resource.name.split('/').pop(),
//       type: resource.initiatorType,
//       duration: resource.duration.toFixed(2) + 'ms',
//       size: resource.transferSize + ' bytes'
//     }));
//   });
//   console.log('Top 5 resources:', resourceTimings);
//
//   // Method 7: Simple performance score
//   const perfScore = await page.evaluate(() => {
//     const timing = window.performance.timing;
//     const loadTime = timing.loadEventEnd - timing.navigationStart;
//
//     // Simple scoring: <1s = excellent, <3s = good, <5s = needs improvement
//     if (loadTime < 1000) return 'Excellent';
//     if (loadTime < 3000) return 'Good';
//     if (loadTime < 5000) return 'Needs Improvement';
//     return 'Poor';
//   });
//   console.log('Performance score:', perfScore);
//
//   // Method 8: Monitor long tasks
//   await page.evaluateOnNewDocument(() => {
//     window.longTasks = [];
//     const observer = new PerformanceObserver((list) => {
//       for (const entry of list.getEntries()) {
//         window.longTasks.push({
//           duration: entry.duration,
//           startTime: entry.startTime
//         });
//       }
//     });
//     observer.observe({ entryTypes: ['longtask'] });
//   });
//
//   await page.reload();
//   await page.waitForTimeout(3000);
//
//   const longTasks = await page.evaluate(() => window.longTasks);
//   console.log('Long tasks detected:', longTasks.length);
//
//   await browser.close();
// })();

// --------------------------------------------------

// ==================================================
// 41. Cookie Management
// Description: Shows how to get, set, and delete cookies. Essential
// for session management, testing authentication states, and
// managing user preferences across page loads.
// ==================================================
// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//
//   // Navigate to a page
//   await page.goto('https://example.com');
//
//   // Method 1: Get all cookies
//   const cookies = await page.cookies();
//   console.log('Current cookies:', cookies);
//
//   // Method 2: Get cookies for specific URLs
//   const specificCookies = await page.cookies('https://example.com', 'https://another.com');
//   console.log('Cookies for specific URLs:', specificCookies);
//
//   // Method 3: Set a cookie
//   await page.setCookie({
//     name: 'test-cookie',
//     value: 'test-value',
//     domain: 'example.com',
//     path: '/',
//     expires: Date.now() / 1000 + 3600, // 1 hour from now
//     httpOnly: true,
//     secure: true,
//     sameSite: 'Lax'
//   });
//   console.log('Cookie set successfully');
//
//   // Method 4: Set multiple cookies
//   await page.setCookie(
//     {
//       name: 'session-id',
//       value: 'abc123',
//       domain: 'example.com'
//     },
//     {
//       name: 'user-pref',
//       value: 'dark-mode',
//       domain: 'example.com'
//     }
//   );
//
//   // Method 5: Get a specific cookie by name
//   const allCookies = await page.cookies();
//   const sessionCookie = allCookies.find(cookie => cookie.name === 'session-id');
//   console.log('Session cookie:', sessionCookie);
//
//   // Method 6: Delete specific cookies
//   await page.deleteCookie({
//     name: 'test-cookie',
//     domain: 'example.com'
//   });
//   console.log('Cookie deleted');
//
//   // Method 7: Delete all cookies
//   const cookiesToDelete = await page.cookies();
//   await page.deleteCookie(...cookiesToDelete);
//   console.log('All cookies deleted');
//
//   // Method 8: Save cookies to reuse in another session
//   const savedCookies = await page.cookies();
//   // Later, in another session:
//   // await page.setCookie(...savedCookies);
//
//   // Method 9: Check if a cookie exists
//   const cookieExists = (await page.cookies()).some(
//     cookie => cookie.name === 'session-id'
//   );
//   console.log('Session cookie exists:', cookieExists);
//
//   await browser.close();
// })();

// --------------------------------------------------

// ==================================================
// 43. Local Storage Access
// Description: Shows how to read, write, and manage browser localStorage.
// Essential for testing applications that store user preferences, 
// shopping carts, or other persistent data on the client side.
// ==================================================
// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//
//   // Navigate to a page
//   await page.goto('https://example.com');
//
//   // Method 1: Set a localStorage item
//   await page.evaluate(() => {
//     localStorage.setItem('username', 'john_doe');
//     localStorage.setItem('theme', 'dark');
//     localStorage.setItem('language', 'en');
//   });
//   console.log('LocalStorage items set');
//
//   // Method 2: Get a specific localStorage item
//   const username = await page.evaluate(() => {
//     return localStorage.getItem('username');
//   });
//   console.log('Username from localStorage:', username);
//
//   // Method 3: Get all localStorage items
//   const allItems = await page.evaluate(() => {
//     const items = {};
//     for (let i = 0; i < localStorage.length; i++) {
//       const key = localStorage.key(i);
//       items[key] = localStorage.getItem(key);
//     }
//     return items;
//   });
//   console.log('All localStorage items:', allItems);
//
//   // Method 4: Check if item exists
//   const hasTheme = await page.evaluate(() => {
//     return localStorage.getItem('theme') !== null;
//   });
//   console.log('Theme exists in localStorage:', hasTheme);
//
//   // Method 5: Update existing item
//   await page.evaluate(() => {
//     localStorage.setItem('theme', 'light');
//   });
//   console.log('Theme updated to light');
//
//   // Method 6: Remove specific item
//   await page.evaluate(() => {
//     localStorage.removeItem('language');
//   });
//   console.log('Language removed from localStorage');
//
//   // Method 7: Clear all localStorage
//   await page.evaluate(() => {
//     localStorage.clear();
//   });
//   console.log('All localStorage cleared');
//
//   // Method 8: Store complex data (JSON)
//   await page.evaluate(() => {
//     const userData = {
//       id: 123,
//       name: 'John Doe',
//       preferences: {
//         theme: 'dark',
//         notifications: true
//       }
//     };
//     localStorage.setItem('userData', JSON.stringify(userData));
//   });
//
//   // Method 9: Retrieve and parse complex data
//   const userData = await page.evaluate(() => {
//     const data = localStorage.getItem('userData');
//     return data ? JSON.parse(data) : null;
//   });
//   console.log('User data:', userData);
//
//   // Method 10: Get localStorage size
//   const storageSize = await page.evaluate(() => {
//     let total = 0;
//     for (let key in localStorage) {
//       if (localStorage.hasOwnProperty(key)) {
//         total += localStorage[key].length + key.length;
//       }
//     }
//     return total;
//   });
//   console.log('Total localStorage size (chars):', storageSize);
//
//   await browser.close();
// })();

// --------------------------------------------------

// ==================================================
// 44. Session Storage Access
// Description: Shows how to work with browser sessionStorage, which
// persists data only for the duration of the page session. Useful for
// temporary data storage and testing session-based features.
// ==================================================
// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//
//   // Navigate to a page
//   await page.goto('https://example.com');
//
//   // Method 1: Set sessionStorage items
//   await page.evaluate(() => {
//     sessionStorage.setItem('sessionId', 'abc123xyz');
//     sessionStorage.setItem('currentPage', 'home');
//     sessionStorage.setItem('tempData', 'will be gone on tab close');
//   });
//   console.log('SessionStorage items set');
//
//   // Method 2: Get a specific sessionStorage item
//   const sessionId = await page.evaluate(() => {
//     return sessionStorage.getItem('sessionId');
//   });
//   console.log('Session ID:', sessionId);
//
//   // Method 3: Get all sessionStorage items
//   const allSessionData = await page.evaluate(() => {
//     const items = {};
//     for (let i = 0; i < sessionStorage.length; i++) {
//       const key = sessionStorage.key(i);
//       items[key] = sessionStorage.getItem(key);
//     }
//     return items;
//   });
//   console.log('All sessionStorage items:', allSessionData);
//
//   // Method 4: Store and retrieve JSON data
//   await page.evaluate(() => {
//     const cartData = {
//       items: [
//         { id: 1, name: 'Product A', qty: 2 },
//         { id: 2, name: 'Product B', qty: 1 }
//       ],
//       total: 99.99
//     };
//     sessionStorage.setItem('cart', JSON.stringify(cartData));
//   });
//
//   const cart = await page.evaluate(() => {
//     const cartJson = sessionStorage.getItem('cart');
//     return cartJson ? JSON.parse(cartJson) : null;
//   });
//   console.log('Cart data:', cart);
//
//   // Method 5: Update existing item
//   await page.evaluate(() => {
//     sessionStorage.setItem('currentPage', 'checkout');
//   });
//   console.log('Current page updated');
//
//   // Method 6: Remove specific item
//   await page.evaluate(() => {
//     sessionStorage.removeItem('tempData');
//   });
//   console.log('Temp data removed');
//
//   // Method 7: Get sessionStorage length
//   const itemCount = await page.evaluate(() => {
//     return sessionStorage.length;
//   });
//   console.log('Number of items in sessionStorage:', itemCount);
//
//   // Method 8: Clear all sessionStorage
//   await page.evaluate(() => {
//     sessionStorage.clear();
//   });
//   console.log('All sessionStorage cleared');
//
//   // Method 9: Test sessionStorage persistence on reload
//   await page.evaluate(() => {
//     sessionStorage.setItem('beforeReload', 'test data');
//   });
//   
//   await page.reload();
//   
//   const afterReload = await page.evaluate(() => {
//     return sessionStorage.getItem('beforeReload');
//   });
//   console.log('Data after reload:', afterReload); // Should still exist
//
//   // Method 10: Compare with localStorage
//   await page.evaluate(() => {
//     // This persists beyond the session
//     localStorage.setItem('persistent', 'stays after tab close');
//     // This is cleared when tab closes
//     sessionStorage.setItem('temporary', 'gone after tab close');
//   });
//
//   await browser.close();
// })();

// --------------------------------------------------

// ==================================================
// 51. Emulate Dark Mode
// Description: Shows how to emulate media features like dark mode
// (prefers-color-scheme). Essential for testing responsive designs
// that adapt to user's system preferences.
// ==================================================
// (async () => {
//   const browser = await puppeteer.launch({ headless: false });
//   const page = await browser.newPage();
//
//   // Create a test page with dark mode styles
//   await page.goto('data:text/html,<style>body { background: white; color: black; } @media (prefers-color-scheme: dark) { body { background: black; color: white; } }</style><h1>Dark Mode Test</h1><p>This page responds to dark mode preference.</p>');
//
//   // Method 1: Check current color scheme preference
//   const currentScheme = await page.evaluate(() => {
//     return window.matchMedia('(prefers-color-scheme: dark)').matches;
//   });
//   console.log('Current dark mode:', currentScheme);
//
//   // Method 2: Enable dark mode
//   await page.emulateMediaFeatures([
//     { name: 'prefers-color-scheme', value: 'dark' }
//   ]);
//   console.log('Dark mode enabled');
//
//   // Verify dark mode is active
//   const isDarkMode = await page.evaluate(() => {
//     return window.matchMedia('(prefers-color-scheme: dark)').matches;
//   });
//   console.log('Dark mode active:', isDarkMode);
//
//   // Method 3: Switch to light mode
//   await page.emulateMediaFeatures([
//     { name: 'prefers-color-scheme', value: 'light' }
//   ]);
//   console.log('Switched to light mode');
//
//   // Method 4: Emulate multiple media features
//   await page.emulateMediaFeatures([
//     { name: 'prefers-color-scheme', value: 'dark' },
//     { name: 'prefers-reduced-motion', value: 'reduce' }
//   ]);
//   console.log('Dark mode and reduced motion enabled');
//
//   // Method 5: Test with real website
//   await page.goto('https://example.com');
//   
//   // Get computed styles in dark mode
//   const darkStyles = await page.evaluate(() => {
//     const body = document.body;
//     const styles = window.getComputedStyle(body);
//     return {
//       backgroundColor: styles.backgroundColor,
//       color: styles.color
//     };
//   });
//   console.log('Dark mode styles:', darkStyles);
//
//   // Method 6: Reset to no preference
//   await page.emulateMediaFeatures([
//     { name: 'prefers-color-scheme', value: 'no-preference' }
//   ]);
//   console.log('Reset to no preference');
//
//   // Method 7: Listen for media query changes
//   await page.evaluateOnNewDocument(() => {
//     window.addEventListener('DOMContentLoaded', () => {
//       const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
//       darkModeQuery.addEventListener('change', (e) => {
//         console.log('Dark mode changed:', e.matches);
//       });
//     });
//   });
//
//   // Method 8: Screenshot in different modes
//   await page.emulateMediaFeatures([
//     { name: 'prefers-color-scheme', value: 'light' }
//   ]);
//   await page.screenshot({ path: 'light-mode.png' });
//
//   await page.emulateMediaFeatures([
//     { name: 'prefers-color-scheme', value: 'dark' }
//   ]);
//   await page.screenshot({ path: 'dark-mode.png' });
//   console.log('Screenshots saved for both modes');
//
//   await browser.close();
// })();

// --------------------------------------------------

// ==================================================
// 52. Emulate Mobile Device
// Description: Shows how to emulate different mobile devices for
// responsive testing. Includes viewport, user agent, and touch
// capabilities to accurately simulate mobile browsing.
// ==================================================
// (async () => {
//   const browser = await puppeteer.launch({ headless: false });
//   const page = await browser.newPage();
//
//   // Method 1: Emulate iPhone 12
//   const iPhone12 = puppeteer.devices['iPhone 12'];
//   await page.emulate(iPhone12);
//   console.log('Emulating iPhone 12');
//
//   await page.goto('https://example.com');
//   await page.screenshot({ path: 'iphone12.png' });
//
//   // Method 2: Emulate iPad
//   const iPad = puppeteer.devices['iPad'];
//   await page.emulate(iPad);
//   console.log('Emulating iPad');
//
//   await page.reload();
//   await page.screenshot({ path: 'ipad.png' });
//
//   // Method 3: List all available devices
//   const deviceNames = Object.keys(puppeteer.devices);
//   console.log('Available devices:', deviceNames.slice(0, 10), '...');
//
//   // Method 4: Emulate Samsung Galaxy S21
//   const galaxyS21 = puppeteer.devices['Galaxy S21'];
//   await page.emulate(galaxyS21);
//   console.log('Emulating Galaxy S21');
//
//   // Method 5: Custom device emulation
//   await page.setViewport({
//     width: 375,
//     height: 812,
//     deviceScaleFactor: 3,
//     isMobile: true,
//     hasTouch: true,
//     isLandscape: false
//   });
//   await page.setUserAgent(
//     'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15'
//   );
//   console.log('Custom mobile device set');
//
//   // Method 6: Test touch events
//   await page.goto('data:text/html,<button id="btn" style="width:200px;height:100px;">Touch Me</button><div id="result"></div><script>document.getElementById("btn").addEventListener("touchstart", () => { document.getElementById("result").textContent = "Touched!"; });</script>');
//
//   // Simulate touch
//   await page.tap('#btn');
//   const touchResult = await page.$eval('#result', el => el.textContent);
//   console.log('Touch result:', touchResult);
//
//   // Method 7: Emulate in landscape mode
//   const iPhoneLandscape = puppeteer.devices['iPhone 12 landscape'];
//   await page.emulate(iPhoneLandscape);
//   console.log('Emulating iPhone 12 in landscape');
//
//   // Method 8: Get current viewport info
//   const viewport = await page.viewport();
//   console.log('Current viewport:', viewport);
//
//   // Method 9: Test responsive breakpoints
//   const breakpoints = [320, 768, 1024, 1440];
//   for (const width of breakpoints) {
//     await page.setViewport({ width, height: 800 });
//     console.log(`Testing breakpoint: ${width}px`);
//     // Could take screenshots or test layout at each breakpoint
//   }
//
//   // Method 10: Reset to desktop
//   await page.setViewport({
//     width: 1920,
//     height: 1080,
//     deviceScaleFactor: 1,
//     isMobile: false,
//     hasTouch: false
//   });
//   await page.setUserAgent(
//     'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
//   );
//   console.log('Reset to desktop view');
//
//   await browser.close();
// })();

// --------------------------------------------------

// ==================================================
// 54. Emulate Network Speed
// Description: Shows how to simulate different network conditions like
// 3G, 4G, or offline mode. Essential for testing application behavior
// under various network speeds and connection quality.
// ==================================================
// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//
//   // Import predefined network conditions
//   const { PredefinedNetworkConditions } = puppeteer;
//
//   // Method 1: Emulate Slow 3G
//   await page.emulateNetworkConditions(PredefinedNetworkConditions['Slow 3G']);
//   console.log('Network set to Slow 3G');
//
//   const start3G = Date.now();
//   await page.goto('https://example.com');
//   console.log('Slow 3G load time:', Date.now() - start3G, 'ms');
//
//   // Method 2: Emulate Fast 3G
//   await page.emulateNetworkConditions(PredefinedNetworkConditions['Fast 3G']);
//   console.log('Network set to Fast 3G');
//
//   await page.reload();
//
//   // Method 3: List all predefined conditions
//   console.log('Available network conditions:');
//   for (const condition in PredefinedNetworkConditions) {
//     const settings = PredefinedNetworkConditions[condition];
//     console.log(`- ${condition}:`, {
//       download: settings.download / 1024 + ' KB/s',
//       upload: settings.upload / 1024 + ' KB/s',
//       latency: settings.latency + ' ms'
//     });
//   }
//
//   // Method 4: Custom network conditions
//   await page.emulateNetworkConditions({
//     offline: false,
//     downloadThroughput: 50 * 1024, // 50 KB/s
//     uploadThroughput: 20 * 1024,   // 20 KB/s
//     latency: 500 // 500ms latency
//   });
//   console.log('Custom slow network set');
//
//   // Method 5: Simulate offline mode
//   await page.emulateNetworkConditions({
//     offline: true,
//     downloadThroughput: 0,
//     uploadThroughput: 0,
//     latency: 0
//   });
//   console.log('Network set to offline');
//
//   try {
//     await page.reload({ timeout: 5000 });
//   } catch (error) {
//     console.log('Page failed to load offline (expected)');
//   }
//
//   // Method 6: Restore normal conditions
//   await page.emulateNetworkConditions({
//     offline: false,
//     downloadThroughput: -1, // No throttling
//     uploadThroughput: -1,   // No throttling
//     latency: 0
//   });
//   console.log('Network throttling disabled');
//
//   // Method 7: Test with specific bandwidth
//   const bandwidths = [
//     { name: 'Very Slow', download: 10 * 1024, upload: 5 * 1024 },
//     { name: 'DSL', download: 200 * 1024, upload: 50 * 1024 },
//     { name: 'Cable', download: 5000 * 1024, upload: 1000 * 1024 }
//   ];
//
//   for (const config of bandwidths) {
//     await page.emulateNetworkConditions({
//       offline: false,
//       downloadThroughput: config.download,
//       uploadThroughput: config.upload,
//       latency: 20
//     });
//     console.log(`Testing ${config.name} speed`);
//   }
//
//   // Method 8: Measure download time for resource
//   await page.emulateNetworkConditions(PredefinedNetworkConditions['Slow 3G']);
//   
//   const downloadStart = Date.now();
//   await page.goto('https://example.com/large-image.jpg', { waitUntil: 'networkidle0' });
//   console.log('Resource download time:', Date.now() - downloadStart, 'ms');
//
//   await browser.close();
// })();

// --------------------------------------------------

// ==================================================
// 22. Mouse Hover
// Description: Shows how to hover over elements with the mouse. Essential
// for testing dropdown menus, tooltips, and hover-triggered interactions
// that are common in modern web applications.
// ==================================================
// (async () => {
//   const browser = await puppeteer.launch({ headless: false });
//   const page = await browser.newPage();
//
//   // Create test page with hover effects
//   await page.goto('data:text/html,<style>.menu { display: inline-block; padding: 10px; background: #ccc; } .dropdown { display: none; position: absolute; background: #fff; border: 1px solid #ccc; padding: 10px; } .menu:hover .dropdown { display: block; } .tooltip { position: relative; } .tooltip:hover::after { content: "This is a tooltip!"; position: absolute; top: 100%; left: 0; background: black; color: white; padding: 5px; }</style><div class="menu">Hover for Menu<div class="dropdown">Option 1<br>Option 2<br>Option 3</div></div><br><br><button class="tooltip">Hover for Tooltip</button><br><br><div id="hover-target" style="width: 200px; height: 100px; background: lightblue;">Hover to change color</div><script>document.getElementById("hover-target").addEventListener("mouseenter", function() { this.style.background = "lightgreen"; this.textContent = "Hovered!"; }); document.getElementById("hover-target").addEventListener("mouseleave", function() { this.style.background = "lightblue"; this.textContent = "Hover to change color"; });</script>');
//
//   // Method 1: Basic hover
//   await page.hover('.menu');
//   console.log('Hovered over menu');
//   await page.waitForTimeout(1000); // Wait to see effect
//
//   // Method 2: Hover and verify dropdown visible
//   const dropdownVisible = await page.$eval('.dropdown', el => {
//     const styles = window.getComputedStyle(el);
//     return styles.display !== 'none';
//   });
//   console.log('Dropdown visible:', dropdownVisible);
//
//   // Method 3: Move mouse to specific coordinates
//   await page.mouse.move(100, 100);
//   await page.waitForTimeout(500);
//
//   // Method 4: Hover over dynamic element
//   const hoverTarget = await page.$('#hover-target');
//   const box = await hoverTarget.boundingBox();
//   await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
//   
//   const hoverText = await page.$eval('#hover-target', el => el.textContent);
//   console.log('Hover target text:', hoverText);
//
//   // Method 5: Hover with steps (smooth movement)
//   await page.mouse.move(0, 0); // Start position
//   await page.mouse.move(200, 200, { steps: 10 }); // Smooth movement
//   console.log('Mouse moved smoothly');
//
//   // Method 6: Hover and wait for element
//   await page.hover('.tooltip');
//   // Wait for tooltip to appear (CSS :after content)
//   await page.waitForTimeout(500);
//   console.log('Tooltip should be visible');
//
//   // Method 7: Chain hover actions
//   const elements = await page.$$('.menu, .tooltip, #hover-target');
//   for (const element of elements) {
//     await element.hover();
//     await page.waitForTimeout(500);
//   }
//   console.log('Hovered over all elements');
//
//   // Method 8: Hover and click dropdown item
//   await page.hover('.menu');
//   await page.waitForSelector('.dropdown', { visible: true });
//   await page.click('.dropdown');
//   console.log('Clicked dropdown item');
//
//   // Method 9: Get element state on hover
//   await page.hover('#hover-target');
//   const hoverStyles = await page.$eval('#hover-target', el => {
//     const styles = window.getComputedStyle(el);
//     return {
//       background: styles.backgroundColor,
//       cursor: styles.cursor
//     };
//   });
//   console.log('Hover styles:', hoverStyles);
//
//   // Method 10: Remove hover (move away)
//   await page.mouse.move(0, 0);
//   await page.waitForTimeout(500);
//   const afterHover = await page.$eval('#hover-target', el => el.textContent);
//   console.log('After removing hover:', afterHover);
//
//   await browser.close();
// })();

// --------------------------------------------------

// ==================================================
// 53. Set User Agent
// Description: Shows how to change the browser's user agent string.
// Essential for testing mobile/desktop detection, avoiding bot detection,
// and simulating different browsers or devices.
// ==================================================
// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//
//   // Method 1: Set a custom user agent
//   await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
//   await page.goto('https://httpbin.org/user-agent');
//   const userAgent = await page.$eval('pre', el => el.textContent);
//   console.log('User Agent:', userAgent);
//
//   // Method 2: Set mobile user agent
//   await page.setUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1');
//   await page.reload();
//   const mobileUA = await page.$eval('pre', el => el.textContent);
//   console.log('Mobile User Agent:', mobileUA);
//
//   // Method 3: Set bot user agent
//   await page.setUserAgent('MyCustomBot/1.0 (+https://mybot.com)');
//   await page.reload();
//   const botUA = await page.$eval('pre', el => el.textContent);
//   console.log('Bot User Agent:', botUA);
//
//   // Method 4: Get current user agent
//   const currentUA = await page.evaluate(() => navigator.userAgent);
//   console.log('Current UA in browser:', currentUA);
//
//   // Method 5: Set old browser user agent
//   await page.setUserAgent('Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)');
//   await page.goto('https://example.com');
//   // Some sites may show compatibility warnings
//
//   // Method 6: Set tablet user agent
//   await page.setUserAgent('Mozilla/5.0 (iPad; CPU OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1');
//   const isTablet = await page.evaluate(() => {
//     return /iPad|Android/i.test(navigator.userAgent) && !/Mobile/i.test(navigator.userAgent);
//   });
//   console.log('Detected as tablet:', isTablet);
//
//   // Method 7: Combine with viewport for complete mobile emulation
//   await page.setUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1');
//   await page.setViewport({ width: 375, height: 667, isMobile: true });
//   await page.goto('https://example.com');
//   console.log('Mobile emulation complete');
//
//   // Method 8: Reset to default Puppeteer user agent
//   const defaultUA = await browser.userAgent();
//   await page.setUserAgent(defaultUA);
//   console.log('Reset to default UA:', defaultUA);
//
//   await browser.close();
// })();

// --------------------------------------------------

// ==================================================
// 58. Set Extra HTTP Headers
// Description: Shows how to set custom HTTP headers for all requests.
// Essential for authentication tokens, API keys, custom headers, and
// testing server behavior with different request headers.
// ==================================================
// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//
//   // Method 1: Set basic custom headers
//   await page.setExtraHTTPHeaders({
//     'X-Custom-Header': 'MyValue',
//     'Authorization': 'Bearer my-token-123'
//   });
//   console.log('Custom headers set');
//
//   // Navigate and headers will be sent
//   await page.goto('https://httpbin.org/headers');
//   const headers = await page.$eval('pre', el => JSON.parse(el.textContent));
//   console.log('Request headers:', headers.headers);
//
//   // Method 2: Set API key header
//   await page.setExtraHTTPHeaders({
//     'X-API-Key': 'your-api-key-here',
//     'X-Client-Version': '1.0.0'
//   });
//
//   // Method 3: Set referer and origin
//   await page.setExtraHTTPHeaders({
//     'Referer': 'https://google.com',
//     'Origin': 'https://myapp.com'
//   });
//   await page.goto('https://httpbin.org/headers');
//
//   // Method 4: Set accept headers
//   await page.setExtraHTTPHeaders({
//     'Accept': 'application/json',
//     'Accept-Language': 'en-US,en;q=0.9',
//     'Accept-Encoding': 'gzip, deflate, br'
//   });
//
//   // Method 5: Set cache control headers
//   await page.setExtraHTTPHeaders({
//     'Cache-Control': 'no-cache',
//     'Pragma': 'no-cache'
//   });
//
//   // Method 6: Combine with user agent
//   await page.setUserAgent('MyBot/1.0');
//   await page.setExtraHTTPHeaders({
//     'X-Bot-Name': 'MyBot',
//     'X-Bot-Version': '1.0'
//   });
//
//   // Method 7: Set CORS headers
//   await page.setExtraHTTPHeaders({
//     'Access-Control-Allow-Origin': '*',
//     'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
//   });
//
//   // Method 8: Monitor headers being sent
//   page.on('request', request => {
//     console.log('Request headers:', request.headers());
//   });
//
//   await page.goto('https://example.com');
//
//   // Method 9: Clear/reset headers
//   await page.setExtraHTTPHeaders({});
//   console.log('Headers cleared');
//
//   // Method 10: Set headers for specific domain only
//   await page.evaluateOnNewDocument(() => {
//     const originalFetch = window.fetch;
//     window.fetch = function(...args) {
//       if (args[0].includes('api.example.com')) {
//         args[1] = args[1] || {};
//         args[1].headers = {
//           ...args[1].headers,
//           'X-Special-Header': 'only-for-api'
//         };
//       }
//       return originalFetch.apply(this, args);
//     };
//   });
//
//   await browser.close();
// })();

// --------------------------------------------------

// ==================================================
// 59. Block Images/CSS/Fonts
// Description: Shows how to block specific resource types to speed up
// page loads and reduce bandwidth. Essential for web scraping, testing
// text-only content, and improving performance.
// ==================================================
// (async () => {
//   const browser = await puppeteer.launch({ headless: false });
//   const page = await browser.newPage();
//
//   // Method 1: Block images only
//   await page.setRequestInterception(true);
//   page.on('request', request => {
//     if (request.resourceType() === 'image') {
//       request.abort();
//     } else {
//       request.continue();
//     }
//   });
//
//   await page.goto('https://example.com');
//   console.log('Page loaded without images');
//
//   // Method 2: Block multiple resource types
//   await page.setRequestInterception(true);
//   
//   const blockedTypes = ['image', 'stylesheet', 'font', 'media'];
//   page.on('request', request => {
//     if (blockedTypes.includes(request.resourceType())) {
//       request.abort();
//     } else {
//       request.continue();
//     }
//   });
//
//   await page.goto('https://example.com');
//   console.log('Page loaded with minimal resources');
//
//   // Method 3: Block specific domains
//   page.on('request', request => {
//     const url = request.url();
//     const blockedDomains = ['googletagmanager.com', 'google-analytics.com', 'facebook.com'];
//     
//     if (blockedDomains.some(domain => url.includes(domain))) {
//       request.abort();
//     } else {
//       request.continue();
//     }
//   });
//
//   // Method 4: Block by file extension
//   page.on('request', request => {
//     const url = request.url();
//     const blockedExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.ico'];
//     
//     if (blockedExtensions.some(ext => url.toLowerCase().endsWith(ext))) {
//       request.abort();
//     } else {
//       request.continue();
//     }
//   });
//
//   // Method 5: Selective blocking with logging
//   const blockedResources = [];
//   page.on('request', request => {
//     const resourceType = request.resourceType();
//     if (['image', 'stylesheet', 'font'].includes(resourceType)) {
//       blockedResources.push({
//         url: request.url(),
//         type: resourceType
//       });
//       request.abort();
//     } else {
//       request.continue();
//     }
//   });
//
//   await page.goto('https://example.com');
//   console.log('Blocked resources:', blockedResources.length);
//
//   // Method 6: Block everything except document and script
//   page.on('request', request => {
//     const allowedTypes = ['document', 'script', 'xhr', 'fetch'];
//     if (!allowedTypes.includes(request.resourceType())) {
//       request.abort();
//     } else {
//       request.continue();
//     }
//   });
//
//   // Method 7: Measure performance improvement
//   const startTime = Date.now();
//   await page.goto('https://example.com', { waitUntil: 'domcontentloaded' });
//   const loadTime = Date.now() - startTime;
//   console.log('Page load time with blocking:', loadTime + 'ms');
//
//   // Method 8: Conditional blocking based on size
//   page.on('request', request => {
//     // Note: Size is not available at request time, but we can block large image formats
//     const url = request.url();
//     if (url.includes('highres') || url.includes('4k') || url.includes('large')) {
//       request.abort();
//     } else {
//       request.continue();
//     }
//   });
//
//   await browser.close();
// })();

// --------------------------------------------------

// ==================================================
// 48. Monitor Network Requests
// Description: Shows how to monitor and log all network requests made by
// a page. Essential for debugging API calls, tracking resources, and
// understanding page behavior.
// ==================================================
// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//
//   const requests = [];
//   const responses = [];
//
//   // Method 1: Monitor all requests
//   page.on('request', request => {
//     console.log('Request:', request.method(), request.url());
//     requests.push({
//       url: request.url(),
//       method: request.method(),
//       headers: request.headers(),
//       postData: request.postData(),
//       resourceType: request.resourceType()
//     });
//   });
//
//   // Method 2: Monitor all responses
//   page.on('response', response => {
//     console.log('Response:', response.status(), response.url());
//     responses.push({
//       url: response.url(),
//       status: response.status(),
//       statusText: response.statusText(),
//       headers: response.headers()
//     });
//   });
//
//   // Method 3: Monitor failed requests
//   page.on('requestfailed', request => {
//     console.log('Failed:', request.url(), request.failure().errorText);
//   });
//
//   // Method 4: Monitor specific request types
//   page.on('request', request => {
//     if (request.resourceType() === 'xhr' || request.resourceType() === 'fetch') {
//       console.log('API Call:', request.url());
//     }
//   });
//
//   // Navigate to page
//   await page.goto('https://example.com');
//
//   // Method 5: Wait for specific request
//   const waitForRequest = page.waitForRequest(request => 
//     request.url().includes('api/data')
//   );
//
//   // Trigger action that makes the request
//   await page.click('#load-data');
//   const apiRequest = await waitForRequest;
//   console.log('API request intercepted:', apiRequest.url());
//
//   // Method 6: Wait for specific response
//   const waitForResponse = page.waitForResponse(response =>
//     response.url().includes('api/data') && response.status() === 200
//   );
//
//   await page.click('#load-more');
//   const apiResponse = await waitForResponse;
//   const data = await apiResponse.json();
//   console.log('API response data:', data);
//
//   // Method 7: Count requests by type
//   const requestsByType = {};
//   page.on('request', request => {
//     const type = request.resourceType();
//     requestsByType[type] = (requestsByType[type] || 0) + 1;
//   });
//
//   await page.goto('https://example.com');
//   console.log('Requests by type:', requestsByType);
//
//   // Method 8: Measure request timing
//   page.on('request', request => {
//     request.timing = Date.now();
//   });
//
//   page.on('response', response => {
//     const request = response.request();
//     if (request.timing) {
//       const duration = Date.now() - request.timing;
//       console.log(`Request to ${request.url()} took ${duration}ms`);
//     }
//   });
//
//   // Method 9: Extract POST data
//   page.on('request', request => {
//     if (request.method() === 'POST') {
//       console.log('POST request to:', request.url());
//       console.log('POST data:', request.postData());
//     }
//   });
//
//   // Method 10: Summary report
//   await page.goto('https://example.com');
//   await page.waitForTimeout(2000); // Wait for network activity to settle
//
//   console.log('Network Summary:');
//   console.log('Total requests:', requests.length);
//   console.log('Total responses:', responses.length);
//   console.log('Failed requests:', requests.filter(r => !responses.find(res => res.url === r.url)).length);
//
//   await browser.close();
// })();

// --------------------------------------------------

// ==================================================
// 50. Generate PDF from Page
// Description: Shows how to convert web pages to PDF documents with various
// options. Essential for creating reports, invoices, documentation, and
// archiving web content.
// ==================================================
// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//
//   await page.goto('https://example.com', { waitUntil: 'networkidle0' });
//
//   // Method 1: Basic PDF generation
//   await page.pdf({ path: 'basic.pdf' });
//   console.log('Basic PDF saved');
//
//   // Method 2: PDF with custom format
//   await page.pdf({
//     path: 'formatted.pdf',
//     format: 'A4',
//     printBackground: true,
//     margin: {
//       top: '20mm',
//       right: '20mm',
//       bottom: '20mm',
//       left: '20mm'
//     }
//   });
//   console.log('Formatted PDF saved');
//
//   // Method 3: PDF with header and footer
//   await page.pdf({
//     path: 'with-header-footer.pdf',
//     format: 'A4',
//     displayHeaderFooter: true,
//     headerTemplate: '<div style="font-size: 10px; text-align: center; width: 100%;">Page <span class="pageNumber"></span> of <span class="totalPages"></span></div>',
//     footerTemplate: '<div style="font-size: 10px; text-align: center; width: 100%;">© 2025 My Company</div>',
//     margin: { top: '30mm', bottom: '30mm' }
//   });
//
//   // Method 4: Letter size with landscape orientation
//   await page.pdf({
//     path: 'landscape.pdf',
//     format: 'Letter',
//     landscape: true
//   });
//
//   // Method 5: Custom dimensions
//   await page.pdf({
//     path: 'custom-size.pdf',
//     width: '8.5in',
//     height: '11in',
//     printBackground: true
//   });
//
//   // Method 6: Get PDF as buffer (no file)
//   const pdfBuffer = await page.pdf({
//     format: 'A4'
//   });
//   console.log('PDF buffer size:', pdfBuffer.length);
//   // Can now send buffer via email, API, etc.
//
//   // Method 7: PDF with page ranges
//   await page.pdf({
//     path: 'page-range.pdf',
//     format: 'A4',
//     pageRanges: '1-3' // Only first 3 pages
//   });
//
//   // Method 8: Hide elements before PDF
//   await page.addStyleTag({
//     content: '@media print { .no-print { display: none !important; } }'
//   });
//   await page.evaluate(() => {
//     // Add no-print class to elements to hide
//     const ads = document.querySelectorAll('.advertisement, .cookie-banner');
//     ads.forEach(el => el.classList.add('no-print'));
//   });
//   await page.pdf({
//     path: 'clean.pdf',
//     format: 'A4',
//     printBackground: true
//   });
//
//   // Method 9: Wait for fonts before PDF
//   await page.evaluateHandle('document.fonts.ready');
//   await page.pdf({
//     path: 'with-fonts.pdf',
//     format: 'A4'
//   });
//
//   // Method 10: Generate tagged PDF (accessible)
//   await page.pdf({
//     path: 'accessible.pdf',
//     format: 'A4',
//     tagged: true // Generates PDF/UA compliant PDF
//   });
//
//   await browser.close();
// })();

// --------------------------------------------------

// ==================================================
// 34. Full Page Screenshot
// Description: Shows various screenshot techniques including full page,
// viewport only, specific elements, and with different formats. Essential
// for visual testing, documentation, and debugging.
// ==================================================
// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto('https://example.com');
//
//   // Method 1: Basic screenshot (viewport only)
//   await page.screenshot({ path: 'viewport.png' });
//   console.log('Viewport screenshot saved');
//
//   // Method 2: Full page screenshot
//   await page.screenshot({
//     path: 'fullpage.png',
//     fullPage: true
//   });
//   console.log('Full page screenshot saved');
//
//   // Method 3: Screenshot with quality settings (JPEG)
//   await page.screenshot({
//     path: 'quality.jpg',
//     type: 'jpeg',
//     quality: 80 // 0-100, only for JPEG
//   });
//
//   // Method 4: Screenshot a specific element
//   const element = await page.$('h1');
//   await element.screenshot({ path: 'element.png' });
//   console.log('Element screenshot saved');
//
//   // Method 5: Screenshot with transparent background
//   await page.screenshot({
//     path: 'transparent.png',
//     omitBackground: true // Removes default white background
//   });
//
//   // Method 6: Screenshot with custom viewport
//   await page.setViewport({ width: 1920, height: 1080 });
//   await page.screenshot({
//     path: 'hd-viewport.png'
//   });
//
//   // Method 7: Screenshot with clip region
//   await page.screenshot({
//     path: 'clipped.png',
//     clip: {
//       x: 100,
//       y: 100,
//       width: 400,
//       height: 300
//     }
//   });
//
//   // Method 8: Screenshot as buffer
//   const screenshotBuffer = await page.screenshot({
//     encoding: 'binary',
//     fullPage: true
//   });
//   console.log('Screenshot buffer size:', screenshotBuffer.length);
//   // Can now process, upload, or send the buffer
//
//   // Method 9: Screenshot after scrolling
//   await page.evaluate(() => window.scrollTo(0, 500));
//   await page.waitForTimeout(500); // Wait for scroll animation
//   await page.screenshot({
//     path: 'scrolled.png'
//   });
//
//   // Method 10: Screenshot with device emulation
//   const iPhone = puppeteer.KnownDevices['iPhone 13'];
//   await page.emulate(iPhone);
//   await page.goto('https://example.com');
//   await page.screenshot({
//     path: 'mobile.png',
//     fullPage: true
//   });
//
//   // Method 11: Screenshot multiple elements
//   const elements = await page.$$('p');
//   for (let i = 0; i < Math.min(3, elements.length); i++) {
//     await elements[i].screenshot({ path: `paragraph-${i}.png` });
//   }
//
//   // Method 12: Screenshot with base64 encoding
//   const base64Screenshot = await page.screenshot({
//     encoding: 'base64',
//     type: 'jpeg',
//     quality: 90
//   });
//   console.log('Base64 screenshot:', base64Screenshot.substring(0, 50) + '...');
//
//   await browser.close();
// })();

// --------------------------------------------------

// ==================================================
// 55. Set Geolocation
// Description: Shows how to override browser geolocation for testing
// location-based features. Essential for testing maps, location services,
// and geo-restricted content.
// ==================================================
// (async () => {
//   const browser = await puppeteer.launch({ headless: false });
//   const page = await browser.newPage();
//
//   // Method 1: Set basic geolocation
//   await page.setGeolocation({
//     latitude: 40.7128,
//     longitude: -74.0060
//   });
//   console.log('Location set to New York City');
//
//   // Grant permission for geolocation
//   const context = browser.defaultBrowserContext();
//   await context.overridePermissions('https://example.com', ['geolocation']);
//
//   await page.goto('https://example.com');
//
//   // Method 2: Test geolocation API
//   const location = await page.evaluate(() => {
//     return new Promise((resolve, reject) => {
//       navigator.geolocation.getCurrentPosition(
//         position => resolve({
//           latitude: position.coords.latitude,
//           longitude: position.coords.longitude,
//           accuracy: position.coords.accuracy
//         }),
//         error => reject(error)
//       );
//     });
//   });
//   console.log('Retrieved location:', location);
//
//   // Method 3: Set location with accuracy
//   await page.setGeolocation({
//     latitude: 51.5074,
//     longitude: -0.1278,
//     accuracy: 100 // meters
//   });
//   console.log('Location set to London with 100m accuracy');
//
//   // Method 4: Common locations
//   const locations = {
//     'Tokyo': { latitude: 35.6762, longitude: 139.6503 },
//     'Paris': { latitude: 48.8566, longitude: 2.3522 },
//     'Sydney': { latitude: -33.8688, longitude: 151.2093 },
//     'San Francisco': { latitude: 37.7749, longitude: -122.4194 }
//   };
//
//   for (const [city, coords] of Object.entries(locations)) {
//     await page.setGeolocation(coords);
//     console.log(`Testing with ${city} location`);
//     // Test location-specific features
//   }
//
//   // Method 5: Watch position (continuous tracking)
//   await page.evaluateOnNewDocument(() => {
//     let watchId;
//     window.startWatchingPosition = () => {
//       watchId = navigator.geolocation.watchPosition(
//         position => {
//           window.lastPosition = {
//             latitude: position.coords.latitude,
//             longitude: position.coords.longitude,
//             timestamp: position.timestamp
//           };
//         }
//       );
//     };
//     window.stopWatchingPosition = () => {
//       if (watchId) navigator.geolocation.clearWatch(watchId);
//     };
//   });
//
//   await page.reload();
//   await page.evaluate(() => window.startWatchingPosition());
//
//   // Update location multiple times
//   await page.setGeolocation({ latitude: 40.7128, longitude: -74.0060 });
//   await page.waitForTimeout(1000);
//   await page.setGeolocation({ latitude: 40.7580, longitude: -73.9855 }); // Times Square
//
//   const lastPos = await page.evaluate(() => window.lastPosition);
//   console.log('Last tracked position:', lastPos);
//
//   // Method 6: Test with maps
//   await page.goto('https://maps.google.com');
//   await page.setGeolocation({ latitude: 37.4220, longitude: -122.0841 }); // Googleplex
//   // Maps should center on this location
//
//   // Method 7: Clear geolocation
//   await context.clearPermissionOverrides();
//   console.log('Geolocation permissions cleared');
//
//   await browser.close();
// })();

// --------------------------------------------------

// ==================================================
// 56. Set Timezone
// Description: Shows how to override browser timezone for testing
// time-sensitive features. Essential for testing scheduling, calendar
// features, and timezone-specific behavior.
// ==================================================
// (async () => {
//   const browser = await puppeteer.launch({
//     args: ['--tz=America/New_York'] // Set timezone via launch argument
//   });
//   const page = await browser.newPage();
//
//   // Method 1: Check current timezone
//   const timezone = await page.evaluate(() => {
//     return Intl.DateTimeFormat().resolvedOptions().timeZone;
//   });
//   console.log('Current timezone:', timezone);
//
//   // Method 2: Get local time in browser
//   const localTime = await page.evaluate(() => {
//     return new Date().toString();
//   });
//   console.log('Local time:', localTime);
//
//   // Method 3: Test different timezones
//   const timezones = [
//     'America/Los_Angeles',
//     'Europe/London',
//     'Asia/Tokyo',
//     'Australia/Sydney'
//   ];
//
//   for (const tz of timezones) {
//     const testBrowser = await puppeteer.launch({
//       args: [`--tz=${tz}`]
//     });
//     const testPage = await testBrowser.newPage();
//
//     const timeInfo = await testPage.evaluate(() => {
//       const now = new Date();
//       return {
//         timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
//         localTime: now.toString(),
//         utcOffset: now.getTimezoneOffset(),
//         hours: now.getHours()
//       };
//     });
//
//     console.log(`${tz}:`, timeInfo);
//     await testBrowser.close();
//   }
//
//   // Method 4: Test date formatting
//   await page.goto('data:text/html,<div id="date"></div><script>document.getElementById("date").textContent = new Date().toLocaleString();</script>');
//   
//   const displayedDate = await page.$eval('#date', el => el.textContent);
//   console.log('Displayed date:', displayedDate);
//
//   // Method 5: Test timezone-sensitive JavaScript
//   const tzTest = await page.evaluate(() => {
//     const date = new Date('2025-06-15T12:00:00Z'); // UTC time
//     return {
//       local: date.toString(),
//       iso: date.toISOString(),
//       locale: date.toLocaleString(),
//       offset: date.getTimezoneOffset()
//     };
//   });
//   console.log('Timezone test:', tzTest);
//
//   // Method 6: Override Date object (alternative approach)
//   await page.evaluateOnNewDocument(() => {
//     const originalDate = Date;
//     const timezoneOffset = 5 * 60; // EST offset in minutes
//
//     window.Date = new Proxy(originalDate, {
//       construct(target, args) {
//         if (args.length === 0) {
//           // Override current time
//           const now = new originalDate();
//           const adjusted = new originalDate(now.getTime() + timezoneOffset * 60000);
//           return adjusted;
//         }
//         return new target(...args);
//       }
//     });
//   });
//
//   await page.reload();
//   const overriddenTime = await page.evaluate(() => new Date().toString());
//   console.log('Overridden time:', overriddenTime);
//
//   // Method 7: Test scheduling features
//   const scheduleTest = await page.evaluate(() => {
//     const now = new Date();
//     const tomorrow = new Date(now);
//     tomorrow.setDate(tomorrow.getDate() + 1);
//     tomorrow.setHours(9, 0, 0, 0); // 9 AM tomorrow
//
//     return {
//       now: now.toString(),
//       scheduledTime: tomorrow.toString(),
//       hoursUntil: (tomorrow - now) / (1000 * 60 * 60)
//     };
//   });
//   console.log('Schedule test:', scheduleTest);
//
//   await browser.close();
// })();

// --------------------------------------------------

// ==================================================
// 57. Set Language/Locale
// Description: Shows how to change browser language and locale settings.
// Essential for testing internationalization, translations, and
// locale-specific formatting.
// ==================================================
// (async () => {
//   // Method 1: Set language via launch args
//   const browser = await puppeteer.launch({
//     args: ['--lang=es-ES'] // Spanish (Spain)
//   });
//   const page = await browser.newPage();
//
//   // Method 2: Set locale via page context
//   await page.setExtraHTTPHeaders({
//     'Accept-Language': 'fr-FR,fr;q=0.9'
//   });
//
//   // Method 3: Check current language
//   const language = await page.evaluate(() => {
//     return {
//       navigatorLanguage: navigator.language,
//       navigatorLanguages: navigator.languages,
//       documentLang: document.documentElement.lang
//     };
//   });
//   console.log('Language settings:', language);
//
//   // Method 4: Test different locales
//   const locales = ['en-US', 'de-DE', 'ja-JP', 'zh-CN', 'ar-SA'];
//   
//   for (const locale of locales) {
//     const testBrowser = await puppeteer.launch({
//       args: [`--lang=${locale}`]
//     });
//     const testPage = await testBrowser.newPage();
//
//     const localeInfo = await testPage.evaluate(() => {
//       const num = 1234567.89;
//       const date = new Date('2025-03-15T10:30:00');
//       
//       return {
//         language: navigator.language,
//         numberFormat: num.toLocaleString(),
//         currency: num.toLocaleString(undefined, { style: 'currency', currency: 'USD' }),
//         dateFormat: date.toLocaleDateString(),
//         timeFormat: date.toLocaleTimeString()
//       };
//     });
//
//     console.log(`${locale}:`, localeInfo);
//     await testBrowser.close();
//   }
//
//   // Method 5: Override navigator.language
//   await page.evaluateOnNewDocument(() => {
//     Object.defineProperty(navigator, 'language', {
//       get: () => 'pt-BR'
//     });
//     Object.defineProperty(navigator, 'languages', {
//       get: () => ['pt-BR', 'pt', 'en']
//     });
//   });
//
//   await page.goto('https://example.com');
//   const overriddenLang = await page.evaluate(() => navigator.language);
//   console.log('Overridden language:', overriddenLang);
//
//   // Method 6: Test RTL languages
//   const rtlBrowser = await puppeteer.launch({
//     args: ['--lang=ar-SA'] // Arabic
//   });
//   const rtlPage = await rtlBrowser.newPage();
//   
//   await rtlPage.goto('https://example.com');
//   const rtlCheck = await rtlPage.evaluate(() => {
//     return {
//       htmlDir: document.documentElement.dir,
//       computedDir: window.getComputedStyle(document.body).direction
//     };
//   });
//   console.log('RTL check:', rtlCheck);
//   await rtlBrowser.close();
//
//   // Method 7: Test locale-specific content
//   await page.goto('data:text/html,<div id="content"></div><script>document.getElementById("content").textContent = new Date().toLocaleDateString() + " - " + (12345.67).toLocaleString();</script>');
//   
//   const content = await page.$eval('#content', el => el.textContent);
//   console.log('Locale-specific content:', content);
//
//   // Method 8: Multiple language preferences
//   await page.setExtraHTTPHeaders({
//     'Accept-Language': 'en-GB,en-US;q=0.9,en;q=0.8,fr;q=0.7'
//   });
//   
//   // This will be sent with all requests
//   await page.goto('https://httpbin.org/headers');
//   const headers = await page.$eval('pre', el => JSON.parse(el.textContent));
//   console.log('Accept-Language header:', headers.headers['Accept-Language']);
//
//   await browser.close();
// })();

// --------------------------------------------------

// ==================================================
// 60. Handle Basic Authentication
// Description: Shows how to handle HTTP basic authentication prompts.
// Essential for accessing protected resources, APIs, and admin panels
// that use basic auth.
// ==================================================
// (async () => {
//   const browser = await puppeteer.launch({ headless: false });
//   const page = await browser.newPage();
//
//   // Method 1: Set authentication credentials
//   await page.authenticate({
//     username: 'admin',
//     password: 'admin'
//   });
//
//   // Now navigate to protected page
//   await page.goto('https://the-internet.herokuapp.com/basic_auth');
//   
//   // Check if authentication was successful
//   const pageContent = await page.$eval('body', el => el.textContent);
//   console.log('Auth success:', pageContent.includes('Congratulations'));
//
//   // Method 2: Authentication in URL (alternative)
//   await page.goto('https://admin:admin@the-internet.herokuapp.com/basic_auth');
//
//   // Method 3: Handle auth for specific domains
//   page.on('request', request => {
//     const url = new URL(request.url());
//     if (url.hostname === 'api.example.com') {
//       // Set auth for API requests
//       request.headers()['Authorization'] = 'Basic ' + Buffer.from('user:pass').toString('base64');
//     }
//   });
//
//   // Method 4: Clear authentication
//   await page.authenticate(null);
//   console.log('Authentication cleared');
//
//   // Method 5: Different auth for different pages
//   const contexts = {
//     'admin.example.com': { username: 'admin', password: 'adminpass' },
//     'user.example.com': { username: 'user', password: 'userpass' },
//     'api.example.com': { username: 'apikey', password: 'secretkey' }
//   };
//
//   // Set auth based on domain
//   page.on('framenavigated', async frame => {
//     const url = new URL(frame.url());
//     const auth = contexts[url.hostname];
//     if (auth) {
//       await page.authenticate(auth);
//     }
//   });
//
//   // Method 6: Test failed authentication
//   await page.authenticate({
//     username: 'wrong',
//     password: 'credentials'
//   });
//
//   try {
//     await page.goto('https://the-internet.herokuapp.com/basic_auth');
//     const unauthorized = await page.evaluate(() => 
//       document.body.textContent.includes('Not authorized')
//     );
//     console.log('Auth failed as expected:', unauthorized);
//   } catch (error) {
//     console.log('Auth error:', error.message);
//   }
//
//   // Method 7: Auth with bearer token
//   await page.setExtraHTTPHeaders({
//     'Authorization': 'Bearer your-jwt-token-here'
//   });
//
//   // Method 8: Handle auth dialog programmatically
//   page.on('dialog', async dialog => {
//     console.log('Dialog type:', dialog.type());
//     if (dialog.type() === 'prompt') {
//       // Could be username/password prompt
//       await dialog.accept('username');
//     }
//   });
//
//   // Method 9: Multiple auth methods
//   const authMethods = {
//     basic: () => page.authenticate({ username: 'user', password: 'pass' }),
//     bearer: () => page.setExtraHTTPHeaders({ 'Authorization': 'Bearer token' }),
//     custom: () => page.setExtraHTTPHeaders({ 'X-API-Key': 'api-key' })
//   };
//
//   // Use appropriate auth method
//   await authMethods.basic();
//
//   await browser.close();
// })();

// --------------------------------------------------

// ==================================================
// 49. Wait for Network Idle
// Description: Shows different techniques for waiting until network
// activity settles. Essential for single-page applications, AJAX-heavy
// sites, and ensuring all resources are loaded.
// ==================================================
// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//
//   // Method 1: Wait for network idle during navigation
//   await page.goto('https://example.com', {
//     waitUntil: 'networkidle0' // Wait for 0 network connections for 500ms
//   });
//   console.log('Page loaded with networkidle0');
//
//   // Method 2: Wait for networkidle2
//   await page.goto('https://example.com', {
//     waitUntil: 'networkidle2' // Wait for max 2 network connections for 500ms
//   });
//   console.log('Page loaded with networkidle2');
//
//   // Method 3: Wait for multiple conditions
//   await page.goto('https://example.com', {
//     waitUntil: ['load', 'domcontentloaded', 'networkidle0']
//   });
//   console.log('Page loaded with all conditions met');
//
//   // Method 4: Custom network idle wait
//   async function waitForNetworkIdle(page, timeout = 30000, maxInflightRequests = 0) {
//     let inflight = 0;
//     let fulfill;
//     const promise = new Promise(x => fulfill = x);
//     let timeoutId = setTimeout(fulfill, timeout);
//
//     const onRequestStarted = () => {
//       ++inflight;
//       clearTimeout(timeoutId);
//     };
//
//     const onRequestFinished = () => {
//       if (--inflight === maxInflightRequests) {
//         timeoutId = setTimeout(fulfill, 500);
//       }
//     };
//
//     page.on('request', onRequestStarted);
//     page.on('requestfinished', onRequestFinished);
//     page.on('requestfailed', onRequestFinished);
//
//     await promise;
//
//     page.off('request', onRequestStarted);
//     page.off('requestfinished', onRequestFinished);
//     page.off('requestfailed', onRequestFinished);
//   }
//
//   // Use custom wait
//   await page.click('#load-more');
//   await waitForNetworkIdle(page);
//   console.log('Network is idle after clicking load more');
//
//   // Method 5: Wait for specific number of requests to complete
//   async function waitForRequests(page, count) {
//     let completed = 0;
//     return new Promise(resolve => {
//       page.on('requestfinished', () => {
//         if (++completed >= count) resolve();
//       });
//     });
//   }
//
//   const waitPromise = waitForRequests(page, 5);
//   await page.click('#load-data');
//   await waitPromise;
//   console.log('5 requests completed');
//
//   // Method 6: Wait for no new requests for X seconds
//   async function waitForNoNewRequests(page, quietTime = 2000) {
//     let lastRequestTime = Date.now();
//     
//     page.on('request', () => {
//       lastRequestTime = Date.now();
//     });
//
//     while (Date.now() - lastRequestTime < quietTime) {
//       await page.waitForTimeout(100);
//     }
//   }
//
//   await waitForNoNewRequests(page);
//   console.log('No new requests for 2 seconds');
//
//   // Method 7: Monitor specific domain requests
//   async function waitForDomainIdle(page, domain, timeout = 5000) {
//     const pendingRequests = new Set();
//
//     const onRequest = request => {
//       if (request.url().includes(domain)) {
//         pendingRequests.add(request);
//       }
//     };
//
//     const onRequestDone = request => {
//       pendingRequests.delete(request);
//     };
//
//     page.on('request', onRequest);
//     page.on('requestfinished', onRequestDone);
//     page.on('requestfailed', onRequestDone);
//
//     const startTime = Date.now();
//     while (pendingRequests.size > 0) {
//       if (Date.now() - startTime > timeout) break;
//       await page.waitForTimeout(100);
//     }
//
//     page.off('request', onRequest);
//     page.off('requestfinished', onRequestDone);
//     page.off('requestfailed', onRequestDone);
//   }
//
//   await waitForDomainIdle(page, 'api.example.com');
//   console.log('API domain is idle');
//
//   // Method 8: Wait for fetch/XHR only
//   page.on('request', request => {
//     if (['fetch', 'xhr'].includes(request.resourceType())) {
//       console.log('AJAX request:', request.url());
//     }
//   });
//
//   await page.goto('https://example.com', {
//     waitUntil: 'networkidle0'
//   });
//
//   await browser.close();
// })();

// --------------------------------------------------

// ==================================================
// 42. Get All Page Cookies
// Description: Shows comprehensive techniques for retrieving and analyzing
// cookies. Essential for debugging sessions, testing cookie policies, and
// verifying authentication states.
// ==================================================
// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//
//   await page.goto('https://example.com');
//
//   // Method 1: Get all cookies for current page
//   const cookies = await page.cookies();
//   console.log('Total cookies:', cookies.length);
//   console.log('Cookies:', cookies);
//
//   // Method 2: Get cookies for multiple URLs
//   const multipleCookies = await page.cookies(
//     'https://example.com',
//     'https://sub.example.com'
//   );
//   console.log('Cookies from multiple URLs:', multipleCookies);
//
//   // Method 3: Analyze cookie properties
//   cookies.forEach(cookie => {
//     console.log(`Cookie: ${cookie.name}`);
//     console.log('  Value:', cookie.value);
//     console.log('  Domain:', cookie.domain);
//     console.log('  Path:', cookie.path);
//     console.log('  Expires:', new Date(cookie.expires * 1000));
//     console.log('  HttpOnly:', cookie.httpOnly);
//     console.log('  Secure:', cookie.secure);
//     console.log('  SameSite:', cookie.sameSite);
//   });
//
//   // Method 4: Filter cookies by domain
//   const domainCookies = cookies.filter(cookie => 
//     cookie.domain.includes('example.com')
//   );
//   console.log('Example.com cookies:', domainCookies);
//
//   // Method 5: Check for specific cookies
//   const sessionCookie = cookies.find(cookie => 
//     cookie.name === 'session' || cookie.name === 'sessionid'
//   );
//   if (sessionCookie) {
//     console.log('Session cookie found:', sessionCookie);
//   }
//
//   // Method 6: Get httpOnly cookies (not accessible via JavaScript)
//   const httpOnlyCookies = cookies.filter(cookie => cookie.httpOnly);
//   console.log('HttpOnly cookies:', httpOnlyCookies.length);
//
//   // Method 7: Check cookie security
//   const insecureCookies = cookies.filter(cookie => 
//     !cookie.secure && cookie.name.toLowerCase().includes('auth')
//   );
//   if (insecureCookies.length > 0) {
//     console.log('Warning: Insecure auth cookies found!');
//   }
//
//   // Method 8: Get cookies from all pages in browser
//   const pages = await browser.pages();
//   const allPagesCookies = [];
//   
//   for (const p of pages) {
//     const pageCookies = await p.cookies();
//     allPagesCookies.push({
//       url: p.url(),
//       cookies: pageCookies
//     });
//   }
//   console.log('Cookies from all pages:', allPagesCookies);
//
//   // Method 9: Monitor cookie changes
//   const initialCookies = await page.cookies();
//   
//   // Perform action that might set cookies
//   await page.click('#login');
//   await page.waitForTimeout(1000);
//   
//   const afterCookies = await page.cookies();
//   const newCookies = afterCookies.filter(cookie =>
//     !initialCookies.find(initial => initial.name === cookie.name)
//   );
//   console.log('New cookies added:', newCookies);
//
//   // Method 10: Export cookies for later use
//   const cookieData = {
//     url: page.url(),
//     timestamp: new Date().toISOString(),
//     cookies: await page.cookies()
//   };
//   
//   // Can save to file or database
//   console.log('Cookie export:', JSON.stringify(cookieData, null, 2));
//
//   // Method 11: Get cookies with JavaScript
//   const jsCookies = await page.evaluate(() => document.cookie);
//   console.log('JavaScript accessible cookies:', jsCookies);
//
//   await browser.close();
// })();

// --------------------------------------------------

// ==================================================
// 47. Execute Async JavaScript
// Description: Shows how to execute asynchronous JavaScript code in the
// page context. Essential for complex interactions, waiting for promises,
// and handling async operations.
// ==================================================
// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto('https://example.com');
//
//   // Method 1: Basic async execution
//   const result = await page.evaluate(async () => {
//     await new Promise(resolve => setTimeout(resolve, 1000));
//     return 'Waited 1 second';
//   });
//   console.log(result);
//
//   // Method 2: Fetch data asynchronously
//   const apiData = await page.evaluate(async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//     const data = await response.json();
//     return data;
//   });
//   console.log('API data:', apiData);
//
//   // Method 3: Wait for multiple promises
//   const multipleResults = await page.evaluate(async () => {
//     const promises = [
//       fetch('https://jsonplaceholder.typicode.com/posts/1').then(r => r.json()),
//       fetch('https://jsonplaceholder.typicode.com/posts/2').then(r => r.json()),
//       new Promise(resolve => setTimeout(() => resolve('Timer done'), 500))
//     ];
//     
//     return await Promise.all(promises);
//   });
//   console.log('Multiple results:', multipleResults);
//
//   // Method 4: Handle async errors
//   try {
//     await page.evaluate(async () => {
//       const response = await fetch('https://invalid-url-that-fails.com');
//       if (!response.ok) throw new Error('Fetch failed');
//       return await response.json();
//     });
//   } catch (error) {
//     console.log('Async error caught:', error.message);
//   }
//
//   // Method 5: Execute with timeout
//   const timeoutResult = await page.evaluate(async () => {
//     const timeout = (ms) => new Promise(resolve => setTimeout(resolve, ms));
//     const fetchData = async () => {
//       await timeout(2000);
//       return 'Data fetched';
//     };
//     
//     return await Promise.race([
//       fetchData(),
//       timeout(1000).then(() => 'Timeout!')
//     ]);
//   });
//   console.log('Race result:', timeoutResult);
//
//   // Method 6: Pass async function from outside
//   const asyncFunction = async (url) => {
//     const response = await fetch(url);
//     return {
//       status: response.status,
//       headers: Object.fromEntries(response.headers.entries())
//     };
//   };
//
//   const functionResult = await page.evaluate(asyncFunction, 'https://example.com');
//   console.log('Function result:', functionResult);
//
//   // Method 7: Chain async operations
//   const chainResult = await page.evaluate(async () => {
//     const step1 = await new Promise(resolve => 
//       setTimeout(() => resolve('Step 1'), 100)
//     );
//     
//     const step2 = await new Promise(resolve =>
//       setTimeout(() => resolve(step1 + ' -> Step 2'), 100)
//     );
//     
//     const step3 = await new Promise(resolve =>
//       setTimeout(() => resolve(step2 + ' -> Step 3'), 100)
//     );
//     
//     return step3;
//   });
//   console.log('Chain result:', chainResult);
//
//   // Method 8: Wait for DOM changes asynchronously
//   const domResult = await page.evaluate(async () => {
//     // Wait for element to appear
//     const waitForElement = async (selector, timeout = 5000) => {
//       const startTime = Date.now();
//       
//       while (Date.now() - startTime < timeout) {
//         const element = document.querySelector(selector);
//         if (element) return element.textContent;
//         await new Promise(resolve => setTimeout(resolve, 100));
//       }
//       
//       throw new Error('Element not found');
//     };
//     
//     // Simulate element appearing after delay
//     setTimeout(() => {
//       const div = document.createElement('div');
//       div.id = 'async-element';
//       div.textContent = 'I appeared!';
//       document.body.appendChild(div);
//     }, 500);
//     
//     return await waitForElement('#async-element');
//   });
//   console.log('DOM result:', domResult);
//
//   // Method 9: Async generator function
//   const generatorResults = await page.evaluate(async () => {
//     async function* asyncGenerator() {
//       yield await Promise.resolve('First');
//       yield await Promise.resolve('Second');
//       yield await Promise.resolve('Third');
//     }
//     
//     const results = [];
//     for await (const value of asyncGenerator()) {
//       results.push(value);
//     }
//     return results;
//   });
//   console.log('Generator results:', generatorResults);
//
//   // Method 10: Complex async workflow
//   const workflowResult = await page.evaluate(async () => {
//     const workflow = {
//       async loadData() {
//         await new Promise(r => setTimeout(r, 100));
//         return { id: 1, name: 'Data' };
//       },
//       
//       async processData(data) {
//         await new Promise(r => setTimeout(r, 100));
//         return { ...data, processed: true };
//       },
//       
//       async saveData(data) {
//         await new Promise(r => setTimeout(r, 100));
//         return { ...data, saved: true };
//       }
//     };
//     
//     const data = await workflow.loadData();
//     const processed = await workflow.processData(data);
//     const saved = await workflow.saveData(processed);
//     
//     return saved;
//   });
//   console.log('Workflow result:', workflowResult);
//
//   await browser.close();
// })();

// --------------------------------------------------

// ==================================================
// 61. Form Interaction and Login Automation
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
// 62. Page Scrolling and Infinite Scroll Handling
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
// 63. Generate PDF from Webpage
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
// 64. Keyboard and Mouse Actions
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
// 65. Search and Navigation with Locators
// Description: Demonstrates using modern Puppeteer locators including
// aria selectors and text-based selectors. Shows how to search,
// wait for results, and extract content from dynamic pages.
// ==================================================
// (async () => {
//   // Launch the browser and open a new blank page
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//
//   // Navigate the page to a URL
//   await page.goto('https://developer.chrome.com/');
//
//   // Set screen size
//   await page.setViewport({width: 1080, height: 1024});
//
//   // Type into search box using accessible input name
//   await page.locator('aria/Search').fill('automate beyond recorder');
//
//   // Wait and click on first result
//   await page.locator('.devsite-result-item-link').click();
//
//   // Locate the full title with a unique string
//   const textSelector = await page
//     .locator('text/Customize and automate')
//     .waitHandle();
//   const fullTitle = await textSelector?.evaluate(el => el.textContent);
//
//   // Print the full title
//   console.log('The title of this blog post is "%s".', fullTitle);
//
//   await browser.close();
// })();

// --------------------------------------------------

// ==================================================
// 66. Multiple Browser Tabs/Pages Management
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
// 67. Mobile Device Emulation
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
// 68. Cookie Management
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
// 69. Browser Context Isolation
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
// 70. Download File Handling
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
// 71. Error Handling and Retry Logic
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
// 72. Network Request Interception
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
// 73. Parallel Execution and Worker Management
// Description: Shows how to run multiple browser instances in parallel
// for faster scraping and testing. Essential for processing large datasets
// and improving automation performance.
// ==================================================
// (async () => {
//   const puppeteer = require('puppeteer');
//
//   // Function to process a single URL
//   async function processUrl(url, index) {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     
//     try {
//       await page.goto(url, { waitUntil: 'networkidle2' });
//       const title = await page.title();
//       const screenshot = await page.screenshot({ encoding: 'base64' });
//       
//       await browser.close();
//       return { url, title, screenshot: screenshot.substring(0, 50) + '...', index };
//     } catch (error) {
//       await browser.close();
//       return { url, error: error.message, index };
//     }
//   }
//
//   // URLs to process
//   const urls = [
//     'https://example.com',
//     'https://google.com',
//     'https://github.com',
//     'https://stackoverflow.com'
//   ];
//
//   // Method 1: Process URLs in parallel with Promise.all
//   console.log('Processing all URLs in parallel...');
//   const startTime = Date.now();
//   
//   const results = await Promise.all(
//     urls.map((url, index) => processUrl(url, index))
//   );
//   
//   console.log('Results:', results);
//   console.log('Total time:', Date.now() - startTime, 'ms');
//
//   // Method 2: Limited concurrency (process 2 at a time)
//   async function processWithLimit(urls, limit) {
//     const results = [];
//     const executing = [];
//     
//     for (const [index, url] of urls.entries()) {
//       const promise = processUrl(url, index).then(result => {
//         results[index] = result;
//       });
//       
//       executing.push(promise);
//       
//       if (executing.length >= limit) {
//         await Promise.race(executing);
//         executing.splice(executing.findIndex(p => p === promise), 1);
//       }
//     }
//     
//     await Promise.all(executing);
//     return results;
//   }
//
//   console.log('Processing with limit of 2...');
//   const limitedResults = await processWithLimit(urls, 2);
//   console.log('Limited results:', limitedResults);
//
//   // Method 3: Using a worker pool pattern
//   class BrowserPool {
//     constructor(size) {
//       this.size = size;
//       this.browsers = [];
//       this.available = [];
//     }
//
//     async init() {
//       for (let i = 0; i < this.size; i++) {
//         const browser = await puppeteer.launch();
//         this.browsers.push(browser);
//         this.available.push(browser);
//       }
//     }
//
//     async acquire() {
//       while (this.available.length === 0) {
//         await new Promise(resolve => setTimeout(resolve, 100));
//       }
//       return this.available.pop();
//     }
//
//     release(browser) {
//       this.available.push(browser);
//     }
//
//     async destroy() {
//       await Promise.all(this.browsers.map(browser => browser.close()));
//     }
//   }
//
//   // Use the browser pool
//   const pool = new BrowserPool(3);
//   await pool.init();
//
//   async function processWithPool(url, pool) {
//     const browser = await pool.acquire();
//     const page = await browser.newPage();
//     
//     try {
//       await page.goto(url);
//       const result = await page.title();
//       await page.close();
//       pool.release(browser);
//       return result;
//     } catch (error) {
//       await page.close();
//       pool.release(browser);
//       throw error;
//     }
//   }
//
//   const poolResults = await Promise.all(
//     urls.map(url => processWithPool(url, pool))
//   );
//   
//   console.log('Pool results:', poolResults);
//   await pool.destroy();
// })();

// --------------------------------------------------

// ==================================================
// 74. Permission Management
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
// 75. Accessibility Testing
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
// 76. CDP Session and Advanced Browser Control
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
// 77. WebSocket and Real-time Communication Testing
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
