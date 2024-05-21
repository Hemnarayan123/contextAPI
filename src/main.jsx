import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ProductContextProvider from './components/context/ProductContextProvider.jsx'
import { CountContextProvider } from './components/context/CountContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductContextProvider>
    <App />
    </ProductContextProvider>
  </React.StrictMode>,
)












  {/* <CountContextProvider> */}
  {/* </CountContextProvider> */}