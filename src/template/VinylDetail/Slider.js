import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Sliders ( {
    product
} ) {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <div className="w-full border border-[#f4f4f4] transition-all duration-500">
             <Slider {...settings}>
                 {product.image.map((image, index) => ( 
                    <div className='' key={index}>
                        <img src={image} className='w-full' alt='' />
                    </div>
                 ))} 
            </Slider> 
            <p className='absolute z-10 bottom-2.5 left-2.5 bg-[#ffffff9c] px-3 py-0.5 text-[14px]'>Hình ảnh minh họa. Vui lòng xem chi tiết chính xác tại mục mô tả sản phẩm</p>
        </div>
    )
}

export default Sliders