import React from 'react'
import { Link } from 'react-router-dom'

function Wishlist({ wishlist, removeFromWishlist }) {
    return (
        <div className="main">
            <div className="max-w-[1160px] px-[15px] w-full mx-auto">
                <div className="pb-[30px]">
                    <div className="px-2 5">
                        <form action="" className='text-[14px]'>
                            <div className="mb-[30px] mt-5 border border-[#ececec] border-t-0 min-h-[100px]">
                                <div className="pt-[30px] pb-2.5 px-5 mt-[30px] border-t border-[#999]">
                                    <div className="title">
                                        <h2 className='uppercase mb-[30px] text-[18px] py-2.5'>my wishlist</h2>
                                    </div>
                                    <table className='mb-4 w-full text-[14px]'>
                                        <thead>
                                            <tr>
                                                <th className='text-[#777] font-semibold uppercase text-left p-2.5 hidden md:table-cell w-[40px]'></th>
                                                <th className='text-[#777] font-semibold uppercase text-left p-2.5 hidden md:table-cell w-[80px]'></th>
                                                <th className='text-[#777] font-semibold uppercase text-left p-2.5 hidden md:table-cell'>tên sản phẩm</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                wishlist.length > 0 ? (
                                                    <>
                                                        {
                                                            wishlist.map((item, index) => (
                                                                <tr className='block md:table-row md:py-0 py-2.5 md:border-0 border-b border-{#ddd]' key={index}>
                                                                    <td className='md:border-t hidden md:table-cell md:text-left text-center border-[#ddd] p-2.5 '>
                                                                        <span onClick={() => removeFromWishlist(item.id)} className='text-[30px] font-extrabold cursor-pointer'>×</span>
                                                                    </td>
                                                                    <td className='md:border-t block md:table-cell md:text-left text-center border-[#ddd] p-2.5 relative'>
                                                                        <Link to={`/vinyldetail/${item.id}`} className='inline-block'>
                                                                            <img className='max-w-[90px]' src={item.image[0]} alt="" />
                                                                        </Link>
                                                                        <span onClick={() => removeFromWishlist(item.id)} className='block md:hidden absolute right-3 top-0 text-[30px] font-extrabold cursor-pointer'>×</span>
                                                                    </td>
                                                                    <td className='md:border-t block md:table-cell md:text-left text-center border-[#ddd] p-2.5'>
                                                                        <Link to={`/vinyldetail/${item.id}`} className='hover:underline w-full block '>
                                                                            {item.artist} - {item.title}
                                                                        </Link>
                                                                    </td>
                                                                </tr>
                                                            ))
                                                        }</>
                                                ) : (
                                                    <tr>
                                                        <td colSpan="3" className="text-center border-t p-2.5 border-[#ddd]">No products added to the wishlist</td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wishlist