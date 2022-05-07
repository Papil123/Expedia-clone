import React,{useState} from 'react'
import TabPanel from '../expedia/TabPanel'
import styles from '../Flights.module.css'
import {TravellerBut,TravellerDiv,GridDiv1,ExportButton,AddAnotherButoon,DoneButoon} from '../component.styled'


const Flights = () => {
    const [ischildSelect,setchildSelect]=useState(false);
    const [isChildren,setChildren]=useState(0);

  return (
      <>
    <div style={{border: '1px solid black',width:"100%", minHeight: "4.5rem"}}></div>

    {/* Three small componnents */}

    <div style={{width:"90%",margin:"auto",marginTop:"55px",border: '1px solid grey',paddingLeft:"1.5rem",paddingRight:"1.5rem",minHeight: "20rem",borderRadius:"10px"}}>
            
     <TabPanel />

     {/* Return onWay  and Multi-city dic */}

     <div style={{border: '1px solid black',width:"90%",height:"50px",margin:"auto",marginTop:"-25px",justifyContent:"space-between",display:"flex"}}>

         <div style={{border: '1px solid red',width:"35%",gap:"15px",display:"flex"}}>
             <button className={styles.return}>Return</button>
             <button className={styles.oneWay}>One-way</button>
             <button className={styles.multiCity}>Multi-city</button>
         </div>
         <div style={{border: '1px solid green',width:"25%",display: 'flex',justifyContent: 'center'}}>
             
            <button className={styles.traveller}>1 traveller
            
                 <svg style={{width:"17%",height:"20px",size:"10px",}}><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" ></path></svg>

                 <GridDiv1  style={{marginTop:"15px"}}>
                <div>Children
                <p style={{marginTop:"5px",fontSize:"13px"}}>Ages 0 to 17</p>
                </div>
                
                <div style={{display:"flex",justifyContent:"space-around"}}>
                <ExportButton onClick={()=>{setChildren(isChildren-1)}}>-</ExportButton>
                   {isChildren<0?<p style={{marginLeft:"10px",marginRight:"10px"}}> {0} </p>: <p style={{marginLeft:"10px",marginRight:"10px"}}> {isChildren} </p>} 
                   
                    <ExportButton onClick={()=>{setChildren(isChildren+1)}}>+</ExportButton>
                </div>
            </GridDiv1>

            </button>

             <button className={styles.economy}>Economy

                 <svg style={{width:"17%",height:"20px"}}><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"></path></svg>

             </button>
         </div>
     </div>

    </div>
    </>
  )
}

export default Flights