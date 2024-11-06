import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Navbar from './Navbar.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { AppProvider } from './Contaxt/ProductContaxt.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
    <App />
    </AppProvider>
  </StrictMode>,
)
