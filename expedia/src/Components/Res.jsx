import React from "react";
 import styles from "./Res.module.css"
import {Link} from "react-router-dom"


const Res = () => {
    return (
        <div className= {styles.container} style= {{border:"1px solid grey"}}>
            <div> <img className={styles.img} style={{marginLeft:"0px",marginTop:"1.5px"}} src="https://images.trvl-media.com/hotels/2000000/1310000/1304400/1304393/f45dec6a.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium" alt="" />  </div>
              
              <div className={styles.bottom} >
                <h4>Deluxe Room, 1 King Bed</h4>
                <p>Size : 219 sq ft</p>
                <p> Capacity : Sleeps 3</p>
                <p>Total Bed : 1 King Bed</p>
                <p>Wifi : Available</p>
                <p>Parking : free Parking</p>
               

               <h5 className={styles.h5}  >Cancellation policy</h5>
           
                <p>    <input className="check" type="checkbox" />Non-Refundable </p>
                
                <p>    <input className="check" type="checkbox" /> Fully refundable before May 21 </p>
                <h5 className={styles.h5} >Price details</h5>

                <h2 className={styles.h3} >$ 98</h2>
                <h4 className={styles.h4} >$ 120</h4>


                </div>
                <button  type="submit"    className={styles.but} >
                <Link to="/pay" style={{textDecoration:"none",color:"white",border:"none"}}>Payment</Link>
              </button>
        </div>






    )
}

export  default Res; 