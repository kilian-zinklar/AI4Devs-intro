You are an expert in web development. Your objective is to build a responsive web page to implement a tool to reverse the given text by the user. This are all the things you have to have into account:
- Please use 'index.html' and 'scripts.js' that I attach to this conversation, as the base of the web page.
- Please use best practises in Javascript and web development, such as dividing the business logic from the presentation or User interface.

---

Answer:

To improve your web page and follow best practices, I will refactor both the index.html and script.js files to properly separate concerns between the business logic and the UI.

## Improvements to be made:
1. HTML (index.html):
 - Modify the button to use an id instead of inline JavaScript (onclick).
- Make sure the page is responsive with TailwindCSS, which is already included.
2. JavaScript (script.js):
- Move the event listener to the JavaScript file to handle button clicks.
- Encapsulate the text inversion logic into a function.
- Maintain separation between business logic and UI manipulation.

Updated Code

## Changes made:
1. index.html:
- Removed the inline onclick from the button and replaced it with an id.
 - The script is now attached to the button using an event listener in the JavaScript file.
2. scripts.js:
 - Moved the button's click handling logic into DOMContentLoaded, ensuring it runs after the page loads.
- Created a clear separation between UI logic (event handling and displaying output) and the business logic (text inversion).

This structure enhances readability and maintainability while following best practices in web development. Let me know if you'd like any further changes!