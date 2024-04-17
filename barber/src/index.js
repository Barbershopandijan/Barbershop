import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './Home.jsx'
import Gallery from './UI/abdulbosit.jsx'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home/>
    <App />
    <Gallery/>
    
  </React.StrictMode>
);