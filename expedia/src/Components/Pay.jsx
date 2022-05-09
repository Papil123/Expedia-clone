import React from 'react'
import styles from './pay.module.css'
// import  styles from "./nav.module.css"
export const Payment = () => {
  return (
<div>
       <div className={`${styles.nv}`}>
         <div>  <img src="https://www.expedia.co.in/_dms/header/logo.svg?locale=en_GB&siteid=27" alt="" /> </div>
         <div style={ {color:"black" ,  marginRight :"45px" ,marginTop :"3px" , paddingTop :"1%"} }><a className={`${styles.an}`}>Sign in</a> </div>
         </div>


     <div style={{border :"2px solid WHITE" , marginLeft :"5%" , height :"500px" , width:"70%",boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}}>
         <span><h2 style={{textAlign:"left" , marginLeft:"",}}>Review and book</h2></span>
      <div style={{display : "flex"   ,  backgroundColor: "#f2f2f2"} }>
          <div><img style={{width : "50px"}} src="data:image/jpeg;base64,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" alt="" /></div>
        
          <div>
        <h5 style={{border :"1px solid #f2f2f2",marginLeft :"4%" ,marginTop:"0%" }}>Free cancellation before Sat, 21 May, 18:00 (property local time)</h5>
         <p style={{border :"1px solid #f2f2f2",marginLeft :"4%" ,marginTop:"-3%", width :"120%"}}>You can change or cancel this stay for a full refund if plans change. Because flexibility matters.</p>
         </div>
        
         </div>  
         {/* next box */}
         <h3 className={`${styles.lock}`}>Sign in to earn 28 Expedia Rewards points</h3>
       
       <div className={`${styles.details}`}>
           Details  Room 1<br/>
           <span style={{fontWeight:"lighter", }}>  2 adults 1 Double Bed</span>

           <div className={`${styles.intro}`}>
             <div className={`${styles.first}`} >
           <label className={`${styles.first_l}`}  >First Name</label>
			<input className={`${styles.first_i}`}  type="text" placeholder='First Name' name="fname" required/>
      </div>
      <div style={{marginLeft:"2%" ,marginLeft :"4%"}}>
      <label style={{paddingTop : "5%"}} >Last Name</label>
			<input id="mname" type="text" class="text" placeholder='Last name' name="fname" required/>
	    
      </div>

           </div>
           <label id="mname-label" for="mname">Contact No.</label>
			<input style={{width:"190px"}} type="text" placeholder='contact no.' class="text" name="fname" required/>
       
     
      <div style={{fontWeight:"normal" , fontSize:"14px"}}>Receive text alerts about this trip (free of charge).</div>
       </div>
      
        
    
    
    
    </div>

 </div>
  )
}



