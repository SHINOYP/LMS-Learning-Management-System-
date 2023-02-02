import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import {BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    
      <AuthContextProvider>
        <BrowserRouter>
        <App />
        </BrowserRouter>
      </AuthContextProvider>
    
  
);
