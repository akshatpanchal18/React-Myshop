import { useState } from 'react'
import Navbar from './Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Products from './Products'
import Contact from './Contact'
import Cart from './Cart'
import SingleProduct from './SingleProduct'
import CheckOut from './CheckOut'
import Footer from './Components/Footer'

function App() {


  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About/>} />
            <Route path='/products' element={<Products/>} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/singleproduct/:id' element={<SingleProduct/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/checkout' element={<CheckOut/>} />
            {/* <Route path='/confirm' element={<ConfirmationPage/>} />
            <Route path='/*' element={<Error/>} />  */}
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
