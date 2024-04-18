import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './Home.jsx'
import Gala from './UI/Gala.js';
import Jamshid from './footerUI/Jamshid.jsx';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>  
    {/* <Home/> */}
    {/* <App /> */}
    {/* <Gala/>     */}
    <Jamshid/>
  </React.StrictMode>
);