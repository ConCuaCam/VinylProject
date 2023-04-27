import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { IoCloseSharp, IoCloseOutline } from 'react-icons/io5'
import { ModalCartContext } from '../../../context/ModalCartContext'
import { CartContext } from '../../../context/CartContext';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

function Index() {
    const { isOpen, handleClose } = useContext(ModalCartContext)
    const { cart, total, removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext)

    return (
        <div className={`${isOpen ? "opacity-100 visible" : "opacity-0 invisible"} fixed top-0 left-0 w-full h-full bg-[#000000b3] transition-all duration-300 z-50`}>
            <div className={`${isOpen ? "-translate-y-1/2" : "opacity-0 invisible"} bg-white flex flex-col max-h-[80%] text-[14px] fixed left-[50%] w-full max-w-[460px] transition-all duration-500 z-[999] top-[50%] translate-x-[-50%]`}>
                <div className="h-12 leading-[48px] pr-[20px] pl-5 font-bold bg-[#eee] flex items-center justify-between">
                    <span className='uppercase'>Giỏ hàng</span>
                    <Tippy content="ĐÓNG" placement='left' className='font-secondary'>
                        <button>
                            <IoCloseSharp className='text-[20px] cursor-pointer' onClick={() => handleClose()} />
                        </button>
                    </Tippy>
                </div>
                <div className='relative pt-2.5 mb-5 overflow-y-auto'>
                    <div className='px-5'>
                        {
                            cart.length > 0 ? (
                                cart.map(item => (
                                    <div className="flex py-2.5 items-center justify-between w-full group hover:-translate-x-5 transition-all duration-500 border-dashed border-[#eee] border-t first:border-none" key={item.id}>
                                        <div className="w-20 mr-2.5 flex-shrink-0">
                                            <Link to={`/vinyldetail/${item.id}`} onClick={() => handleClose()}>
                                                <img className='w-full h-auto' src={item.image[0]} alt="" />
                                            </Link>
                                        </div>
                                        <div className="flex grow-[1] mr-2.5 flex-col">
                                            <span className='block font-bold leading-[1.2] text-start mb-[5px]'>
                                                <Link to={`/vinyldetail/${item.id}`} onClick={() => handleClose()}>{item.artist} - {item.title}</Link>
                                            </span>
                                            {
                                                item.discountPrice ? (
                                                    <span>{item.discountPrice.toLocaleString('en-US')} ₫</span>
                                                ) : (
                                                    <span>{item.price.toLocaleString('en-US')} ₫</span>
                                                )
                                            }
                                        </div>
                                        <div className="item-qty">
                                            <div className="flex relative text-center">
                                                <span onClick={() => decreaseAmount(item.id)} className='w-[30px] h-[30px] hover:bg-[#ddd] leading-[30px] bg-[#eee] text-[12px] block cursor-pointer transition-all duration-500'>-</span>
                                                <span className='w-[30px] h-[30px] leading-[30px] bg-[#eee] text-[12px] block cursor-pointer transition-all duration-500'>{item.amount}</span>
                                                <span onClick={() => increaseAmount(item.id)} className='w-[30px] h-[30px] hover:bg-[#ddd] leading-[30px] bg-[#eee] text-[12px] block cursor-pointer transition-all duration-500'>+</span>
                                            </div>
                                        </div>
                                        <Tippy content="Xóa bỏ" placement='left' className='font-secondary'>
                                            <div className="item-remove absolute top-1/2 right-0 block w-5 h-5 leading-5 text-[#444] text-[20px] text-center cursor-pointer transition-all duration-500 group-hover:translate-x-[25px] -translate-y-1/2 group-hover:opacity-100 group-hover:visible opacity-0 invisible">
                                                <IoCloseOutline className='' onClick={() => removeFromCart(item.id)} />
                                            </div>
                                        </Tippy>
                                    </div>
                                ))
                            ) : (
                                <div className='p-5 text-center'>Không có sản phẩm nào trong giỏ hàng!</div>
                            )
                        }
                    </div>
                </div>
                <div className="pb-5">
                    {
                        cart.length > 0 && (
                            <>
                                <div className="flex px-5 items-center justify-between">
                                    <span>Tổng</span>
                                    <span className='font-bold'>{total.toLocaleString('en-US')} ₫</span>
                                </div>
                                <div className="px-[15px] pt-[15px]">
                                    <div className="flex w-full">
                                        <div className="w-1/2 mx-[5px]">
                                            <Link to='/cart' onClick={() => handleClose()} className='h-10 leading-9 text-center px-2.5 font-bold border-2 w-full inline-block uppercase border-[#222] hover:text-white hover:bg-[#222] transition-all duration-500'>Giỏ hàng</Link>
                                        </div>
                                        <div className="w-1/2 mx-[5px]">
                                            <Link to='/checkout' onClick={() => handleClose()} className='h-10 leading-9 text-center px-2.5 font-bold border-2 w-full inline-block uppercase border-[#222] hover:text-white hover:bg-[#222] transition-all duration-500'>Thanh toán</Link>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    }
                    <div className="text-center px-5 mt-[15px]">
                        <span onClick={() => handleClose()} className='uppercase cursor-pointer text-[#444] border-b border-[#444] hover:opacity-70'>tiếp tục mua hàng</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index