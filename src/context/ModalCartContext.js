import React, { useState, createContext } from 'react'

export const ModalCartContext = createContext()

function ModalCartProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false)

    const handleClose = () => {
        setIsOpen(false);
    }

    return (
        <ModalCartContext.Provider value={{ isOpen, setIsOpen, handleClose }}>
            {children}
        </ModalCartContext.Provider>
    )
}

export default ModalCartProvider