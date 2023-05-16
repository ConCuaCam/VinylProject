import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

import SidebarProvider from './context/SidebarContext';
import VinylProvider from './context/VinylContext';
import CartProvider from './context/CartContext'
import ModalCartProvider from './context/ModalCartContext';
import FilterProvider from './context/FilterContext';
import AuthProvider from './context/AuthContext';
import WishlistProvider from './context/WishlistContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ModalCartProvider>
    <CartProvider>
      <AuthProvider>
        <SidebarProvider>
          <VinylProvider>
            <FilterProvider>
              <WishlistProvider>
                <React.StrictMode>
                  <Router>
                    <App />
                  </Router>
                </React.StrictMode>
              </WishlistProvider>
            </FilterProvider>
          </VinylProvider>
        </SidebarProvider>
      </AuthProvider>
    </CartProvider>
  </ModalCartProvider>
);

