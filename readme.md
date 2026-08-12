# Article Data Toolkit

A pure functional approach to data manipulation built with Vanilla JavaScript (ES Modules) for the Optimum Partners Global task.

**Author:** Raimond Vargas

## Setup Instructions

1. **Clone the repository** and navigate to the project root folder.
2. **Install dependencies** (Babel and Jest are required for the test suite):
```bash
   npm install
```

## Running the Application

Since this project utilizes ES Modules (`type="module"`), opening the HTML file directly from the file system (`file:///`) will trigger CORS policy errors in modern browsers.

1. Launch a local development server. If you are using VS Code, install the **Live Server** extension.
2. Click **"Go Live"** while viewing `index.html`.
3. The application will automatically open in your default browser (typically at `http://127.0.0.1:5500`).

## Running Tests

The project includes an automated test suite with 6 test cases covering search, filtering, sorting, grouping, malformed data handling, and array immutability.

To run the tests, execute:
```bash
npm test
```

## Design Decisions & Architecture

* **Pure Functions:** All data transformations within `toolkit.js` are strictly pure. They leverage methods like `.filter()`, `.reduce()`, and the spread operator `[...]` to guarantee that the original article arrays and objects are never mutated.
* **Storage & Error Handling:** Application state is persisted using the browser's `localStorage`. The data loader implements a defensive programming approach (`try/catch` and `Array.isArray()` validation) to gracefully handle missing or malformed JSON payloads, falling back to a default dataset to prevent application crashes.
* **UI/UX:** The dashboard is built natively using CSS Grid and Flexbox for a clean, responsive layout without relying on external CSS frameworks.
* **Modularity:** The architecture strictly separates data persistence (`data.js`), pure logic transformations (`toolkit.js`), and DOM manipulation (`app.js`).

## Known Limitations

* The current user interface serves as a read-only dashboard to demonstrate data manipulation. While the `saveArticles` function is implemented and functional in the data module, a graphical form to manually input or delete new articles from the UI has not yet been built.