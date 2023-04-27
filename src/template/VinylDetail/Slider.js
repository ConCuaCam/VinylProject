import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Slider( {
    product
} ) {
    const options = {
        items: 1,
        rewind: true,
        dots: false,
      };

    return (
        <div className="w-full border border-[#f4f4f4] transition-all duration-500">
            <OwlCarousel className='owl-theme' {...options}>
                {product.image.map((image, index) => (
                    <div className='' key={index}>
                        <img src={image} className='' alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </OwlCarousel>
            <p className='absolute z-50 bottom-2.5 left-2.5 bg-[#ffffff9c] px-3 py-0.5 text-[14px]'>Hình ảnh minh họa. Vui lòng xem chi tiết chính xác tại mục mô tả sản phẩm</p>
        </div>
    )
}

export default Slider