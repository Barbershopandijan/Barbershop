import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './Home.jsx'
import Gala from './UI/Gala';
import Shoxnurmirzo from './Ui_About/shoxnurmirzo.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Home/>
    <App />
    <Gala/>
    <Shoxnurmirzo/>

    <Home/>

    <App />
    <Gallery/>

    <App />
    <Gala/>
    
  </React.StrictMode>
);