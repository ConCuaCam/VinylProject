import React from 'react'

function Checkout({
    cart,
    total,
    totalCart,
    selectedPrice,
    firstName,
    lastName,
    address,
    email,
    city,
    phone,
    setFirstName,
    setLastName,
    setEmail,
    setAddress,
    setCity,
    setPhone,
    handleCheckoutSubmit,
    formError
}) {
    return (
        <div className="main">
            <div className="max-w-[1160px] px-[15px] w-full mx-auto">
                {
                    formError && <ul className='bg-[#f6d6d5] text-[#6d1a17] border border-[#f2c6c4] py-2.5 px-[15px] list-disc'>
                        <li className='list-inside text-[14px]'>
                            {formError}
                        </li>
                    </ul>
                }
                <div className="px-2 5 mt-10 pb-[30px]">
                    <div className="wrap-checkout">
                        <form action="" onSubmit={handleCheckoutSubmit}>
                            <div className="flex -mx-2.5 lg:flex-row flex-col">
                                <div className="flex-1 max-w-full lg:max-w-[33.3333%] relative px-2.5">
                                    <div className="wrap-info">
                                        <h3 className='uppercase font-bold text-[25px] mb-5'>Chi tiết thanh toán</h3>
                                        <div className="info">
                                            <div className="flex justify-between mb-[15px] md:flex-row flex-col">
                                                <p className='block w-full md:w-[48%] mb-[15px] md:mb-0'>
                                                    <label htmlFor="firstName" className='block mb-2'>Tên <span className='text-color-red'>*</span></label>
                                                    <input type="text" id="firstName" onChange={(e) => setFirstName(e.target.value)} value={firstName} className='px-3 py-2 border border-[#ccc] outline-none w-full' />
                                                </p>
                                                <p className='block w-full md:w-[48%]'>
                                                    <label htmlFor="lastName" className='block mb-2'>Họ <span className='text-color-red'>*</span></label>
                                                    <input type="text" id="lastName" onChange={(e) => setLastName(e.target.value)} value={lastName} className='px-3 py-2 border border-[#ccc] outline-none w-full' />
                                                </p>
                                            </div>
                                            <p className='block w-full mb-[15px]'>
                                                <label htmlFor="address" className='block mb-2'>Địa chỉ <span className='text-color-red'>*</span></label>
                                                <input type="text" id="address" onChange={(e) => setAddress(e.target.value)} value={address} className='px-3 py-2 border border-[#ccc] outline-none w-full' />
                                            </p>
                                            <p className='block w-full mb-[15px]'>
                                                <label htmlFor="city" className='block mb-2'>Tỉnh / Thành phố <span className='text-color-red'>*</span></label>
                                                <input type="text" id="city" onChange={(e) => setCity(e.target.value)} value={city} className='px-3 py-2 border border-[#ccc] outline-none w-full' />
                                            </p>
                                            <p className='block w-full mb-[15px]'>
                                                <label htmlFor="phone" className='block mb-2'>Số điện thoại <span className='text-color-red'>*</span></label>
                                                <input type="text" id="phone" onChange={(e) => setPhone(e.target.value)} value={phone} className='px-3 py-2 border border-[#ccc] outline-none w-full' />
                                            </p>
                                            <p className='block w-full mb-[15px]'>
                                                <label htmlFor="email" className='block mb-2'>Địa chỉ email <span className='text-color-red'>*</span></label>
                                                <input type="text" id="email" onChange={(e) => setEmail(e.target.value)} value={email} className='px-3 py-2 border border-[#ccc] outline-none w-full' />
                                            </p>
                                            <p className='block w-full mb-[15px]'>
                                                <label htmlFor="note" className='block mb-2'>Ghi chú đơn hàng (tùy chọn)</label>
                                                <textarea rows="2" cols="5" id="note" className='px-3 min-h-[300px] py-2 border border-[#ccc] outline-none w-full font-secondary text-[#777] text-[14px]' placeholder='Ghi chú về đơn hàng, ví dụ: thời gian chỉ dẫn địa điểm giao hàng chi tiết hơn' />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-[2] max-w-full lg:max-w-[66.6667%] relative px-2.5">
                                    <div className="wrap-info">
                                        <h3 className='uppercase font-bold text-[25px] mb-5'>Phương thức thanh toán</h3>
                                        <table className='bg-[#f2f4f8] p-5 w-full text-[14px] block leading-6'>
                                            <thead>
                                                <tr>
                                                    <th className='w-[40%] font-bold uppercase p-2.5 text-left'>sản phẩm</th>
                                                    <th className='font-bold uppercase p-2.5 text-left'>tạm tính</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    cart.map(item => (
                                                        <tr key={item.id}>
                                                            <td className='w-[40%] border-t border-r border-[#ccc] p-2.5'> {item.artist} - {item.title}<span className='font-bold'> × {item.amount}</span></td>
                                                            <td className='border-t border-[#ccc] p-2.5'>
                                                                {
                                                                    item.discountPrice ? (
                                                                        <span>{item.discountPrice.toLocaleString('en-US')} ₫</span>
                                                                    ) : (
                                                                        <span>{item.price.toLocaleString('en-US')} ₫</span>
                                                                    )
                                                                }
                                                            </td>
                                                        </tr>
                                                    ))
                                                }
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <td className='uppercase font-bold w-[40%] border-t border-r border-[#ccc] p-2.5'>tạm tính</td>
                                                    <td className='border-t border-[#ccc] p-2.5'>{total.toLocaleString('en-US')} ₫</td>
                                                </tr>
                                                <tr>
                                                    <td className='uppercase font-bold w-[40%] border-t border-r border-[#ccc] p-2.5'>phí giao hàng</td>
                                                    <td className='border-t border-[#ccc] p-2.5'>{parseInt(selectedPrice).toLocaleString('en-US')} ₫</td>
                                                </tr>
                                                <tr>
                                                    <td className='uppercase font-bold w-[40%] border-t border-r border-[#ccc] p-2.5'>tổng</td>
                                                    <td className='border-t border-[#ccc] p-2.5 font-bold'>{totalCart.toLocaleString('en-US')} ₫</td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                        <div className="dat-hang p-5 bg-[#f2f4f8]">
                                            <p className='mb-5'>Thông tin cá nhân của bạn sẽ được sử dụng để xử lý đơn hàng, tăng trải nghiệm sử dụng website, và cho các mục đích cụ thể khác đã được mô tả trong chính sách riêng tư.</p>
                                            <h3 className='uppercase font-bold text-[25px] mb-5'>tổng cộng:  {totalCart.toLocaleString('en-US')} ₫</h3>
                                            <button type='submit' className='bg-color-primary text-[20px] font-bold text-white px-10 py-2.5 uppercase'>đặt hàng</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout