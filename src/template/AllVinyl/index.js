import React from 'react'
import { Link } from 'react-router-dom'

function AllVinyl() {
  return (
    <div className="main">
      <div className="max-w-[1160px] px-[15px] w-full mx-auto">
        <div className="px-2 5">
          <div className="wrap-header mt-10">
            <div className="min-h-[200px] px-[15px] text-white bg-[#697077] flex flex-col justify-center items-center">
              <h1 className='uppercase text-[36px] pt-[30px] mb-5 font-bold'>Đĩa Than</h1>
              <div className="pb-[30px]">
                <p>
                  <Link className='uppercase text-[15px] hover:underline px-[5px]'>đĩa mới</Link> | 
                  <Link className='uppercase text-[15px] hover:underline px-[5px]'>đĩa vintage</Link> | 
                  <Link className='uppercase text-[15px] hover:underline px-[5px]'>hot deal</Link> | 
                  <Link className='uppercase text-[15px] hover:underline px-[5px]'>genre: city pop</Link> 
                </p>
              </div>
            </div>
          </div>
          <div className="wrap-main">
            <main>
              <div className="wrap-loc mt-[15px]">
                <div className="flex">
                  
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllVinyl