import React, {  useContext } from 'react'
import HomeTemp from '../template/Home/Index'

import { VinylContext } from '../context/VinylContext'
import { WishlistContext } from '../context/WishlistContext';
import { CartContext } from '../context/CartContext';

function Home() {
  const { isLoading, popularProducts } = useContext(VinylContext);
  const { addToWishlist, wishlist } = useContext(WishlistContext);
  const { addToCart } = useContext(CartContext);

  return (
    <HomeTemp 
      isLoading = {isLoading}
      popularProducts = {popularProducts}
      addToCart = {addToCart}
      addToWishlist = {addToWishlist}
      wishlist = {wishlist}
    />
  )
}

export default Home