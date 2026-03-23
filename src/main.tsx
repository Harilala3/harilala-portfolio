import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Handle SPA routing for GitHub Pages
// Check if there's a path in the query string and redirect accordingly
(function() {
  const searchParams = new URLSearchParams(window.location.search);
  const path = searchParams.get('');

  if (path) {
    // Remove the query parameter and update the URL
    const newUrl = window.location.pathname.replace(/\/$/, '') + '/' + path + window.location.hash;
    window.history.replaceState(null, '', newUrl);
  }
})();

createRoot(document.getElementById("root")!).render(<App />);
