import React from 'react'
import {BsFillCassetteFill} from 'react-icons/bs'

function Note() {
    return (
        <div className="my-5 p-[19px] bg-[#f2f4f8] text-[15px] md:block hidden">
            <h4 className='flex items-center text-[20px] font-bold mb-[14px]'>
                <BsFillCassetteFill className='mr-3 text-[25px]' />
                Lưu ý khi mua hàng
            </h4>
            <div className="px-4">
                <div className="p-2.5">
                    <ul className='pl-[15px]list-disc'>
                        <li className='leading-6'>Vui lòng thanh toán trước 100% giá trị đối với đơn hàng có <span className='font-bold'>sản phẩm order</span> (bao gồm cả phí ship).</li>
                        <li className='leading-6'>Thanh toán COD chỉ áp dụng với đĩa <span className='font-bold'>có sẵn.</span></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Note