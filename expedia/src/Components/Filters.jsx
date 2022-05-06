import React from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

;


const Filters = () => {
    
  return (
      
      
<div style={{display: "flex",width:"88%",margin:"auto",marginTop:"10px",gap:"19px"}}>

{/* Map Div */}
<div style={{width:"25%",height:"100px",borderRadius:"10px"}}>

<iframe style={{width:"95%",height:"90px",borderRadius:"10px" ,border:"none"}} id="gmap_canvas" src="https://maps.google.com/maps?q=indore%20deviAhilya&t=&z=13&ie=UTF8&iwloc=&output=embed" ></iframe>

<div style={{border: "none", boxShadow:" rgba(0, 0, 0, 0.35) 0px 5px 15px",width: "95%",margin:"auto",marginTop: "-33px",height: "40px",borderRadius:"8px"}}>
  <p style={{textAlign:"center",padding:"15px",color:"blue"}}>View in map</p>
  </div>
  <hr style={{marginTop:"25px",width:"92%"}}></hr>

 {/* Searche input Div */}
 <div>
    <h3 style={{fontFamily:"500",fontSize:"20px"}}>Search by property name</h3>
    <input  style={{fontSize:"20px",borderRadius:"8px",height:"50px",border:"1px solid",backgroundColor:"white",boxShadow:" rgba(0, 0, 0, 0.35) 0px 5px 15px"}} type="text" name="" placeholder="e.g. Best Western"  / >

</div>
<hr style={{marginTop:"25px",width:"92%"}}></hr>

{/* Filter By */}
<div style={{textAlign:"left",marginLeft:"10px"}}>

  <h3>Filter by</h3>
  <p>Popular filter</p>
  
    <FormGroup style={{width:"100%",color:"lightBlack",fontSize:"13px"}}>
      <FormControlLabel control={<Checkbox  />} label="Hot tub" />
      <FormControlLabel  control={<Checkbox />} label="Spa" />
      <FormControlLabel control={<Checkbox  />} label="Hostel (portugal)" />
      <FormControlLabel  control={<Checkbox />} label="Titos lane" />
      <FormControlLabel  control={<Checkbox />} label="Cots" />
    </FormGroup>
  
</div>

<div style={{display: 'grid',gridTemplateColumns: "50px 50px 50px 50px", gap:"10px",gridTemplateRows: "40px 40px"}}>

<div style={{border:"1px solid ",textAlign:"center",borderRadius:"10px"}}><font style={{verticalAlign:"inherit"}}>1★</font></div>
<div style={{border:"1px solid ",textAlign:"center",borderRadius:"10px"}}><font style={{verticalAlign:"inherit"}}>2★</font></div>
<div style={{border:"1px solid ",textAlign:"center",borderRadius:"10px"}}><font style={{verticalAlign:"inherit"}}>3★</font></div>
<div style={{border:"1px solid ",textAlign:"center",borderRadius:"10px"}}><font style={{verticalAlign:"inherit"}}>4★</font></div><div style={{border:"1px solid ",textAlign:"center",borderRadius:"10px"}}><font style={{verticalAlign:"inherit"}}>5★</font></div>
    </div>

    
  {/* Your budget Section */}
 <div style={{textAlign:"left",marginLeft:"10px"}}>
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
 <div style={{textAlign:"left",marginLeft:"10px"}}>
    <p>Expedia Rewards</p>

    <FormGroup style={{width:"100%",color:"lightBlack",fontSize:"13px"}}>
      <FormControlLabel control={<Checkbox  />} label="VIP Access properties" />
      <p style={{fontSize:"13px",marginTop:"-10px",marginLeft:"25px"}}>Top-rated stays with member perks</p>
      <FormControlLabel  control={<Checkbox />} label="Member Prices" />
      <p style={{fontSize:"13px",marginTop:"-10px",marginLeft:"25px"}}>Get instant savings when you become a member</p>
    </FormGroup>

  </div>
  {/* Guest Ratin Redio Button */}
  <div style={{textAlign:"left",marginLeft:"10px"}}>
 
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
    
</div>
</div>
  )
}

export default Filters
