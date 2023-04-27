import React, { useState, useContext} from 'react'
import CartTemp from '../template/Cart/index'
import { CartContext } from '../context/CartContext'

function Cart() {
  const { cart, total, removeFromCart, increaseAmount, decreaseAmount, clearCart } = useContext(CartContext)
  const [isShow, setIsShow] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const [selectedPrice, setSelectedPrice] = useState("50000");

  const totalCart = selectedPrice === "50000" ? total + 50000 : total + 65000;



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