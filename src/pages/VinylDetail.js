import React, {  useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';

import VinylDetailTemp from '../template/VinylDetail'
import { VinylContext } from '../context/VinylContext'
import { CartContext } from '../context/CartContext'

function VinylDetail() {
  const { products } = useContext(VinylContext);
  const {id} = useParams()
  const { addToCart } = useContext(CartContext)

  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);

  const product = products.find((item) => {
    return item.id === id;
  });
  
  // const similarProducts = products.filter(item => {
  //   return (item.artist === product.artist || item.publisher === product.publisher|| item.genre.includes(product.genre) || product.genre.includes(item.genre) ) && item.id !== id;
  // });

  if(!product) {
    return (
      <section className='h-screen flex justify-center items-center'>
        Loading...
      </section>
    )
  }

  return (
    <VinylDetailTemp 
      product = {product}
      addToCart = {addToCart}
    />
  )
}

export default VinylDetail