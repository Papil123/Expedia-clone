import React from 'react'
import { Routes,Route } from 'react-router-dom';
import Home from '../Pages/Home';
import HotelSearch from '../Pages/HotelSearch'
import HotelDetail from '../Pages/HotelDetail'
import Registeration from '../Components/Registeration'
import Pay from '../Components/Pay'

const MainRoutes = () => {
  return (
    <div>
       
    <Routes>
    <Route path="/" element={<Home/>}></Route>
            <Route path="/search" element={<HotelSearch/>}></Route>
            
            <Route path="/signIn" element={<Registeration/>}></Route>
            <Route path="/hotelDetails" element={<HotelDetail/>}></Route>
            <Route path="/login" element={<Home/>}></Route>
            <Route path="/pay" element={<Pay/>}></Route>
            

          </Routes>   
          {/* <HotelSearch/> */}
    </div>
  )
}

export default MainRoutes