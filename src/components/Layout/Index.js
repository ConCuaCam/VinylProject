import React from 'react'
import Header from '../Header/Index'
import Footer from '../Footer/Index'
import Sidebar from '../Sidebar/Index'
import ModalCart from '../Modal/ModalCart/Index'
import Routers from '../../routes/Routers'

function Index() {
  return (
    <>
    <Header />
    <div>
      <Routers />
    </div>
    <Sidebar />
    <Footer />
    <ModalCart />
    </>
  )
}

export default Index