import React, { useEffect,useContext} from 'react'

import CheckoutTemp from '../template/Checkout'
import { CartContext } from '../context/CartContext'

function Checkout() {
  const {cart , total, totalCart, selectedPrice} = useContext(CartContext)
  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);

  return (
    <CheckoutTemp
      cart = {cart}
      total = {total}
      totalCart = {totalCart}
      selectedPrice = {selectedPrice}
    />
  )
}

export default Checkout