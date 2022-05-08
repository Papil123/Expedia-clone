import React from 'react'
import { Routes,Route } from 'react-router-dom';
import Home from '../Pages/Home';
import HotelSearch from '../Pages/HotelSearch'
import HotelDetail from '../Pages/HotelDetail'
import Registeration from '../Components/Registeration'

const MainRoutes = () => {
  return (
    <div>
       
    <Routes>
    <Route path="/" element={<Home/>}></Route>
            <Route path="/search" element={<HotelSearch/>}></Route>
            
            <Route path="/signIn" element={<Registeration/>}></Route>
            <Route path="/hotelDetails" element={<HotelDetail/>}></Route>

          </Routes>   
          {/* <HotelSearch/> */}
    </div>
  )
}

export default MainRoutes