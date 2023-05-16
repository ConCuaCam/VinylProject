import React, { useState, useEffect, createContext, useContext } from 'react'
import { ModalCartContext } from './ModalCartContext'

export const CartContext = createContext()

function CartProvider({ children }) {
  const { setIsOpen } = useContext(ModalCartContext)

  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("localCart")) || [])
  const [total, setTotal] = useState(0)
  const [itemAmount, setItemAmount] = useState(0);

  // useEffect(() => {
  //   localStorage.setItem("localCart", JSON.stringify(cart));
  // },[cart])

  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount
      }, 0)
      setItemAmount(amount);
    }

    const total = cart.reduce((accumulator, currentItem) => {
      const price = currentItem.discountPrice || currentItem.price;
      return accumulator + price * currentItem.amount;
    }, 0);
    setTotal(total);

    localStorage.setItem("localCart", JSON.stringify(cart));

  }, [cart]);

  // useEffect(() => {
  //   if (cart) {
  //     const amount = cart.reduce((accumulator, currentItem) => {
  //       return accumulator + currentItem.amount
  //     }, 0)
  //     setItemAmount(amount);
  //   }
  // }, [cart]);

  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    if (window.location.pathname !== '/cart') {
      setIsOpen(true)
    }
    const cartItem = cart.find((item) => {
      return item.id === id;
    })
    //Nếu đã có item thì tăng số lượng lên 1
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id && item.amount < item.quantity) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart)
    } else {
      setCart([...cart, newItem])
    };
  }

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  const increaseAmount = (id) => {
    const cartItem = cart.find((product) => product.id === id);
    addToCart(cartItem, id)
  }

  const decreaseAmount = (id) => {
    const cartItem = cart.find((product) => product.id === id);
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 }
        } else {
          return item;
        }
      });
      setCart(newCart)
    }

    if (cartItem.amount < 2) {
      removeFromCart(id)
    }
  }

  const clearCart = () => {
    setCart([]);
  }

  const [selectedPrice, setSelectedPrice] = useState("50000");

  const totalCart = selectedPrice === "50000" ? total + 50000 : total + 65000;

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      total,
      itemAmount,
      removeFromCart,
      increaseAmount,
      decreaseAmount,
      clearCart,
      selectedPrice,
      setSelectedPrice,
      totalCart
    }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider