import React, { useContext, useState } from 'react'
import Logo from '../../assets/img/Logo.png'
import NavLinks from './NavLinks'
import { IoCartSharp, IoMenuSharp, IoSearchSharp, IoPersonSharp, IoHeartSharp, IoBasketSharp, IoPersonCircleSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'

import { SidebarContext } from '../../context/SidebarContext';
import { CartContext } from '../../context/CartContext';

function Index() {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { cart, total, itemAmount } = useContext(CartContext)
  const [showSearchInput, setShowSearchInput] = useState(false);

  return (
    <header>
      <div className="bg-color-primary text-white">
        <div className="container min-h-[55px] mx-auto max-w-[1160px] flex">
          <div className="header-left flex items-center">
            <div className="mr-10">
              <Link to='/' className=''>
                <img src={Logo} alt="" className='max-w-[151px]' />
              </Link>
            </div>
          </div>
          <NavLinks />
          <div className="header-right flex items-center flex-1 justify-end">
            <div className="search-popup cursor-pointer text-[25px] md:hidden py-2 px-3" onClick={() => setShowSearchInput(!showSearchInput)}>
              <IoSearchSharp />
            </div>
            <form action="" className={`${showSearchInput ? 'max-md:search-form' : 'max-md:hidden'} border-b-[1px] border-[#A2A9B0] leading-[34px] flex items-center`}>
              <input type="text" className='text-[#999] text-[13px] leading-[18px] pl-2.5 bg-transparent h-[33px] w-[398px] max-w-[283px] outline-none  max-md:search-input' placeholder='Tìm tên bài hát, album, nghệ sĩ...' />
              <button className='pl-2.5 h-8 w-[52px] max-md:hidden text-[20px]'>
                <IoSearchSharp />
              </button>
            </form>
            <div className="flex items-center justify-center text-[25px] h-9 relative cursor-pointer min-w-[44px] hover:text-color-yellow group">
              <IoCartSharp />
              <div className="bg-[#ff5b5b] absolute w-4 h-4 rounded-lg right-1 top-1 text-[10px] font-semibold leading-4 text-center overflow-hidden">{itemAmount}</div>
              <div className="before:border-[10px] before:border-[transparent_transparent_#fff_transparent] before:right-[0.7px] before:-top-5 before:mr-[calc(26px+0.5em-12px)] before:z-10 before:absolute hidden group-hover:block absolute w-[300px] top-10 mt-2 z-50 text-left shadow-[0_5px_8px_rgba(0,0,0,0.15)] text-[#696969] -right-2.5 leading-[38px] transition-all duration-200 cursor-auto">
                <div className="bg-white px-[15px] pt-2.5 pb-[5px] text-[13px] font-bold">
                  <div className="total-count px-2.5 py-[3px] border-b border-[#e6ebee]">
                    <span>{cart.length} ITEMS</span>
                  </div>
                  {cart.length > 0 ? (
                    <>
                      <ul className='max-h-[300px] h-auto m-h-[45px] overflow-y-auto overflow-x-hidden'>
                        {cart.map(item => (
                          <li className='px-2.5 py-[15px] flex border-b border-[#e6ebee] items-center' key={item.id}>
                            <div className="products-details flex-1 max-w-[calc(100%-80px)]">
                              <Link to={`/vinyldetail/${item.id}`} className='text-[14px] block leading-[19px] truncate capitalize'>
                                {item.artist} - {item.title}
                              </Link>
                              <span className='font-normal'>{item.amount} × 
                              {
                                item.discountPrice ? (
                                  <span className='text-black'> {item.discountPrice.toLocaleString('en-US')} ₫</span>
                                ) : (
                                  <span className='text-black'> {item.price.toLocaleString('en-US')} ₫</span>
                                )
                              }
                              </span>
                            </div>
                            <div className="products-image w-20 overflow-hidden">
                              <Link to={`/vinyldetail/${item.id}`}>
                                <img className='inline-block' src={item.image[0]} alt="" />
                              </Link>
                            </div>
                          </li>
                        ))}
                      </ul>
                      <p className='px-2.5 pt-5 pb-6 text-[#474747] leading-[1.4]'>
                        <span className='text-[16px]'>TỔNG SỐ PHỤ:</span>
                        <span className='text-[15px] float-right'>{total.toLocaleString('en-US')} ₫</span>
                      </p>
                      <div className="px-2.5 pb-5">
                        <Link to='/cart' className='font-normal border-2 tracking-wide rounded-sm text-black border-black uppercase font-poppins text-[12px] py-2.5 px-[25px] mb-2.5 mx-[5px] block leading-[1.4] text-center'>
                          Xem giỏ hàng
                        </Link>
                        <Link to='/checkout' className='font-normal tracking-wide rounded-sm text-white bg-[#222] leading-normal uppercase font-poppins text-[12px] py-3.5 px-[25px] mx-[5px] block text-center'>
                          Thanh toán
                        </Link>
                      </div>
                    </>
                  ) : (
                    <p className='pt-2 pb-3 text-center font-normal leading-[24px]'>Chưa có sản phẩm trong giỏ hàng</p>
                  )}
                </div>
              </div>
            </div>
            <div className="text-[25px] ml-2 relative cursor-pointer hover:text-color-yellow group h-full flex items-center max-lg:hidden">
              <IoPersonSharp />
              <ul className='before:border-[10px] before:border-color-primary before:right-[0.7px] before:-top-5 before:mr-[calc(26px+0.5em-12px)] before:z-10 before:absolute absolute top-[100%] right-0 group-hover:visible invisible w-[200px] bg-color-primary z-50'>
                <li>
                  <Link to='wishlist' className='subnav-item text-[12px] leading-6 py-2.5 px-4 uppercase'>
                    <IoHeartSharp className='inline-block mr-2 text-[16px] mb-1' />
                    Wishlist
                  </Link>
                </li>
                <li>
                  <Link to='' className='subnav-item text-[12px] leading-6 py-2.5 px-4 uppercase'>
                    <IoBasketSharp className='inline-block mr-2 text-[16px] mb-1' />
                    Theo dõi đơn hàng
                  </Link>
                </li>
                <li>
                  <Link to='/login' className='subnav-item text-[12px] leading-6 py-2.5 px-4 uppercase'>
                    <IoPersonCircleSharp className='inline-block mr-2 text-[16px] mb-[3px]' />
                    Đăng nhập/Đăng ký
                  </Link>
                </li>
              </ul>
            </div>
            <div className="menu cursor-pointer text-[30px] py-2 px-3 lg:hidden" onClick={() => setIsOpen(!isOpen)}>
              <IoMenuSharp className='' />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Index