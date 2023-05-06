import React, {  useContext } from 'react'
import HomeTemp from '../template/Home/Index'

import { VinylContext } from '../context/VinylContext'

function Home() {
  //Lấy products từ VinylContext
  const { products } = useContext(VinylContext);
  //Lấy top 10 sản phẩm có số lượng lớn nhất

  const filteredProducts = () => {
    const bestSellingProducts = [...products].sort((a, b) => b.quantity - a.quantity).slice(0, 8);
    return bestSellingProducts;
  }
  
  return (
    <HomeTemp 
      filteredProducts = {filteredProducts} 
    />
  )
}

export default Home