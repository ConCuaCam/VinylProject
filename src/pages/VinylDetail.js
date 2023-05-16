import React, { useContext, useEffect } from 'react'

import Loading from '../components/Loading/index'
import PageNavigation from '../components/PageNavigation';

import { useParams } from 'react-router-dom';
import VinylDetailTemp from '../template/VinylDetail'
import { VinylContext } from '../context/VinylContext'
import { CartContext } from '../context/CartContext'
import { WishlistContext } from '../context/WishlistContext';

function VinylDetail() {
  const { isSingleLoading, getSingleProduct, singleProduct } = useContext(VinylContext);
  const { id } = useParams()
  const { addToCart } = useContext(CartContext)
  const { addToWishlist, wishlist } = useContext(WishlistContext)

  useEffect(() => {
    window.scrollTo(0, 0);
    getSingleProduct(`https://64532271c18adbbdfe95f5c6.mockapi.io/products/${id}`);
  },[id]);

  if (isSingleLoading) {
    return (
      <Loading />
    )
  }
  return (
    <>
      <PageNavigation title={singleProduct.title} artist={singleProduct.artist} />
      <VinylDetailTemp
        singleProduct={singleProduct}
        addToCart={addToCart}
        addToWishlist = {addToWishlist}
        wishlist={wishlist}
      />
    </>
  )
}

export default VinylDetail