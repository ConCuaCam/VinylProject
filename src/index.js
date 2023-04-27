import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

import SidebarProvider from './context/SidebarContext';
import VinylProvider from './context/VinylContext';
import CartProvider from './context/CartContext'
import ModalCartProvider from './context/ModalCartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ModalCartProvider>
    <CartProvider>
      <SidebarProvider>
        <VinylProvider>
          <React.StrictMode>
            <Router>
              <App />
            </Router>
          </React.StrictMode>
        </VinylProvider>
      </SidebarProvider>
    </CartProvider>
  </ModalCartProvider>
);

