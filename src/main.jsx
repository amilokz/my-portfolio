import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContext";
import './styles/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Register Service Worker for PWA (only in production)
if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(reg => console.log('✅ Service Worker registered:', reg))
      .catch(err => console.log('❌ Service Worker error:', err));
  });
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);