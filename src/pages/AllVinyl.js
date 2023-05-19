import React, { useContext, useEffect } from 'react'
import AllVinylTemp from '../template/AllVinyl'
// import { useLocation } from 'react-router-dom';

import { FilterContext } from '../context/FilterContext'
import { CartContext } from '../context/CartContext';
import { WishlistContext } from '../context/WishlistContext';

function AllVinyl() {
  const { filter_products, grid_view, setGridView, setListView, sorting, all_products, filters: { price, maxPrice, minPrice }, updateFilterValue } = useContext(FilterContext)
  const { addToCart } = useContext(CartContext);
  const { addToWishlist, wishlist } = useContext(WishlistContext)

  // const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    // Xác định trang hiện tại
    // if (location.pathname === '/allvinyl') {
    //   clearFilters(); // Gọi hàm clearFilters ở đây
    // }
  }, []);

  const all_genres = Array.from(new Set(all_products.flatMap(product => product.genre)));
  const calculatePosition = () => {
    const range = maxPrice - minPrice;
    const position = ((price - minPrice) / range) * 100;
    if (position >= 15)
      return position - 15
  };

  const spanStyle = {
    left: `${calculatePosition()}%`,
  };

  return (
    <AllVinylTemp
      filter_products={filter_products}
      grid_view={grid_view}
      setGridView={setGridView}
      setListView={setListView}
      sorting={sorting}
      all_products={all_products}
      addToCart={addToCart}
      all_genres={all_genres}
      price={price}
      maxPrice={maxPrice}
      minPrice={minPrice}
      updateFilterValue={updateFilterValue}
      spanStyle={spanStyle}
      addToWishlist={addToWishlist}
      wishlist={wishlist}
    />
  )
}

export default AllVinyl