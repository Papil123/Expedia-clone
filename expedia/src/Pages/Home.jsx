import React from "react";
import Nav from '../Components/Nav'
import BasicTabs from '../Components/BasicTabs'
import GoingTo from '../Components/GoingTo'
import DatePicker from '../Components/DatePicker'
import Traveller from '../Components/Traveller'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import ExpediaRewards from '../Components/ExpediaRewards'
import {Footer}  from '../Components/Footer'
import {Link, Routes,Route} from 'react-router-dom'
import HotelSearch from './HotelSearch'




const Home = () => {

  return (
    
    <>
    <div>
      <Nav/>
    </div>
 {/* stay 4 component start div */}
    <div style={{width:"90%",margin:"auto",marginTop:"55px",border: '1px solid grey',minHeight: "20rem",borderRadius:"10px",position:"relative",marginLeft:"70px"}}>

    <BasicTabs />

    <div style={{width:"1104px",height:"95.99px",marginLeft:"25px",position:"absolute"}}>

        <div style={{width:"1104px",height:"60px",display:"flex",justifyContent:"center",position:"absolute",gap:"15px"}} >
           <GoingTo />
          <DatePicker />
         
            <Traveller/>
         
        </div>
        <div style={{marginTop:"60px",position:"absolute",marginLeft:"25px",display:"flex",width:"30%",justifyContent:"space-around"}}>
              
              <div style={{position:"relative"}}>
              <FormGroup  >
                <FormControlLabel control={<Checkbox  />} label="Add a flight" style={{color:"grey"}}/>
              </FormGroup>
              </div>
              <div>
              <FormGroup >
                <FormControlLabel control={<Checkbox  />} label="Add a car" style={{color:"grey"}}/>
              </FormGroup>
              </div>

         </div>
         
    </div>
    
    </div>
      {/* stay 4 component end div */}
      <div style={{marginTop:"-105px",position:"relative",marginLeft:"-150px"}}>
          <button style={{backgroundColor:"#3662d8",height:"45px",width:"180px",color:"white",border:"none",fontSize:"18px",borderRadius:"7px",position:"absolute",marginLeft:"700px"}}>
          <Link to="/search" style={{textDecoration:"none",color:"white"}}>Search</Link>
         
         </button>
      </div>

         
         
      <div style={{border:"1px solid  rgb(178, 175, 175)",display:"flex", width: "90%",height: "250px",marginLeft: "5%",borderRadius: "10px",marginTop: "150px"}}>
        <div style={{width:"40%",height: "50%"}}><img style={{ width: "100%", height: "250px",borderRadius: "10px",marginLeft: "0px",marginTop:"-1px"}} src="https://a.travel-assets.com/mad-service/footer/bnaBanners/BEX_BLUE+SEA_300dpi.jpeg" alt=""/></div>
        <div style={{ width:""}}>
            <h1 style={{fontSize: "30px",fontWeight: "500",marginLeft: "3%",textAlign: "left"}}>When you save more you see more</h1>
            <p style={{marginLeft: "3%",textAlign: "left"}}>Join Expedia Rewards to access member discounts of 10% or more every day. Plus,<br/>collect points and unlock even more perks. There’s a lot of world out there, and our  members see more of it.</p>
            <div>
                <span style={{textAlign:"left"}}><button style={{border:"none",width:"150px",height:"40px",backgroundColor:"#3662d8",color:"white",borderRadius:"7px",marginRight:"10px"}}>Sign Up</button></span>
                <a href="google.com">Sign in</a>
            </div>
        </div>
</div><br></br>

       <div >
       <ExpediaRewards/>
      </div>   <br></br>
      
     
    <div>
      <Footer/>
    </div>
    
 </>
  
  )
};

export default Home;
