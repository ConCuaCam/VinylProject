import React from 'react'

import Slider from './Slider';
// import Tracklist from './Tracklist';
import Info from './Info';
import Note from './Note';

function VinylDetail({
  singleProduct,
  addToCart,
  addToWishlist,
  wishlist
}) {
  return (
    <div className="main">
      <div className="max-w-[1160px] px-[15px] w-full mx-auto">
        <div className="mt-5">
          <div className="px-2 5">
            <div className="product-wrap flex flex-col md:flex-row">
              <div className="flex-1 max-w-full md:max-w-[50%] mb-8 px-2.5 transition-all duration-500">
                <Slider singleProduct = {singleProduct} />
                <Note />
              </div>
              <div className="flex-1 max-w-full md:max-w-[50%] mb-8 px-2.5 transition-all duration-500 ">
                <Info singleProduct={singleProduct} addToCart={addToCart} addToWishlist = {addToWishlist} wishlist={wishlist}/>
                {/* <Tracklist singleProduct={singleProduct} /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VinylDetail