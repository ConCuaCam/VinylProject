import React from 'react'
import { Link } from 'react-router-dom'
import { BsBag, BsArrowRightShort } from 'react-icons/bs'

function ListView({ product, addToCart, addToWishlist, wishlist }) {
    const wishlistItem = wishlist.find((item) => {
        return item.id === product.id;
    })
    return (
        <li className='mb-5 px-2.5 w-full relative'>
            <div className="product-inner flex items-center sm:items-start pt-[15px]">
                <div className="product-image mr-1 relative flex-170">
                    <Link to={`/vinyldetail/${product.id}`}>
                        {product.discount > 0 ? (
                            <div className="absolute text-[10px] left-3 top-3">
                                <div className="bg-[#e27c7c] text-white mb-1 px-[11px] py-[5px] leading-none">
                                    -{product.discount}%
                                </div>
                            </div>
                        ) : null}
                        <img src={product.image[0]} className='max-w-[160px] inline-block' alt="" />
                    </Link>
                </div>
                <div className="product-content max-w-[260px]">
                    <Link to={`/vinyldetail/${product.id}`}>
                        <p className='product-title text-[#697077] uppercase mb-[5px] '>{product.title}</p>
                        <p className='artist font-semibold capitalize mb-[5px] text-ellipsis overflow-hidden'>{product.artist}</p>
                        <h4 className='price'>
                            {product.discountPrice !== product.price ? (
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
                </div>
                <div className="add-links-wrap absolute right-5 sm:block hidden">
                    <div className="add-clearfix mb-4 flex flex-col items-end gap-y-4">
                        {product.quantity > 0
                            ? (
                                <button onClick={() => addToCart(product, product.id)} className='uppercase px-[7px] bg-color-yellow border border-[#000] shadow-[4px_4px_0_#000000] h-9 min-w-[36px] text-[9px] font-poppins font-semibold z-[1] inline-block leading-9'>
                                    <BsBag className='text-[14px] inline-block mb-[6px] mr-1' />
                                    thêm vào giỏ hàng
                                </button>)
                            : (
                                <Link to={`/vinyldetail/${product.id}`} className='uppercase px-[7px] bg-color-yellow border border-[#000] shadow-[4px_4px_0_#000000] h-9 min-w-[36px] text-[9px] font-poppins font-semibold z-[1] inline-block leading-9'>
                                    <BsArrowRightShort className='text-[16px] inline-block mb-0.5 mr-1' />
                                    Xem chi tiết
                                </Link>)
                        }
                        <div className="wishlist">
                            <span onClick={() => addToWishlist(product)} className={`${wishlistItem ? "text-color-pink" : ""} cursor-pointer mx-[5px] min-w-[55px] w-9 h-9 flex text-[18px] items-center justify-center bg-white border border-[#000] shadow-[4px_4px_0_#000000]`}>
                                    ❤
                                </span>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default ListView