import React, { useState } from 'react'

function Slider({
    singleProduct
}) {
    const {
        image = []
    } = singleProduct

    const [mainImage, setMainImage] = useState(image[0])
    return (
        <>
            <div className="product-img w-full mb-2 relative">
                <div className="w-full border border-[#f4f4f4] transition-all duration-500 mr-2">
                    <img src={mainImage} className='w-full' alt='' />
                    <p className='absolute z-10 bottom-2.5 left-2.5 bg-[#ffffff9c] px-3 py-0.5 text-[14px]'>Hình ảnh minh họa. Vui lòng xem chi tiết chính xác tại mục mô tả sản phẩm</p>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-x-3">
                {image.map((img, index) => (
                    <div className='transition-all' key={index}>
                        <img src={img} className='w-full cursor-pointer hover:opacity-90' alt='' onClick={() => setMainImage(img)} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default Slider