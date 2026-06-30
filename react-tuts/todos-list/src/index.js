import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// This is where the root div comes and gets placed. It is the point where the root div is accessed and things are done on this basis.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  // The below is the entry point of the app. It is where the rest part of the app is rendered and it later points to the App.js file in the src folder.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
