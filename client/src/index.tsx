// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App'; // Ensure App is also a .tsx file with proper TypeScript settings
// import reportWebVitals from './reportWebVitals';
// import { RecoilRoot } from "recoil"

// const rootElement = document.getElementById('root');
// if (!rootElement) throw new Error('Failed to find the root element');

// const root = ReactDOM.createRoot(rootElement);

// root.render(
//   <React.StrictMode>
//     <RecoilRoot>
//       <App />
//     </RecoilRoot>
//   </React.StrictMode>
// );


// reportWebVitals();

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Ensure App.tsx exists with proper TypeScript settings
import reportWebVitals from "./reportWebVitals";
import { RecoilRoot } from "recoil";

// Get the root element and ensure it's not null
const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");

// Create the React root
const root = ReactDOM.createRoot(rootElement as HTMLElement);

// Render the React application
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>
);

// Measure performance (optional)
reportWebVitals();
