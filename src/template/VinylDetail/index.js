import React from 'react'
import { Link } from 'react-router-dom';

import Slider from './Slider';
import Tracklist from './Tracklist';
import Info from './Info';
import Note from './Note';

function VinylDetail({
  product,
  addToCart
}) {
  return (
    <>
      <section className='py-3 text-[14px] bg-[#F2F4F8] border border-[#dfdfdf]'>
        <div className="max-w-[1160px] px-[15px] w-full mx-auto">
          <div className="flex pl-5 pr-2.5">
            <ul className="flex">
              <li className='font-bold uppercase mr-2'>
                <Link to='/'>Trang chủ /</Link>
              </li>
              <li className='font-bold uppercase mr-2'>
                <Link to='/allvinyl'>Shop /</Link>
              </li>
              <li className='font-bold uppercase text-[#697077]'>{product.artist} - {product.title}</li>
            </ul>
          </div>
        </div>
      </section>
      <div className="main">
        <div className="max-w-[1160px] px-[15px] w-full mx-auto">
          <div className="mt-5">
            <div className="px-2 5">
              <div className="product-wrap flex flex-col md:flex-row">
                <div className="flex-1 max-w-full md:max-w-[50%] mb-8 px-2.5 transition-all duration-500">
                  <div className="product-img w-full mb-2 relative">
                    <Slider product={product} />
                  </div>
                  <Note />
                </div>
                <div className="flex-1 max-w-full md:max-w-[50%] mb-8 px-2.5 transition-all duration-500 ">
                  <Info product={product} addToCart={addToCart} />
                  <Tracklist product={product} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default VinylDetail