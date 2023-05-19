import React, { useState, useEffect, useContext } from 'react'

import CheckoutTemp from '../template/Checkout'
import { CartContext } from '../context/CartContext'
import { AuthContext } from '../context/AuthContext'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate } from 'react-router-dom';

function Checkout() {
  const { cart, total, totalCart, selectedPrice, clearCart } = useContext(CartContext)
  const { user } = useContext(AuthContext);

  const [firstName, setFirstName] = useState(user.firstName || '');
  const [lastName, setLastName] = useState(user.lastName || '');
  const [email, setEmail] = useState(user.email || '');
  const [address, setAddress] = useState(user.address || '');
  const [city, setCity] = useState(user.city || '');
  const [phone, setPhone] = useState(user.phone || '');

  const [formError, setFormError] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    //Xóa giỏ hàng
    if (!firstName || !lastName || !email || !address || !city || !phone) {
      // Hiển thị thông báo lỗi nếu có ô input trống
      setFormError("Vui lòng điền đầy đủ thông tin")
    } else {
      clearCart()
      //Hiển thị thông báo
      toast.success('Đặt hàng thành công', {
        position: "top-center",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  if(cart.length === 0 ) {
    return <Navigate to='/cart' />
  }

  return (
    <CheckoutTemp
      cart={cart}
      total={total}
      totalCart={totalCart}
      selectedPrice={selectedPrice}
      firstName={firstName}
      lastName={lastName}
      email={email}
      address={address}
      city={city}
      phone={phone}
      setFirstName={setFirstName}
      setLastName={setLastName}
      setEmail={setEmail}
      setAddress={setAddress}
      setCity={setCity}
      setPhone={setPhone}
      handleCheckoutSubmit={handleCheckoutSubmit}
      formError={formError}
    />
  )
}

export default Checkout