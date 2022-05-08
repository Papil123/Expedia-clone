import React from 'react';
import styles from "./foot.module.css"


export const Footer = () => {
  return (
    <div>
        <div className= {`${styles.foot}`} style={{}}>
        <div>
          <img
          src="https://a.travel-assets.com/globalcontrols-service/content/f285fb631b0a976202ef57611c7050e9ef5ca51a/images/EG_Wordmark_blue_RGB.svg"
          alt=""
        />
        </div>
         
          <div className={`${styles.footerdiv1}`}>
            <p>Company</p>
            <a >About us</a>
            <a >Jobs</a>
            <a >List your property</a>
            <a >Partnerships</a>
          </div>
          <div className={`${styles.footerdiv1}`}>
            <p>Explore</p>
          <a>India travel guide </a>
          <a >Hotels in India </a>
          <a >Holiday rentals in India </a>
          <a >Holiday packages in India </a>
          <a >Domestic flights </a>
          <a >Car hire in India </a>
          <a >All accommodation types </a>
          <a >Travel blog </a>
          </div>
          <div className={`${styles.footerdiv1}`}>
            <p>Terms and Policies</p>
            <a >Privacy Statement </a>
            <a >Terms of use </a>
          </div>
          <div className={`${styles.footerdiv1}`}>
            <p>Help</p>
          <a >Support </a>
          <a >Change or cancel your booking </a>
          <a>Refund process and timelines </a>
          <a >Book a flight using an airline credit </a>
          <a >International travel documents </a>
          </div>
         </div>

         <hr/>
   <div className={`${styles.secureimg}`}>
     <img src="https://images.trvl-media.com/media/content/expind/images/sg/secure.png" alt=""/>
   </div>
   <div className={`${styles.endfoot}`}>
    <h6>
      © 2021 Expedia, Inc., an Expedia Group company / Expedia Asia Holdings Mauritius / BEX Travel Asia Pte. Ltd. All rights reserved. Expedia and the Airplane Logo are trademarks or registered trademarks of Expedia, Inc.

     </h6>

   </div>
    </div>
  )
}
