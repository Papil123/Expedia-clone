import React from 'react'
import  styles from "../Css/nav.module.css"
import {Link} from "react-router-dom"



 const Nav = () => {
  return (
    <div>
         <div className= {`${styles.nav}`} >
            <div className={`${styles.navdiv}`}  >
              <div style={{marginTop:"5%",width:"0%"}} onclick="window.location.href='home.html'">
                <img style={{width:"110px"}} src="https://www.expedia.co.in/_dms/header/logo.svg?locale=en_GB&siteid=27&2"alt=""/>
        
              </div>
             
        
              <div style={{color:"black",marginTop:"-10px"}} className={`${styles.dropdown}`}>
                <button  style={{color: "black" ,backgroundColor:"white"}} className={`${styles.drop}`}>More Travel  <span style={{ marginTop:"-2%"}} className="material-icons">
                  expand_more
                  </span></button>
                  <div className={`${styles.dropdownB}`} style={{backgroundColor:"white"}}>
                    <div className={`${styles.dropone}`}>
                      <div className={`${styles.spandiv}`}><span className="material-icons">
                        apartment</span></div>
                      <div><a  onclick="window.location.href='stays.html'"> Stay </a></div>
                    </div>
        
        
        
                    <div className={`${styles.droptwo}`} >
                      <div className={`${styles.spandiv}`} ><span className="material-icons">
                        flight
                        </span></div>
                      <div><a onclick="window.location.href='flights.html'"> Flight </a></div>
                    </div>
        
        
                    <div className={`${styles.dropthree}`}>
                      <div className={`${styles.spandiv}`}> <span className="material-icons">
                        directions_car
                        </span></div>
                      <div><a onclick="window.location.href='cars.html'"> Cars </a></div>
                    </div>
        
        
        
                    <div   className={`${styles.dropfour}`}>
                      <div className={`${styles.spandiv}`}><span className="material-icons">
                        inventory_2
                        </span></div>
                      <div><a onclick="window.location.href='packages.html'"> Packages </a></div>
                    </div>
        
        
                    <div className={`${styles.dropfive}`}>
                      <div className={`${styles.spandiv}`}> <span className="material-icons">
                        local_activity
                        </span></div>
                      <div><a onclick="window.location.href='Holiday.html'">Holiday activities</a></div>
                    </div>
        
        
                    <div className={`${styles.belowicon}`}>
                      <div>
                        <a  onclick="window.location.href='deals.html'">Deals</a>
                        </div>
                        <div>
                          <a >Meetings </a>
                          </div>
                          <div>
                            <a >Mobile</a>
                            </div>
                    </div>
                  </div>
                    </div>
        
            </div>
            <div className={`${styles.navdiv2}`}>
         
            {/* <!-- <img src="globe.png" alt=""> --> */}
            <span style={{fontSize :"18px" ,marginTop:"-10px"}} className="material-icons">
          
              language
              </span>
              <a style={{fontSize: "14px" ,fontWeight:"500"}}>English</a>   
              <a  style={{fontSize: "14px",fontWeight:"500"}}>Support
              </a>
              <a  style={{fontSize: "14px",fontWeight:"500"}}>Trips</a>
             
            <Link to="/signIn" style={{fontSize: "14px",fontWeight:"500",textDecoration:"none"}}>Sign In</Link>
            </div>
            
        
          </div>
          <hr style={{width:"100%",marginTop:"-30px"}}/> 
    </div>
  )
}
export default Nav