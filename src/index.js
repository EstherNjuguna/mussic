import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App';
import Home from './components/home/Home';
import Login from './components/login/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>
);


