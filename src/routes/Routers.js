import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home';
import Login from '../pages/Login';
import AllVinyl from '../pages/AllVinyl'
import Cart from '../pages/Cart'
import VinylDetail from '../pages/VinylDetail'
import Checkout from '../pages/Checkout'
import Wishlist from '../pages/Wishlist'
import Account from '../pages/Account';
import Register from '../pages/Register';
import Page404 from '../pages/Page404';

function Routers() {
    return (
        <Routes>
            {/* <Route path="/" element={<Navigate to='/home' />} /> */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/allvinyl" element={<AllVinyl />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/vinyldetail/:id" element={<VinylDetail />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/wishlist' element={<Wishlist />} />
            <Route path='/account' element={<Account />} />
            <Route path='*' element={<Page404 />} />
        </Routes>
    )
}

export default Routers
