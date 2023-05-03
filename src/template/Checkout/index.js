import React from 'react'

function Checkout() {
    return (
        <div className="main">
            <div className="max-w-[1160px] px-[15px] w-full mx-auto">
                <div className="px-2 5 mt-20 pb-[30px]">
                    <div className="wrap-checkout">
                        <form action="">
                            <div className="flex -mx-2.5">
                                <div className="flex-1 max-w-[33.3333%] relative px-2.5">
                                    <div className="wrap-info">
                                        <h3 className='uppercase font-bold text-[25px] mb-5'>Chi tiết thanh toán</h3>
                                        <div className="info">
                                            <p className='block float-left w-[48%] mb-[15px]'>
                                                <label htmlFor="" className='block mb-2'>Tên <span className='text-color-red'>*</span></label>
                                                <input type="text" className='px-3 py-2 border border-[#ccc] outline-none w-full' />
                                            </p>
                                            <p className='block float-right w-[48%] mb-[15px]'>
                                                <label htmlFor="" className='block mb-2'>Họ <span className='text-color-red'>*</span></label>
                                                <input type="text" className='px-3 py-2 border border-[#ccc] outline-none w-full' />
                                            </p>
                                            <p className='block w-full mb-[15px]'>
                                                <label htmlFor="" className='block mb-2'>Địa chỉ <span className='text-color-red'>*</span></label>
                                                <input type="text" className='px-3 py-2 border border-[#ccc] outline-none w-full' />
                                            </p>
                                            <p className='block w-full mb-[15px]'>
                                                <label htmlFor="" className='block mb-2'>Tỉnh / Thành phố <span className='text-color-red'>*</span></label>
                                                <input type="text" className='px-3 py-2 border border-[#ccc] outline-none w-full' />
                                            </p>
                                            <p className='block w-full mb-[15px]'>
                                                <label htmlFor="" className='block mb-2'>Số điện thoại <span className='text-color-red'>*</span></label>
                                                <input type="text" className='px-3 py-2 border border-[#ccc] outline-none w-full' />
                                            </p>
                                            <p className='block w-full mb-[15px]'>
                                                <label htmlFor="" className='block mb-2'>Địa chỉ email <span className='text-color-red'>*</span></label>
                                                <input type="text" className='px-3 py-2 border border-[#ccc] outline-none w-full' />
                                            </p>
                                            <p className='block w-full mb-[15px]'>
                                                <label htmlFor="" className='block mb-2'>Ghi chú đơn hàng (tùy chọn)</label>
                                                <textarea rows="2" cols="5" className='px-3 min-h-[300px] py-2 border border-[#ccc] outline-none w-full font-secondary text-[#777] text-[14px]' placeholder='Ghi chú về đơn hàng, ví dụ: thời gian chỉ dẫn địa điểm giao hàng chi tiết hơn' />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-[2] max-w-[66.6667%] relative px-2.5">
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
                                                <tr>
                                                    <td className='w-[40%] border-t border-r border-[#ccc] p-2.5'>omoko Aran - Fuyu Kukan (Hồng)  <span className='font-bold'>× 1</span></td>
                                                    <td className='border-t border-[#ccc] p-2.5'>1,470,000 ₫</td>
                                                </tr>
                                                <tr>
                                                    <td className='w-[40%] border-t border-r border-[#ccc] p-2.5'>omoko Aran - Fuyu Kukan (Hồng)  <span className='font-bold'>× 1</span></td>
                                                    <td className='border-t border-[#ccc] p-2.5'>1,470,000 ₫</td>
                                                </tr>
                                                <tr>
                                                    <td className='w-[40%] border-t border-r border-[#ccc] p-2.5'>omoko Aran - Fuyu Kukan (Hồng)  <span className='font-bold'>× 1</span></td>
                                                    <td className='border-t border-[#ccc] p-2.5'>1,470,000 ₫</td>
                                                </tr>
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <td className='uppercase font-bold w-[40%] border-t border-r border-[#ccc] p-2.5'>tạm tính</td>
                                                    <td className='border-t border-[#ccc] p-2.5'>4,380,000 ₫</td>
                                                </tr>
                                                <tr>
                                                    <td className='uppercase font-bold w-[40%] border-t border-r border-[#ccc] p-2.5'>GIAO HÀNG</td>
                                                    <td className='border-t border-[#ccc] p-2.5'>4,380,000 ₫</td>
                                                </tr>
                                                <tr>
                                                    <td className='uppercase font-bold w-[40%] border-t border-r border-[#ccc] p-2.5'>tổng</td>
                                                    <td className='border-t border-[#ccc] p-2.5 font-bold'>4,380,000 ₫</td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                        <div className="dat-hang p-5 bg-[#f2f4f8]">
                                            <p className='mb-5'>Thông tin cá nhân của bạn sẽ được sử dụng để xử lý đơn hàng, tăng trải nghiệm sử dụng website, và cho các mục đích cụ thể khác đã được mô tả trong chính sách riêng tư.</p>
                                            <h3 className='uppercase font-bold text-[25px] mb-5'>tổng cộng:  4,380,000 ₫</h3>
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