import React from 'react'
import {HGrideDiv,InerGridDiv,HGrideInnerDiv,CovidDiv} from '../component.styled'
import { Link } from "react-router-dom";
import Nav from '../Components/Nav'
import data from '../api/data.json'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {Footer} from '../Components/Footer'

const HotelSearch = ({goingTo}) => {


  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (

    <>
     <div>
      <Nav/>
    </div>
    
    <HGrideDiv >
      <InerGridDiv height={'50px'} >
        <HGrideInnerDiv>
          <div style={{height:"100%"}}>

          <svg style={{marginTop:"5px",marginLeft:"5px"}}> <path fill-rule="evenodd" d="M5 9a7 7 0 1114 0c0 5.25-7 13-7 13S5 14.25 5 9zm4.5 0a2.5 2.5 0 105 0 2.5 2.5 0 00-5 0z" clip-rule="evenodd"></path></svg>

          </div>
          <div style={{height:"100%"}}>
            <p style={{fontSize:"13px",marginTop:"-1px",marginBottom:"1px"}}>Going to</p>
            <h5>Delhi Aero City Station</h5>
          </div>
        </HGrideInnerDiv>
      </InerGridDiv>
      <InerGridDiv height={'50px'} >
      <HGrideInnerDiv>
          <div style={{height:"100%",marginLeft:"-15px",marginRight:"10px"}}>

          <svg style={{marginTop:"5px",marginLeft:"5px"}}><path fill-rule="evenodd" d="M19 3h-1V1h-2v2H8V1H6v2H5a2 2 0 00-1.99 2L3 19a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm0 5v11H5V8h14zm-7 2H7v5h5v-5z" clip-rule="evenodd"></path></svg>

          </div>
          <div style={{height:"100%",marginLeft:"-15px"}}>
            <p style={{fontSize:"13px",marginTop:"-1px",marginBottom:"1px"}}>Check-in</p>
            <h5>13 May</h5>
          </div>
        </HGrideInnerDiv>
      </InerGridDiv>
      <InerGridDiv height={'50px'}  >
      <HGrideInnerDiv>
          <div style={{height:"100%",marginLeft:"-15px",marginRight:"10px"}}>

          <svg style={{marginTop:"5px",marginLeft:"5px"}}><path fill-rule="evenodd" d="M19 3h-1V1h-2v2H8V1H6v2H5a2 2 0 00-1.99 2L3 19a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm0 5v11H5V8h14zm-7 2H7v5h5v-5z" clip-rule="evenodd"></path></svg>

          </div>
          <div style={{height:"100%",marginLeft:"-15px"}}>
            <p style={{fontSize:"13px",marginTop:"-1px",marginBottom:"1px"}}>Check-out</p>
            <h5>15 May</h5>
          </div>
        </HGrideInnerDiv>
      </InerGridDiv>
      <InerGridDiv height={'50px'} >
      <HGrideInnerDiv>
          <div style={{height:"100%",marginLeft:"-15px",marginRight:"10px"}}>

          <svg style={{marginTop:"5px",marginLeft:"5px"}}><path fill-rule="evenodd" d="M16 8a4 4 0 11-8 0 4 4 0 018 0zM4 18c0-2.66 5.33-4 8-4s8 1.34 8 4v2H4v-2z" clip-rule="evenodd"></path></svg>

          </div>
          <div style={{height:"100%",marginLeft:"-15px"}}>
            <p style={{fontSize:"13px",marginTop:"-1px",marginBottom:"1px"}}>Travellers</p>
            <h5>1,room,2 traveller</h5>
          </div>
        </HGrideInnerDiv>
      </InerGridDiv>
      <InerGridDiv height={'50px'} style={{backgroundColor:"#3662d8",color:"white",fontSize:"20px",textAlign:"center"}}>
        
        <p style={{margin:"10px 30px"}}>Search</p></InerGridDiv>
    </HGrideDiv>


    {/* Covid Components */}
    <CovidDiv >
      <div style={{display:"flex",marginTop:"10px", marginLeft:"20px"}}>
        <div style={{width:"30px",height:"50px",marginRight:"15px",color:"#FFFFFF"}}>

        <svg style={{marginTop:"10px",marginLeft:"5px",color:"#FFFFFF"}}><path fill-rule="evenodd" d="M23 21L12 2 1 21h22zm-12-3v-2h2v2h-2zm0-4h2v-4h-2v4z" clip-rule="evenodd" ></path></svg>

        </div>
       
        <div style={{width:"30%",height:"50px"}}>

          <div><p style={{marginTop:"-1px",textAlign:"left",color:"white",paddingBottom:"10px"}}>Check COVID-19 restrictions.</p></div>

          <div style={{display:"flex",marginTop:"-15px",gap:"15px"}}>
            <div><Link to="/find" style={{color:"white",fontSize:"13px"}}>Find out more</Link></div>
            <div><Link to="/dismiss" style={{color:"white",fontSize:"13px"}}>Dismiss</Link></div>
          </div>
        </div>
      </div>
    </CovidDiv>

   

    <div style={{display: "flex",width:"88%",margin:"auto",marginTop:"29px",gap:"15px"}}>

      {/* Map Div */}
      <div style={{width:"25%",height:"100px",borderRadius:"10px"}}>

      <iframe style={{width:"95%",height:"90px",borderRadius:"10px" ,border:"none",marginLeft:"7px"}} id="gmap_canvas" src="https://maps.google.com/maps?q=indore%20deviAhilya&t=&z=13&ie=UTF8&iwloc=&output=embed" ></iframe>

      <div style={{border: "none", boxShadow:" rgba(0, 0, 0, 0.35) 0px 5px 15px",width: "95%",margin:"auto",marginTop: "-33px",height: "40px",borderRadius:"8px"}}>
        <p style={{textAlign:"center",padding:"15px",color:"blue",marginTop:"30px"}}>View in map</p>
        </div>
        <hr style={{marginTop:"25px",width:"92%",marginBottom:'10px'}}></hr>

       {/* Searche input Div */}
       <div>
          <h3 style={{fontFamily:"500",fontSize:"20px",marginBottom:'10px'}}>Search by property name</h3>
          <input  style={{fontSize:"20px",borderRadius:"8px",height:"50px",border:"1px solid",backgroundColor:"white",boxShadow:" rgba(0, 0, 0, 0.35) 0px 5px 15px"}} type="text" name="" placeholder="e.g. Best Western"  / >

      </div>
      <hr style={{marginTop:"25px",width:"92%",marginBottom:'15px'}}></hr>

      {/* Filter By */}
      <div style={{textAlign:"left",marginLeft:"10px",marginBottom:'15px'}}>

        <h3>Filter by</h3>
        <p>Popular filter</p>
        
          <FormGroup style={{width:"100%",color:"lightBlack",fontSize:"13px",marginBottom:'15px'}}>
            <FormControlLabel control={<Checkbox  />} label="Hot tub" />
            <FormControlLabel  control={<Checkbox />} label="Spa" />
            <FormControlLabel control={<Checkbox  />} label="Hostel (portugal)" />
            <FormControlLabel  control={<Checkbox />} label="Titos lane" />
            <FormControlLabel  control={<Checkbox />} label="Cots" />
          </FormGroup>
        
      </div>

     <div style={{display: 'grid',gridTemplateColumns: "50px 50px 50px 50px", gap:"10px",gridTemplateRows: "40px 40px",marginBottom:'25px'}}>

      <div style={{border:"1px solid ",textAlign:"center",borderRadius:"10px"}}><font style={{verticalAlign:"inherit"}}>1★</font></div>
      <div style={{border:"1px solid ",textAlign:"center",borderRadius:"10px"}}><font style={{verticalAlign:"inherit"}}>2★</font></div>
      <div style={{border:"1px solid ",textAlign:"center",borderRadius:"10px"}}><font style={{verticalAlign:"inherit"}}>3★</font></div>
      <div style={{border:"1px solid ",textAlign:"center",borderRadius:"10px"}}><font style={{verticalAlign:"inherit"}}>4★</font></div><div style={{border:"1px solid ",textAlign:"center",borderRadius:"10px"}}><font style={{verticalAlign:"inherit"}}>5★</font></div>
          </div>

          
        {/* Your budget Section */}
       <div style={{textAlign:"left",marginLeft:"10px",marginBottom:'25px'}}>
          <p>Your budget</p>

          <FormGroup style={{width:"100%",color:"lightBlack",fontSize:"13px"}}>
            <FormControlLabel control={<Checkbox  />} label="Less than Rs2,000" />
            <FormControlLabel  control={<Checkbox />} label="Rs2,000 to Rs4,000" />
            <FormControlLabel control={<Checkbox  />} label="Rs4,000 to Rs8,000" />
            <FormControlLabel  control={<Checkbox />} label="Rs8,000 to Rs11,000" />
            <FormControlLabel  control={<Checkbox />} label="Greater than Rs11,000" />
          </FormGroup>

        </div>

         {/* Expedia Rewards */}
       <div style={{textAlign:"left",marginLeft:"10px",marginBottom:'25px'}}>
          <p>Expedia Rewards</p>

          <FormGroup style={{width:"100%",color:"lightBlack",fontSize:"13px"}}>
            <FormControlLabel control={<Checkbox  />} label="VIP Access properties" />
            <p style={{fontSize:"13px",marginTop:"-10px",marginLeft:"25px"}}>Top-rated stays with member perks</p>
            <FormControlLabel  control={<Checkbox />} label="Member Prices" />
            <p style={{fontSize:"13px",marginTop:"-10px",marginLeft:"25px"}}>Get instant savings when you become a member</p>
          </FormGroup>

        </div>
        {/* Guest Ratin Redio Button */}
        <div style={{textAlign:"left",marginLeft:"10px",marginBottom:'25px'}}>
       
           <p>Guest rating</p>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group">
              <FormControlLabel value="any" control={<Radio />} label="Any" />
              <FormControlLabel value="wonderful" control={<Radio />} label="Wonderful 4.5+" />
              <FormControlLabel value="veryGood" control={<Radio />} label="Very good 4+" />
              <FormControlLabel value="good" control={<Radio />} label="Good 3.5+" />
            </RadioGroup>
          
  
       </div>

       {/* Traveller Exprience... */}

       <div style={{textAlign:"left",marginLeft:"10px"}}>
          <p>Traveller experience</p>

          <FormGroup style={{width:"100%",color:"lightBlack",fontSize:"13px"}}>
            <FormControlLabel control={<Checkbox  />} label="LGBTQ welcoming" />
            <p style={{fontSize:"13px",marginTop:"-10px",marginLeft:"25px"}}>See properties that pledge to make all guests feel safe, welcome and respected.</p>
            <FormControlLabel  control={<Checkbox />} label=" Business-friendly" />
            <p style={{fontSize:"13px",marginTop:"-10px",marginLeft:"25px"}}>See properties with amenities to help you work comfortably, like WiFi and breakfast.</p>
            <FormControlLabel  control={<Checkbox />} label=" Family-friendly" />
            <p style={{fontSize:"13px",marginTop:"-10px",marginLeft:"25px"}}>See properties that include family essentials like in-room conveniences and activities for the kids</p>
          </FormGroup>

        </div>
          <hr style={{marginTop:"25px",width:"92%"}}></hr>
      </div><br></br>
      
     

   <div style={{width:"75%",height:"auto",borderRadius:"5px"}}>

        <div style={{width:"100%",height:"70px",margin:"auto",display:"flex",             justifyContent:"space-between"}}>

            <div style={{width:"472.5px",height:"20px",padding:"15px"}}>
                      <Link to="/recommended" style={{textDecoration:"none",color:"black",marginTop:"55px"}}>See how we pick our recommended properties</Link>
            </div>

          {/* Select tag sorting price according */}

   <div style={{width:"283.5px",height:"48px"}}>

      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel style={{marginTop:"-15px",fontSize:"13px",color:"black",marginBottom:"10px"}} id="demo-simple-select-label" >Sort by</InputLabel>
          <InputLabel id="demo-simple-select-label">Recommended</InputLabel>
          <Select
         
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Recommended</MenuItem>
            <MenuItem value={20}>Price</MenuItem>
            <MenuItem value={30}>Distance from airport</MenuItem>
            <MenuItem value={10}>Guest rating + our choices</MenuItem>
            <MenuItem value={20}>Price + our choices</MenuItem>
            <MenuItem value={30}>properties</MenuItem>
          </Select>
        </FormControl>
    </Box>

   </div>

        </div>

        {/* Hotel Details */}

        {/* -----------------------------------map------------------------------------------ */}
        {data.map(({img_url1,title,desc,Price})=>{
        
            return(
        <>
        <div style={{width:"100%",height:"156px",borderRadius:"7px",display:"flex",gap:"5px",marginBottom:"15px",border:"1px solid black"}}>

             {/* card Image start Div */}
            <div style={{width:"32%",height:"156px",marginTop:"-15px"}}>
                <img  src={img_url1} style={{width:"100%",height:"100%",borderRadius:"7px",marginLeft:"0px"}} />
            </div>   
            

            {/* card Detailes start Div */}

            <div style={{width:"68%",height:"156px"}}>

              <div style={{textAlign:"left"}}>
                <h4 style={{marginTop:"5px",marginBottom:"-10px"}}>{title}</h4>
                  <p style={{fontSize:"13px",marginTop:"15px"}}>15.14 km from Dabolim (GOI)</p>
              </div>

              <div style={{width:"100%",height:"78px",display:"flex"}}>

                <div style={{width:"60%",height:"60px",textAlign:"left"}}>
                  <p style={{width:"50%",height:"100%",marginTop:"-1px",fontSize:"13px"}}>{desc}</p>
                </div>

                <div style={{width:"40%",height:"60px",textAlign:"left"}}>
                    <button style={{marginLeft:"85px",borderRadius:"10px",backgroundColor:"teal",color:"white",height:"23px"}} >
                      <Link to="/hotelDetails" style={{textDecoration:"none",color:"white"}}>We have 6 left at</Link>
                      </button>
                    <h3 style={{marginLeft:"95px",marginTop:"1px"}}>{Price}</h3>
                </div>

              </div>
              
              <div style={{width:"100%",height:"20px",marginTop:"-15px",display: "flex",justifyContent:"space-between"}}>

                <div style={{width:"30%",height:"19px",fontSize:"15px",color:"black",marginTop:"10px"}}>{`4.1/5 (1 review)`}</div>
                <div style={{width:"30%",height:"19px",fontSize:"13px"}}>{`Rs 17,558 total`}</div>
              </div>
                 
            </div>

               {/* card Detailes end Div */}
       
        </div>
        </>
            )
          })}
         {/* Hotel Details End Div */}


      </div>
    </div>
   
      <div>
      <Footer />
      </div>
  


    </>
  )
}

export default HotelSearch


