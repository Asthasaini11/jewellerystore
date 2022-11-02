import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ProductProvider } from './Context';

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <ProductProvider>
    <Router>
      <App />
    </Router>
  </ProductProvider>,



  document.getElementById('root')
);