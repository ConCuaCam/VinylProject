import React, { useContext } from 'react'
import WishlistTemp from '../template/Wishlist'
import { WishlistContext } from '../context/WishlistContext'

function Wishlist() {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext)
  return (
    <WishlistTemp wishlist={wishlist} removeFromWishlist={removeFromWishlist}/>
  )
}

export default Wishlist