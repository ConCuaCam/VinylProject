import { IoChevronDownSharp, IoChevronForwardSharp } from 'react-icons/io5'

const links = [
    {
        display: 'Đĩa Than',
        path: '/allvinyl',
        icon: <IoChevronDownSharp className='inline-block ml-1' />,
        submenu: true,
        sublinks: [
            {
                display: 'Đĩa Vintage',
                path: '/',
            },
            {
                display: 'Đĩa Mới',
                path: '/'
            },
            {
                display: 'Đĩa giá rẻ',
                path: '/'
            },
            {
                display: 'Tìm theo nghệ sĩ',
                path: '/'
            },
            {
                display: 'Tìm theo thời kỳ',
                path: '/',
            },
            {
                display: 'Tìm theo thể loại',
                path: '/'
            },
            {
                display: 'Tìm theo tâm trạng',
                path: '/'
            },
            {
                display: 'Xem tất cả',
                path: '/allvinyl',
                icon: <IoChevronForwardSharp className='inline-block ml-1 mb-[3px]' />
            }
        ]
    },
    {
        display: 'Mâm Đĩa',
        path: '/'
    },
    {
        display: 'Cho Người Mới',
        path: '/'
    },
    {
        display: 'Blog',
        path: '/'
    }
]

export default links