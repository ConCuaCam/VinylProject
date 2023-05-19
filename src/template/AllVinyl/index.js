import React from 'react'
// import { Link } from 'react-router-dom'
import { FaTh, FaThList } from 'react-icons/fa'
import ListView from './ListView'
import GridView from './GridView'
import FormatPrice from '../../Convert/FormatPrice'
function AllVinyl({
  filter_products,
  grid_view,
  setGridView,
  setListView,
  sorting,
  addToCart,
  updateFilterValue,
  all_genres,
  price,
  maxPrice,
  minPrice,
  spanStyle,
  addToWishlist,
  wishlist
}) {
  return (
    <div className="main">
      <div className="max-w-[1160px] px-[15px] w-full mx-auto">
        <div className="px-2 5">
          <div className="wrap-header mt-10">
            <div className="min-h-[200px] px-[15px] text-white bg-[#697077] flex flex-col justify-center items-center">
              <h1 className='uppercase text-[36px] pt-[30px] mb-5 font-bold'>Đĩa Than</h1>
              {/* <div className="pb-[30px]">
                <p>
                  <Link className='uppercase text-[15px] hover:underline px-[5px]'>đĩa mới</Link> |
                  <Link className='uppercase text-[15px] hover:underline px-[5px]'>đĩa vintage</Link> |
                  <Link className='uppercase text-[15px] hover:underline px-[5px]'>hot deal</Link> |
                  <Link className='uppercase text-[15px] hover:underline px-[5px]'>genre: city pop</Link>
                </p>
              </div> */}
            </div>
          </div>
          <div className="wrap-main">
            <div className="wrap-loc mt-[15px]">
              <div className="flex gap-5 flex-col sm:flex-row">
                <div className="wrap-select w-full sm:w-1/2 flex-1">
                  <label htmlFor="genre" className='uppercase font-secondary mb-1 block'>Thể loại</label>
                  <select name="genre" id="genre" onClick={updateFilterValue} className='max-w-full text-ellipsis w-full select flex-1 font-primary font-medium text-[#999] px-2.5 py-[5px] uppercase text-[13px] border border-black cursor-text h-11 outline-none'>
                    <option value="all">tất cả</option>
                    {all_genres.map(genre => (
                      <option key={genre} value={genre} name="genre">{genre}</option>
                    ))}
                  </select>
                </div>
                <div className="wrap-select w-full sm:w-1/2 flex-1">
                  <label htmlFor="situation" className='block uppercase font-secondary mb-1'>Tình trạng</label>
                  <select name="situation" id="situation" onClick={updateFilterValue} className='w-full select flex-1 font-primary font-medium text-[#999] px-2.5 py-[5px] uppercase text-[13px] border border-black cursor-text h-11 outline-none'>
                    <option value="all">tất cả</option>
                    <option value="conhang">còn hàng</option>
                    <option value="hethang">hết hàng</option>
                  </select>
                </div>
                <div className="wrap-price flex-1">
                  <span htmlFor="" className='uppercase font-secondary'>khoảng giá</span>
                  <div className="flex flex-col relative mt-5">
                    <input type="range" name="price" min={minPrice} max={maxPrice} value={price} onChange={updateFilterValue} />
                    <div className="flex justify-between text-[12px] mt-1">
                      <span><FormatPrice price={minPrice} /></span>
                      <span className='absolute -top-[22px] text-white bg-[#e27c7c] px-2 py-[1px] rounded-xl text-center' style={spanStyle}><FormatPrice price={price} /></span>
                      <span><FormatPrice price={maxPrice} /></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="wrap-sort text-[13px] mt-[30px] mb-[15px] flex justify-between items-center">
              <form action="" className='flex justify-center items-center'>
                <label htmlFor="sort" className='uppercase font-bold font-secondary mr-1'>Sắp xếp bởi: </label>
                <select name="sort" id="sort" onClick={sorting} className='uppercase outline-none w-[220px] border border-[#eee] font-bold text-[#777] text-[1em] h-[34px] pl-2'>
                  <option value="#">thứ tự mặc định</option>
                  <option value="lowest">giá (tăng dần)</option>
                  <option value="highest">giá (giảm dần)</option>
                  <option value="increase">năm phát hành (tăng dần)</option>
                  <option value="decrease">năm phát hành (giảm dần)</option>
                </select>
              </form>
              <div className="grid-toggle">
                <FaTh onClick={setGridView} className={`${grid_view ? "text-color-pink" : ""} w-[20px] h-[20px] inline-block cursor-pointer mr-3`} />
                <FaThList onClick={setListView} className={`${grid_view ? "" : "text-color-pink"} w-[20px] h-[20px] inline-block cursor-pointer`} />
              </div>
            </div>
            {
              filter_products.length > 0 ? (
                grid_view ? (
                  <div className="wrap-products">
                    <ul className='grid xl:grid-cols-4 sm:grid-cols-3 grid-cols-2 mb-8 -mx-2.5'>
                      {filter_products.map((product) => {
                        return <GridView product={product} key={product.id} addToCart={addToCart} addToWishlist = {addToWishlist} wishlist = {wishlist}/>;
                      })}
                    </ul>
                  </div>
                ) : (
                  <div className="wrap-products">
                    <ul className='grid lg:grid-cols-2 grid-cols-1 mb-8'>
                      {filter_products.map((product) => {
                        return <ListView product={product} key={product.id} addToCart={addToCart} addToWishlist = {addToWishlist} wishlist = {wishlist} />;
                      })}
                    </ul>
                  </div>
                )
              ) : (
                <div className="min-h-[300px] flex justify-center items-center flex-col">
                  <h1 className='uppercase font-bold font-secondary text-[20px]'>không tìm thấy kết quả nào</h1>
                  <img src="https://vocrecords.vn/wp-content/uploads/2022/08/empty-box-1.svg" alt="" />
                </div>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllVinyl