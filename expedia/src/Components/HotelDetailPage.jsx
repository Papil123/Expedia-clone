
import React from 'react'
import AboutArea from './AboutArea'
import HotelDetail from './HotelDetail'
import Policies from './Policies'
import ImportantInfo from "./ImportantInfo"

const HotelDetailPage = () => {
  return (
    <div>
        <HotelDetail/>
        <AboutArea/>
        <Policies/>
        <ImportantInfo/>
    </div>
  )
}

export default HotelDetailPage