import React, { useState } from "react";
import {Link} from 'react-router-dom'
//  import './Registeretion.css'

import { Alert } from "react-bootstrap";

import Login from "./Login";

function Registration() {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  

  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);
  


  function handleFormSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password || !phone ) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("sanskarEmail", JSON.stringify(email));
      localStorage.setItem(
        "sanskarPassword",
        JSON.stringify(password)
      );
      console.log("Saved in Local Storage");

      setLogin(!login);
    }
  }

  function handleClick() {
    setLogin(!login);
  }

 
  

 
    
   
  return (
  
    <>
    <div >

      <div>
          {" "}
          {login ? (
         
            <form onSubmit={handleFormSubmit}>
              <h2 style={{textAlign:"center"}}>Create an account</h2>

              <div className="form-group" >
                <label></label>
                <input style={{width:"30%",marginLeft:"500px"}}
                  type="email"
                  className="form-control"
                  placeholder="Email address"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>

              <div className="form-group" >
                <label></label>
                <input style={{width:"30%",marginLeft:"500px"}}
                  type="text"
                  className="form-control"
                  placeholder=" Full Name"
                  name="name"
                  onChange={(event) => setName(event.target.value)}
                />
              </div>

              <div className="form-group" >
                <label></label>
                <input style={{width:"30%",marginLeft:"500px"}}
                  type="Phone"
                  className="form-control"
                  placeholder="Enter contact no"
                  onChange={(event) => setPhone(event.target.value)}
                />
              </div>

          

              <div className="form-group" >
                <label></label>
                <input  style={{width:"30%",marginLeft:"500px"}}
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  onChange={(event) => setPassword(event.target.value)}
                />
                
              </div>
                      
         
              <input type="checkbox"   / ><p style={{marginLeft:"700px",marginTop:"-40px"}}>     Keep me signed in</p>
         <h6 style={{marginLeft:"400px"}}>Selecting this checkbox will keep you signed into your account on this device until you sign out. Do not select this on shared devices.</h6>
         <h6 style={{marginLeft:"400px"}}>By creating an account, I agree to the Expedia<a href="https://www.expedia.com/lp/lg-legal" > Terms and Conditions</a> , and  <a href="https://www.expedia.com/lp/b/exp-rewards-terms"> Expedia Rewards Terms and Conditions.</a></h6>
        
        
        

        
              


              <button  type="submit"  style={{marginLeft:"550px",width:"200px",height:"35px",marginTop:"15px",backgroundColor:"#3516ff",color:"white",border:"none",borderRadius:"10px"}}>
              <Link to="/" style={{textDecoration:"none",color:"white"}}>Continue</Link>
              </button>
              <p onClick={handleClick} className="forgot-password text-right" style={{marginLeft:"520px",marginTop:"15px"}}>
              Already have an account ?{" "}Sign in
                
              </p>
            
              {flag && (
                <Alert color="primary" variant="danger">
                  I got it you are in hurry! But every Field is important!
                </Alert>
              )}
            </form>
          ) : (
            <Login />
          )}
        </div>
        </div>
    </>
  );
}

export default Registration;
