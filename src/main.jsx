import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { OptimusApp } from './OptimusApp.jsx'
import { BrowserRouter } from 'react-router-dom'
import { store } from './store'


import './styles.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      <BrowserRouter>
        <OptimusApp />
      </BrowserRouter>
    </Provider>
    
  </React.StrictMode>,
)
