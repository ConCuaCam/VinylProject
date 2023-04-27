import React, { createContext, useState, useEffect } from 'react'
import data from '../data/products'

export const VinylContext = createContext()

function VinylProvider({ children }) {
    const [products, setProducts] = useState([])

    useEffect(()=> {
        setProducts(data)
    },[])
    return (
        <VinylContext.Provider value={ {products} }>
            {children}
        </VinylContext.Provider>
    )
}

export default VinylProvider