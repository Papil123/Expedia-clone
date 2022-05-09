import React from 'react';
import styles from "./foot.module.css"
import {Link} from "react-router-dom"


export const Footer = () => {
  return (
    <>
    <div style={{textAlign: 'center'}}>
    <b> Explore a world of travel with Expedia</b><br></br>
     <Link to="/explore">Discover new place and exprence</Link>
     </div>
    <div>
        <div className= {`${styles.foot}`} >
        <div >
          <img style={{width:"100%"}}
          src="https://a.travel-assets.com/globalcontrols-service/content/f285fb631b0a976202ef57611c7050e9ef5ca51a/images/EG_Wordmark_blue_RGB.svg"
          alt=""
        />
        </div>
         
          <div className={`${styles.footerdiv1}`} style={{padding:"1.5%"}}>
            <p style={{paddingBottom:"10px"}}>Company</p>
            <a >About us</a>
            <a >Jobs</a>
            <a >List your property</a>
            <a >Partnerships</a>
          </div>
          <div className={`${styles.footerdiv1}`} style={{padding:"1.5%"}}>
            <p style={{paddingBottom:"10px"}}>Explore</p>
          <a>India travel guide </a>
          <a >Hotels in India </a>
          <a >Holiday rentals in India </a>
          <a >Holiday packages in India </a>
          <a >Domestic flights </a>
          <a >Car hire in India </a>
          <a >All accommodation types </a>
          <a >Travel blog </a>
          </div>
          <div className={`${styles.footerdiv1}`} style={{padding:"1.5%"}}>
            <p style={{paddingBottom:"10px"}}>Terms and Policies</p>
            <a >Privacy Statement </a>
            <a >Terms of use </a>
          </div>
          <div className={`${styles.footerdiv1}`} style={{padding:"1.5%"}}>
            <p style={{paddingBottom:"10px"}}>Help</p>
          <a >Support </a>
          <a >Change or cancel your booking </a>
          <a>Refund process and timelines </a>
          <a >Book a flight using an airline credit </a>
          <a >International travel documents </a>
          </div>
         </div>

         <hr/>
   <div className={`${styles.secureimg}`}>
     <img  style={{margin: "auto" }} src="https://images.trvl-media.com/media/content/expind/images/sg/secure.png" alt=""/>
   </div>
   <div className={`${styles.endfoot}`}>
    <h6>
      © 2021 Expedia, Inc., an Expedia Group company / Expedia Asia Holdings Mauritius / BEX Travel Asia Pte. Ltd. All rights reserved. Expedia and the Airplane Logo are trademarks or registered trademarks of Expedia, Inc.

     </h6>

   </div>
    </div>

    </>
  )
}
