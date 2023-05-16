import React from 'react'
import { Link } from 'react-router-dom';

function PageNavigation({
    title,
    artist
}) {
    return (
        <section className='py-3 text-[14px] bg-[#F2F4F8] border border-[#dfdfdf]'>
            <div className="max-w-[1160px] px-[15px] w-full mx-auto">
                <div className="flex pl-5 pr-2.5">
                    <div className="pr-[30px]">
                        <ul className="flex md:flex-row flex-col">
                            <li className='font-bold uppercase'>
                                <Link to='/' className='min-w-[95px] w-[full] block'>Trang chủ /</Link>
                            </li>
                            <li className='font-bold uppercase text-[#697077]'>{artist} - {title}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PageNavigation