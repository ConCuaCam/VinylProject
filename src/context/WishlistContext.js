import React, { useState, useEffect, createContext } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const WishlistContext = createContext()

function WishlistProvider({ children }) {

    const [wishlist, setWishlist] = useState(JSON.parse(localStorage.getItem("localWishlist")) || [])

    useEffect(() => {
        // Khôi phục danh sách mong muốn từ localStorage khi tải lại trang
        const storedWishlist = localStorage.getItem('wishlist');
        if (storedWishlist) {
          setWishlist(JSON.parse(storedWishlist));
        }
      }, []);

    useEffect(() => {
        localStorage.setItem("localWishlist", JSON.stringify(wishlist));
    }, [wishlist]);

    const addToWishlist = (product) => {
        const wishlistItem = wishlist.find((item) => {
            return item.id === product.id;
          })            
        if (wishlistItem) {
            removeFromWishlist(product.id)
        } else {
            setWishlist([...wishlist, product]);
            toast.success('💖 Đã thêm sản phẩm vào danh sách mong muốn', {
                position: "top-center",
                autoClose: 500,
                hideProgressBar: false,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    };

    const removeFromWishlist = (id) => {
        const newWishlist = wishlist.filter((item) => {
            return item.id !== id;
        });
        setWishlist(newWishlist);
        toast.success('💔 Đã xóa sản phẩm khỏi danh sách mong muốn', {
            position: "top-center",
            autoClose: 500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    };


    return (
        <WishlistContext.Provider value={{
            wishlist,
            addToWishlist,
            removeFromWishlist,
        }}>
            {children}
        </WishlistContext.Provider>
    )
}

export default WishlistProvider