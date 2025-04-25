import React from 'react'
import Header from './Components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Swiper from './Components/Swiper';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
// import Starter from './Pages/Starter';
import Home from './Pages/Home';
import Mehndi from './Pages/Mehndi';
import ProductsDescriptions from './Pages/ProductsDescriptions';
import SignIn from './Pages/SignIn';
import Bridal from './Pages/Bridal';
import MaxiFrock from './Pages/MaxiFrock';
import SareeDress from './Pages/SareeDress';
import SignUp from './Pages/SignUp';
import { ToastContainer, toast } from 'react-toastify';
// import Layout from './Pages/Layout';



const App = () => {
  return (
    <div>
      <Routes>
      {/* <Route path='/' element={<Layout/>} /> */}
      <Route path='/' element={<Home/>} />
      <Route path="/mehndi" element={<Mehndi/>}></Route>
      <Route path="/bridal" element={<Bridal/>}></Route>
      <Route path="/maxi&frock" element={<MaxiFrock/>}></Route>
      <Route path="/sareedress" element={<SareeDress/>}></Route>
      <Route path='/product/:id' element={<ProductsDescriptions/>}></Route>
      <Route path='/signin' element={<SignIn/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App
