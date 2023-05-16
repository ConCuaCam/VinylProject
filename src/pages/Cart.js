import React, { useState, useContext, useEffect } from 'react'
import CartTemp from '../template/Cart/index'
import { CartContext } from '../context/CartContext'

function Cart() {
  const { cart, total, removeFromCart, increaseAmount, decreaseAmount, clearCart, selectedPrice, setSelectedPrice, totalCart } = useContext(CartContext)
  const [isShow, setIsShow] = useState(true)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <CartTemp
      cart={cart}
      total={total}
      removeFromCart={removeFromCart}
      increaseAmount={increaseAmount}
      decreaseAmount={decreaseAmount}
      clearCart={clearCart}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      isShow={isShow}
      setIsShow={setIsShow}
      selectedPrice = {selectedPrice}
      setSelectedPrice = {setSelectedPrice}
      totalCart = {totalCart}
    />
  )
}

export default Cart