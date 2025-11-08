import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Importações de estilo — ordem correta e segura
import './index.css'
import './styles/animations.css' // Adição: ativa animações globais sem impacto visual

// Renderização principal (sem alterações)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
