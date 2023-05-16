import React from 'react'
import Header from '../Header/Index'
import Footer from '../Footer/Index'
import Sidebar from '../Sidebar/Index'
import ModalCart from '../Modal/ModalCart/Index'
import Routers from '../../routes/Routers'
import { ToastContainer } from 'react-toastify';


function Index() {
  return (
    <>
    <Header />
    <div>
      <Routers />
      <ToastContainer />
    </div>
    <Sidebar />
    <Footer />
    <ModalCart />
    </>
  )
}

export default Index