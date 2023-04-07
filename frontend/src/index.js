import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import { ChapterContextProvider } from './context/ChapterContext';
import { ModuleContextProvider } from './context/ModuleContext';
import {BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ModuleContextProvider>
    <ChapterContextProvider>
       <AuthContextProvider>
        <BrowserRouter>
        <App />
        </BrowserRouter>
      </AuthContextProvider>
    </ChapterContextProvider> 
  </ModuleContextProvider> 
  
);
