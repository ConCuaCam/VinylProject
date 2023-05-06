import React, { createContext, useState, useEffect } from 'react'

export const VinylContext = createContext()

function VinylProvider({ children }) {
    const [products, setProducts] = useState([])

    useEffect(()=> {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://64532271c18adbbdfe95f5c6.mockapi.io/products');
                const data = await response.json();
                setProducts(data)
            } catch (error) {
                console.log(error);
              }
        }
        fetchProducts();
    },[])
    return (
        <VinylContext.Provider value={ {products} }>
            {children}
        </VinylContext.Provider>
    )
}

export default VinylProvider