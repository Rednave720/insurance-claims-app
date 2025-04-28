import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Toaster } from 'react-hot-toast'; // 🔥 Add this line

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <Toaster /> {/* 🔥 Insert toaster at root level */}
      <App />
    </>
  </React.StrictMode>,
)
// This is the entry point of the application.
// It imports the main App component and renders it into the root element of the HTML.