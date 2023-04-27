import React from 'react'
import { Link } from 'react-router-dom'
import { IoAddOutline, IoRemoveOutline, IoChevronDownSharp, IoChevronUpSharp } from 'react-icons/io5'

function Cart({
    cart,
    total,
    removeFromCart,
    increaseAmount,
    decreaseAmount,
    clearCart,
    isOpen,
    setIsOpen,
    isShow,
    setIsShow,
    selectedPrice,
    setSelectedPrice,
    totalCart
}) {

    return (
        <div className="main">
            <div className="max-w-[1160px] px-[15px] w-full mx-auto">
                <div className="px-2 5">
                    {cart.length > 0 ? (
                        <div className="wrap-cart pb-[30px]">
                            <h2 className="text-[20px] leading-[27px] mt-5 uppercase ">Giỏ hàng</h2>
                            <div className="flex -mx-2.5 lg:flex-row flex-col">
                                <div className="flex-2 max-w-full lg:max-w-[66.666667%] px-2.5 w-full">
                                    <div className="mb-[30px] text-left border border-[#ececec] border-t-0">
                                        <div className="border-t border-[#999] mt-[30px] pt-[30px] pb-2.5 px-5">
                                            <div className='wrap-table'>
                                                <table className='mb-4 w-full text-[14px]'>
                                                    <thead>
                                                        <tr className='text-[#777] font-semibold uppercase text-left p-2.5 table-cell'></tr>
                                                        <tr className='text-[#777] font-semibold uppercase text-left p-2.5 table-cell'></tr>
                                                        <tr className='text-[#777] font-semibold uppercase text-left p-2.5 table-cell'>tên sản phẩm</tr>
                                                        <tr className='text-[#777] font-semibold uppercase text-left p-2.5 table-cell'>đơn giá</tr>
                                                        <tr className='text-[#777] font-semibold uppercase text-left p-2.5 table-cell'>số lượng</tr>
                                                        <tr className='text-[#777] font-semibold uppercase text-left p-2.5 table-cell'>tổng tiền</tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            cart.map(item => (
                                                                <tr>
                                                                    <td className='border-t border-[#ddd] p-2.5 '>
                                                                        <span onClick={() => removeFromCart(item.id)} className='text-[30px] font-extrabold cursor-pointer'>×</span>
                                                                    </td>
                                                                    <td className='border-t border-[#ddd] p-2.5 '>
                                                                        <Link to={`/vinyldetail/${item.id}`} className='inline-block'>
                                                                            <img className='max-w-[90px]' src={item.image[0]} alt="" />
                                                                        </Link>
                                                                    </td>
                                                                    <td className='border-t border-[#ddd] p-2.5'>
                                                                        <Link to={`/vinyldetail/${item.id}`} className='hover:underline  max-w-[125px] w-full inline-block'>
                                                                            {item.artist} - {item.title}
                                                                        </Link>
                                                                    </td>
                                                                    <td className='border-t border-[#ddd] p-2.5 '>
                                                                        {
                                                                            item.discountPrice ? (
                                                                                <span>{item.discountPrice.toLocaleString('en-US')} ₫</span>
                                                                            ) : (
                                                                                <span>{item.price.toLocaleString('en-US')} ₫</span>
                                                                            )
                                                                        }
                                                                    </td>
                                                                    <td className='border-t border-[#ddd] p-2.5 '>
                                                                        <div className="quantity flex">
                                                                            <button onClick={() => decreaseAmount(item.id)} className='bg-[#f4f4f4] w-[30px] relative left-[1px] h-[30px] cursor-pointer border border-[#c8bfc6]'>
                                                                                <IoRemoveOutline className='w-full' />
                                                                            </button>
                                                                            <button className='w-[90px] border border-[#c8bfc6]'>{item.amount}</button>
                                                                            <button onClick={() => increaseAmount(item.id)} className='bg-[#f4f4f4] w-[30px] relative -left-[1px] h-[30px] cursor-pointer border border-[#c8bfc6] px-1'>
                                                                                <IoAddOutline className='w-full' />
                                                                            </button>
                                                                        </div>
                                                                    </td>
                                                                    <td className='border-t border-[#ddd] p-2.5 '>
                                                                        {
                                                                            item.discountPrice ? (
                                                                                <span>{(item.discountPrice * item.amount).toLocaleString('en-US')} ₫</span>
                                                                            ) : (
                                                                                <span>{(item.price * item.amount).toLocaleString('en-US')} ₫</span>
                                                                            )
                                                                        }
                                                                    </td>
                                                                </tr>
                                                            ))
                                                        }
                                                    </tbody>
                                                </table>
                                                <div className="back mt-2 mb-5 border-t border-[#ddd]">
                                                    <div className="flex items-start justify-between mt-3">
                                                        <Link to='/allvinyl' className='border border-[rgba(0,0,0,0.09)] text-[#666] text-[0.8rem] py-[0.533rem] px-[0.933rem] leading-[1.4] uppercase hover:bg-[#f2f2f2] inline-block'>tiếp tục mua hàng</Link>
                                                        <span onClick={() => clearCart()} className='border border-[rgba(0,0,0,0.09)] text-[#666] text-[0.8rem] py-[0.533rem] px-[0.933rem] leading-[1.4] uppercase hover:bg-[#f2f2f2] cursor-pointer'>xóa giỏ hàng</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 max-w-full lg:max-w-[33.333333%] px-2.5">
                                    <div className="ship-price">
                                        <div className="mt-[30px]">
                                            <div className="flex mt-[30px] flex-col border border-[rgba(0,0,0,0.09)] transition-all">
                                                <div className="">
                                                    <h2 className='leading-[40px] font-bold relative bg-[#f7f7f7]'>
                                                        <span className='pr-10 text-[13px] block py-2.5 pl-5 font-primary'>
                                                            Dự toán vận chuyển và thuế
                                                        </span>
                                                        <IoChevronDownSharp className={`${isShow ? 'hidden' : 'block'} w-10 absolute top-[24px] right-2 cursor-pointer`} onClick={() => setIsShow(!isShow)} />
                                                        <IoChevronUpSharp className={`${isShow ? 'block' : 'hidden'} w-10 absolute top-[24px] right-2 cursor-pointer`} onClick={() => setIsShow(!isShow)} />
                                                    </h2>
                                                </div>
                                                <div className={`${isShow ? 'hidden' : 'block'} transition-all`}>
                                                    <ul className='p-[15px] pb-0'>
                                                        <li>
                                                            <input
                                                                className='mr-2'
                                                                type="radio"
                                                                name="price"
                                                                value="50000"
                                                                checked={selectedPrice === "50000"}
                                                                onChange={() => setSelectedPrice("50000")}
                                                            />
                                                            <label htmlFor="" className='mb-2 text-[14px] inline-block'>GIAO HÀNG + ĐÓNG GÓI HỘP NHẠC: 50,000 ₫</label>
                                                        </li>
                                                        <li>
                                                            <input
                                                                className='mr-2'
                                                                type="radio"
                                                                name="price"
                                                                value="65000"
                                                                checked={selectedPrice === "65000"}
                                                                onChange={() => setSelectedPrice("65000")}
                                                            />
                                                            <label htmlFor="" className='mb-2 text-[14px] inline-block'>COD: 65,000 ₫</label>
                                                        </li>
                                                    </ul>
                                                    <p className='p-[15px] pt-0'>Tùy chọn giao hàng sẽ được cập nhật trong quá trình thanh toán.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="checkout">
                                        <div className="flex mt-[30px] flex-col border border-[rgba(0,0,0,0.09)] transition-all">
                                            <div className="">
                                                <h2 className='leading-[40px] font-bold relative bg-[#f7f7f7]'>
                                                    <span className='pr-10 text-[13px] block py-2.5 pl-5 font-primary'>
                                                        Tổng tiền giỏ hàng
                                                    </span>
                                                    <IoChevronDownSharp className={`${isOpen ? 'hidden' : 'block'} w-10 absolute top-[24px] right-2 cursor-pointer`} onClick={() => setIsOpen(!isOpen)} />
                                                    <IoChevronUpSharp className={`${isOpen ? 'block' : 'hidden'} w-10 absolute top-[24px] right-2 cursor-pointer`} onClick={() => setIsOpen(!isOpen)} />
                                                </h2>
                                            </div>
                                            <div className={`${isOpen ? 'hidden' : ' block'} transition-all`}>
                                                <div className='p-[15px] pb-0 text-[15px]'>
                                                    <div className='flex justify-between items-center border-b border-[#dcdcdc]'>
                                                        <span className='p-2.5'>Tạm tính</span>
                                                        <span className='p-2.5 font-bold'>{total.toLocaleString('en-US')} ₫</span>
                                                    </div>
                                                    <div className='flex justify-between items-center'>
                                                        <span className='p-2.5 capitalize'>Tổng cộng</span>
                                                        <span className='p-2.5 text-[17px] font-bold'>{totalCart.toLocaleString('en-US')} ₫</span>
                                                    </div>
                                                </div>
                                                <div className="p-[15px] pt-0">
                                                    <Link to='/checkout' className='uppercase text-white bg-[#222] mb-2.5 p-2.5 w-full block text-center'>
                                                        Tiền hành thanh toán
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className='p-2.5 pt-0'>
                            <p className='cart-empty mt-[30px] py-2.5 px-[15px] mb-2.5 leading-normal text-[#2f6473] border border-[#d1edf6] bg-[#def2f8] '>Chưa có sản phẩm nào trong giỏ hàng.</p>
                            <p className='return-shop'>
                                <Link to='/allvinyl' className='py-2 px-3 bg-[#222] text-white inline-block hover:underline'>
                                    Quay trở lại của hàng
                                </Link>
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Cart