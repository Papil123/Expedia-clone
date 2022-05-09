import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import Home from "../Pages/Home";
import {Link} from 'react-router-dom'

function Login() {
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");

  const [flag, setFlag] = useState(false);

  const [home, setHome] = useState(true);

  function handleLogin(e) {
    e.preventDefault();
    let pass = localStorage
      .getItem("sanskarPassword")
      .replace(/"/g, "");
    let mail = localStorage.getItem("sanskarEmail").replace(/"/g, "");
    

    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log("EMPTY");
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    } else {
      setHome(!home);
      setFlag(false);
    }
  }

  return (
    
    <div style={{margingLeft:"-500px",marginTop:"10px"}}>
    <div style={{margingLeft:"500px"}}>
      {home ? (
        <form onSubmit={handleLogin}>
          <h3 style={{textAlign:"center"}}>Sign In</h3>
          <div className="form-group" style={{paddingLeft:"515px",marginTop:"10px"}}>
            <label></label>
            <input
            style={{padding:"10px 55px",borderRadius:"10px"}}
              type="email"
              className="form-control"
              placeholder="Email address"
              onChange={(event) => setEmaillog(event.target.value)}
            />
          </div>

          <div className="form-group" style={{marginTop:"10px",paddingLeft:"515px"}}>
            <label></label>
            <input   style={{padding:"10px 55px",borderRadius:"10px"}}
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(event) => setPasswordlog(event.target.value)}
            />
          </div>

          <div style={{paddingLeft:"505px",marginTop:"15px",fontSize:"16px"}}>

          <p>    <input className="check" type="checkbox" /> Keep me signed in</p>

          <h6>Selecting this checkbox will keep you signed into your account on this device until you sign out. Do not select this on shared devices.</h6>
<h6>By creating an account, I agree to the Expedia<a href="https://www.expedia.com/lp/lg-legal" > Terms and Conditions</a> , and  <a href="https://www.expedia.com/lp/b/exp-rewards-terms"> Expedia Rewards Terms and Conditions.</a></h6>
            </div>

         
        
        
             

          <button type="submit" style={{marginLeft:"550px",width:"200px",height:"35px",marginTop:"15px",backgroundColor:"#3516ff",color:"white",border:"none",borderRadius:"10px"}}>
           
            <Link to="/" style={{textDecoration:"none",color:"white"}}>Login</Link>
          </button>

          <a style={{paddingLeft:"595px",paddingTop:"55px",fontSize:"16px"}} href="Registration.js" >Forgot password? </a>

     

          {flag && (
            <Alert color="primary" variant="warning">
              Fill correct Info else keep trying.
            </Alert>
          )}
        </form>
      ) : (
        ""
      )}
    </div>
    </div>
  );
}

export default Login;
