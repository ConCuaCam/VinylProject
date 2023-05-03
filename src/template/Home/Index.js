import React from 'react'
import { Link } from 'react-router-dom'
import Hero from './Hero'
import Product from './Product'
import Content from './Content'


function Index({
  filteredProducts,
}) {
  return (
    <main>
      <div className="main-content-wrap mb-8">
        <Hero />
        <section className='mt-5 mb-2.5'>
          <div className="mx-auto max-w-[1160px] lg:px-4">
            <div className="p-2.5 flex flex-col items-center">
              <h2 className='flex items-center justify-between mb-5 w-full'>
                <span className='sm:text-[20px] font-bold pl-2.5'>SẢN PHẨM CÓ SẴN</span>
                <span className='pr-2.5'>
                  <Link to='' className='font-primary sm:text-[14px] text-[12px] underline'>Xem đĩa giảm giá</Link>
                </span>
              </h2>
              <div className="wrap-products">
                <ul className='grid xl:grid-cols-4 sm:grid-cols-3 grid-cols-2 mb-8'>
                  {filteredProducts().map((product) => {
                    return <Product product={product} key={product.id}/>;
                  })}
                </ul>
              </div>
              <Content />
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Index