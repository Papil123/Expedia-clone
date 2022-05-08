import React from 'react'
import {CovidDiv} from '../component.styled'
import { Link } from "react-router-dom";
const CovidTab = () => {
  return (
     
     
     
     <CovidDiv >
     <div style={{display:"flex",marginTop:"10px", marginLeft:"20px"}}>
       <div style={{width:"30px",height:"50px",marginRight:"15px",color:"#FFFFFF"}}>

       <svg style={{marginTop:"10px",marginLeft:"5px",color:"#FFFFFF"}}><path fill-rule="evenodd" d="M23 21L12 2 1 21h22zm-12-3v-2h2v2h-2zm0-4h2v-4h-2v4z" clip-rule="evenodd" ></path></svg>

       </div>
      
       <div style={{width:"30%",height:"50px"}}>

         <div><p style={{marginTop:"-1px",textAlign:"left",color:"white"}}>Check COVID-19 restrictions.</p></div>

         <div style={{display:"flex",marginTop:"-15px",gap:"15px"}}>
           <div><Link to="/find" style={{color:"white",fontSize:"13px"}}>Find out more</Link></div>
           <div><Link to="/dismiss" style={{color:"white",fontSize:"13px"}}>Dismiss</Link></div>
         </div>
       </div>
     </div>
   </CovidDiv>
   
 
  )
}

export default CovidTab
