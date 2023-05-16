import React from 'react'
import { BsFillMusicPlayerFill, BsBag, BsFillHouseDoorFill } from 'react-icons/bs'
import FormatPrice from '../../Convert/FormatPrice'
import { Link } from 'react-router-dom';

function Info({ singleProduct, addToCart, addToWishlist, wishlist }) {
    const {
        id,
        title,
        artist,
        price,
        releaseYear,
        quantity,
        weight,
        discColor,
        format,
        publisher,
        country,
        genre,
        discountPrice
    } = singleProduct
    const wishlistItem = wishlist.find((item) => {
        return item.id === singleProduct.id;
      })  
    return (
        <>
            <h2 className='text-[25px] font-bold mb-[5px] uppercase'>
                <Link to=''>{title}</Link>
            </h2>
            <p className='text-[25px] mb-[5px]'>{artist}</p>
            <p className='mb-[5px] text-[#697077]'>{format}</p>
            <h4 className='text-[21px] my-2.5 flex items-center'>
                {discountPrice !== price ? (
                    <>
                        <span className='text-[19px]  font-light text-color-primary line-through mr-1.5'>{<FormatPrice price={price} />}</span>
                        <span className=' text-[21px] font-bold mr-3'>{<FormatPrice discountPrice={discountPrice} />}</span>
                    </>
                ) : (
                    <span className='font-bold mr-3'>{<FormatPrice price={price} />}</span>
                )}
                {quantity > 0
                    ? (
                        <span className='mt-[5px] mr-[5px] px-2 py-1 text-color-green bg-[#dff3de] inline-block text-[10px] font-semibold uppercase leading-[160%] h-[26px]'>còn hàng</span>
                    )
                    : (<span className='mt-[5px] mr-[5px] px-2 py-1 text-color-red bg-[#ffcec4] inline-block text-[10px] font-semibold uppercase leading-[160%] h-[26px]'>hết hàng</span>)
                }
            </h4>
            <p className='mb-[5px] text-[#697077]'>Mã sản phẩm: {id}</p>
            {/* button */}
            <div className="mt-2 5 py-3.5 flex border-t border-b border-[#e7e7e7]">
                <Link to={`https://www.youtube.com/results?search_query=${title}-${artist}`} target='_blank' className='mx-2.5 min-w-[50px] w-10 h-10 flex items-center justify-center bg-white border border-[#000] shadow-[4px_4px_0_#000000]'>
                    <BsFillMusicPlayerFill className='text-[16px]' />
                </Link>
                <button onClick={() => addToWishlist(singleProduct)} className={`${wishlistItem ? "text-color-pink" : ""} mx-2.5 text-[20px] min-w-[65px] w-10 h-10 flex items-center justify-center bg-white border border-[#000] shadow-[4px_4px_0_#000000]`}>
                    ❤
                </button>
                {singleProduct.quantity > 0
                    ? (
                        <button onClick={() => addToCart(singleProduct, id)} className='uppercase ml-3 px-[7px] bg-color-yellow border border-[#000] shadow-[4px_4px_0_#000000] h-10 lg:min-w-[240px] md:min-w-[170px]  lg:text-[14px] text-[12px] font-poppins font-semibold z-[1] inline-block transition-all duration-500'>
                            <BsBag className='text-[14px] inline-block mb-[6px] mr-1' />
                            thêm vào giỏ hàng
                        </button>)
                    : (
                        <Link to='/' className='flex items-center justify-center uppercase ml-3 px-[7px] bg-white border border-[#000] shadow-[4px_4px_0_#000000] h-10 lg:min-w-[240px] text-[14px] font-semibold z-[1] transition-all duration-500'>
                            <BsFillHouseDoorFill className='text-[16px] inline-block mb-1 mr-1' />
                            Tiếp tục mua hàng
                        </Link>)
                }
            </div>
            <h4 className="mt-[30px] mb-[14px] pb-2.5 text-[20px] font-bold border-b-2 border-[#a2a9b0]">Thông tin đĩa</h4>
            <table className='w-full'>
                <tbody>
                    <tr>
                        <th className='py-[3px] capitalize min-w-[130px] text-color-primary font-light text-left w-1/2'>Trọng lượng</th>
                        <th className='py-[3px] capitalize min-w-[130px] text-color-primary font-light text-left w-1/2'>{weight}</th>
                    </tr>
                    <tr>
                        <th className='py-[3px] capitalize min-w-[130px] text-color-primary font-light text-left w-1/2'>Năm phát hành</th>
                        <th className='py-[3px] capitalize min-w-[130px] text-color-primary font-light text-left w-1/2'>{releaseYear}</th>
                    </tr>
                    <tr>
                        <th className='py-[3px] capitalize min-w-[130px] text-color-primary font-light text-left w-1/2'>Thể loại</th>
                        <th className='py-[3px] capitalize min-w-[130px] text-color-primary font-light text-left w-1/2'>
                            {Array.isArray(genre) ?
                                genre.map((g, index) => (
                                    <React.Fragment key={index}>
                                        {g}
                                        {index !== genre.length - 1 && ", "}
                                    </React.Fragment>
                                ))
                                : genre}
                        </th>
                    </tr>
                    <tr>
                        <th className='py-[3px] capitalize min-w-[130px] text-color-primary font-light text-left w-1/2'>Màu đĩa</th>
                        <th className='py-[3px] capitalize min-w-[130px] text-color-primary font-light text-left w-1/2'>{discColor}</th>
                    </tr>
                    <tr>
                        <th className='py-[3px] capitalize min-w-[130px] text-color-primary font-light text-left w-1/2'>Hãng phát hành</th>
                        <th className='py-[3px] capitalize min-w-[130px] text-color-primary font-light text-left w-1/2'>{publisher}</th>
                    </tr>
                    <tr>
                        <th className='py-[3px] capitalize min-w-[130px] text-color-primary font-light text-left w-1/2'>Quốc gia</th>
                        <th className='py-[3px] capitalize min-w-[130px] text-color-primary font-light text-left w-1/2'>{country}</th>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Info