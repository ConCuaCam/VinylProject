import React, { useEffect,useContext} from 'react'
import Loading from '../components/Loading'
import CheckoutTemp from '../template/Checkout'
import { CartContext } from '../context/CartContext'
import { AuthContext } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'
function Checkout() {
  const {cart , total, totalCart, selectedPrice} = useContext(CartContext)
  const { isLoading, user, isLogin} = useContext(AuthContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);

  if (isLoading) {
    return (
      <Loading />
    )
  }

  if (!isLogin) {
    return <Navigate to="/login" />;
}

  return (
    <CheckoutTemp
      cart = {cart}
      total = {total}
      totalCart = {totalCart}
      selectedPrice = {selectedPrice}
      user = {user}
    />
  )
}

export default Checkout