import React,{useState} from 'react'
import TabPanel from '../expedia/TabPanel'

import styles from '../Css/Flights.module.css'

import {TravellerBut,TravellerDiv,GridDiv1,ExportButton,AddAnotherButoon,DoneButoon} from '../component.styled'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


const Flights = () => {


     const [isAuth,setAuth]=useState(false);
    const [ischildSelect,setchildSelect]=useState(false);
    const [isEconomy,setEconomy]=useState(false);
    const [isAudlts,setAudults]=useState(1);
    const [isChildren,setChildren]=useState(0);

    const [age, setAge] = React.useState('');
   
    const handleChange = (event: SelectChangeEvent) => {
      setAge(event.target.value);
      setChildren(isChildren+1)
    }

  return (
      <>
    <div style={{border: '1px solid black',width:"100%", minHeight: "4.5rem"}}></div>

    {/* Three small componnents */}


    <div style={{width:"90%",margin:"auto",marginTop:"55px",border: '1px solid grey',minHeight: "20rem",borderRadius:"10px",position:"absolute",marginLeft:"70px"}}>

            
     <TabPanel />

     {/* Return onWay  and Multi-city dic */}

     <div style={{border: '1px solid black',width:"90%",height:"50px",margin:"auto",marginTop:"-25px",justifyContent:"space-between",display:"flex",position:"relative"}}>


         <div style={{border: '1px solid red',width:"35%",gap:"15px",display:"flex"}}>
             <button className={styles.return}>Return</button>
             <button className={styles.oneWay}>One-way</button>
             <button className={styles.multiCity}>Multi-city</button>
         </div>
         <div style={{border: '1px solid green',width:"25%",display: 'flex',justifyContent: 'center'}}>
             

            <button className={styles.traveller} onClick={()=>setAuth(!isAuth)}>1 traveller
            
                 <svg style={{width:"17%",height:"20px",size:"10px",}}><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" ></path></svg>

                { isAuth?  
                
                    <TravellerDiv style={{marginLeft:"-300px"}}>

                        <div style={{marginTop:"-5px"}}>
                        <div>
                            <h3>Travellers</h3>
                        </div>

                        </div>


            <GridDiv1 >
            <div>Adults</div>
            <div style={{display:"flex",justifyContent:"space-around"}}>
                <ExportButton onClick={()=>{setAudults(isAudlts-1)}}>-</ExportButton>
                {isAudlts<1?<p style={{marginLeft:"10px",marginRight:"10px"}}> {1} </p>: <p style={{marginLeft:"10px",marginRight:"10px"}}> {isAudlts} </p>} 
                <ExportButton onClick={()=>{setAudults(isAudlts+1)}}>+</ExportButton>
            </div>
            </GridDiv1>
            {ischildSelect?
   
                     <>
 
                <GridDiv1  style={{marginTop:"5px"}}>
                <div>Children
                <p style={{marginTop:"5px",fontSize:"12px"}}>Ages 0 to 17</p>

                </div>
                
                <div style={{display:"flex",justifyContent:"space-around"}}>
                <ExportButton onClick={()=>{setChildren(isChildren-1)}}>-</ExportBut></svg>


                    {isChildren<0?<p style={{marginLeft:"10px",marginRight:"10px"}}> {0} </p>: <p style={{marginLeft:"10px",marginRight:"10px"}}> {isChildren} </p>} 
                    
                    <ExportButton onClick={()=>{setChildren(isChildren+1)}}>+</ExportButton>
                </div>
                </GridDiv1>

                <div>
                        <FormControl sx={{ marginLeft:"10px",width:"40%",height:"30px",marginBottom:"45px"}}>
                        <InputLabel id="demo-simple-select-autowidth-label">Child 1 age</InputLabel>
                        <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={age}
                        onChange={handleChange}
                        autoWidth
                        label="Child 1 age">
                        <MenuItem value="">
                        <em>Under 1</em>
                        </MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                        <MenuItem value={9}>9</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={11}>11</MenuItem>
                        <MenuItem value={12}>12</MenuItem>
                        <MenuItem value={13}>13</MenuItem>
                        <MenuItem value={14}>14</MenuItem>
                        <MenuItem value={15}>15</MenuItem>
                        <MenuItem value={16}>16</MenuItem>
                        <MenuItem value={17}>17</MenuItem>

                    </Select>
                    </FormControl>
                    </div>
                    </>

                    : 
                <>
                <GridDiv1  style={{marginTop:"1"}}>
                <div>Children
                <p style={{marginTop:"5px",fontSize:"12px"}}>Ages 0 to 17</p>
                </div>
                
                <div style={{display:"flex",justifyContent:"space-around"}}>
                <ExportButton onClick={()=>{setChildren(isChildren-1)}}>-</ExportButton>
                    {isChildren<0?<p style={{marginLeft:"10px",marginRight:"10px"}}> {0} </p>: <p style={{marginLeft:"10px",marginRight:"10px"}}> {isChildren} </p>} 
                    
                    <ExportButton onClick={()=>{setchildSelect(!ischildSelect)}}>+</ExportButton>
                </div>
                </GridDiv1>

                
                <GridDiv1  style={{marginTop:"1px"}}>
                <div>Infants
                <p style={{marginTop:"5px",fontSize:"13px"}}>Younger than 2</p>
                </div>
   
                <div style={{display:"flex",justifyContent:"space-around"}}>
                <ExportButton onClick={()=>{setChildren(isChildren-1)}}>-</ExportButton>
                    {isChildren<0?<p style={{marginLeft:"10px",marginRight:"10px"}}> {0} </p>: <p style={{marginLeft:"10px",marginRight:"10px"}}> {isChildren} </p>} 
                    
                    <ExportButton onClick={()=>{setchildSelect(!ischildSelect)}}>+</ExportButton>
                </div>
                </GridDiv1>
                </>
            }

            <div>
                <DoneButoon onClick={()=>setAuth(!isAuth)} >Done</DoneButoon>
            </div>

        </TravellerDiv>

                        :""
            
                    } 
                
                
            </button>

             <button className={styles.economy} onClick={()=>setEconomy(!isEconomy)} >Economy

                 <svg style={{width:"17%",height:"20px"}}><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"></path></svg>

                    {isEconomy?<>
                        
                        <div style={{width:"170%",height:"",marginLeft:"19px",marginTop:"15px",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",borderRadius:"10px",textAlign: "left"}}>

                            <div className={styles.economyE }>Economy</div>
                            <div className={styles.premium}>Premium economy</div>
                            <div className={styles.business}>Business class</div>
                            <div className={styles.firstClass}>First class</div>
                            </div>
                                                
                    </>
                        :    ""
                
                }

           
             </button>
         </div>
     </div>

    </div>
    </>
  )
}

export default Flights