import React from 'react'

const Map = () => {
  return (
      <>
    <div style={{width:"25%",height:"100px",borderRadius:"10px"}}>

    <iframe style={{width:"95%",height:"90px",borderRadius:"10px" ,border:"none"}} id="gmap_canvas" src="https://maps.google.com/maps?q=indore%20deviAhilya&t=&z=13&ie=UTF8&iwloc=&output=embed" ></iframe>

    <div style={{border: "none", boxShadow:" rgba(0, 0, 0, 0.35) 0px 5px 15px",width: "95%",margin:"auto",marginTop: "-33px",height: "40px",borderRadius:"8px"}}>
      <p style={{textAlign:"center",padding:"15px",color:"blue"}}>View in map</p>
      </div>
      </div>
      </>
  )
}

export default Map
