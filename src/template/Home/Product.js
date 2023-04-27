import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BsHeart, BsBag, BsArrowRightShort } from 'react-icons/bs'
import { CartContext } from '../../context/CartContext';

function Product({ product, index }) {
    const { addToCart } = useContext(CartContext);

    return (
        <li className='mb-5 px-2.5 w-full relative group'>
            <div className="product-inner">
                <div className="product-image mb-4 relative">
                    <Link to={`/vinyldetail/${product.id}`}>
                        {product.discount && (
                            <div className="absolute text-[10px] left-3 top-3">
                                <div className="bg-[#e27c7c] text-white mb-1 px-[11px] py-[5px] leading-none">
                                    -{product.discount}%
                                </div>
                            </div>
                        )}
                        <img src={product.image[0]} alt="" />
                    </Link>
                </div>
                <div className="product-content text-center">
                    <Link to={`/vinyldetail/${product.id}`}>
                        <p className='product-title text-[#697077] uppercase overflow-hidden mb-[5px] truncate'>{product.title}</p>
                        <p className='artist font-semibold capitalize mb-[5px] text-ellipsis overflow-hidden'>{product.artist}</p>
                        <h4 className='price'>
                            {product.discountPrice ? (
                                <>
                                    <span className='md:text-[18px]  font-light text-color-primary line-through mr-1.5'>{product.price.toLocaleString('en-US')} ₫</span>
                                    <span className='md:text-[20px] text-[18px] font-bold'>{product.discountPrice.toLocaleString('en-US')} ₫</span>
                                </>
                            ) : (
                                <span className='md:text-[20px] text-[18px] font-bold'>{product.price.toLocaleString('en-US')} ₫</span>
                            )}
                        </h4>
                        {product.quantity > 0
                            ? (<span className='mt-[5px] mr-[5px] px-2 py-1 text-color-green bg-[#dff3de] inline-block text-[10px] font-semibold uppercase leading-[160%] h-[26px]'>còn hàng</span>)
                            : (<span className='mt-[5px] mr-[5px] px-2 py-1 text-color-red bg-[#ffcec4] inline-block text-[10px] font-semibold uppercase leading-[160%] h-[26px]'>hết hàng</span>)
                        }
                    </Link>
                    <div className="add-links-wrap absolute top-[100px] left-0 right-0 block">
                        <div className="add-clearfix relative inline-block mb-4 top-2.5 overflow-visible">
                            <div className="wishlist absolute z-10 group-hover:-left-10 group-hover:visible group-hover:opacity-80 opacity-0 left-0 transition-all duration-500">
                                <Link to='' className='mx-[5px] min-w-[55px] w-9 h-9 flex items-center justify-center bg-white border border-[#000] shadow-[4px_4px_0_#000000]'>
                                    <BsHeart className='text-[16px]' />
                                </Link>
                            </div>
                            {product.quantity > 0
                                ? (
                                    <button onClick={() => addToCart(product, product.id)} className='relative uppercase px-[7px] opacity-0 group-hover:opacity-100 -right-9 bg-color-yellow border border-[#000] shadow-[4px_4px_0_#000000] h-9 min-w-[36px] text-[9px] font-poppins font-semibold z-[1] inline-block leading-9 transition-all duration-500'>
                                        <BsBag className='text-[14px] inline-block mb-[6px] mr-1' />
                                        thêm vào giỏ hàng
                                    </button>)
                                : (
                                    <Link to={`/vinyldetail/${product.id}`} className='relative uppercase px-[7px] opacity-0 group-hover:opacity-100 -right-9 bg-color-yellow border border-[#000] shadow-[4px_4px_0_#000000] h-9 min-w-[36px] text-[9px] font-poppins font-semibold z-[1] inline-block leading-9 transition-all duration-500'>
                                        <BsArrowRightShort className='text-[16px] inline-block mb-0.5 mr-1' />
                                        Xem chi tiết
                                    </Link>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default Product