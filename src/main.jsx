import React from 'react'
import { ThemeProvider } from "@mui/material";
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import themeConfigs from './components/configs/theme.configs.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={themeConfigs.custom({ mode: "dark" })}>
<BrowserRouter>
  <App />
</BrowserRouter>
  </ThemeProvider>
)
