import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import Home from "../Pages/Home";

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
    
    <div>
      {home ? (
        <form onSubmit={handleLogin}>
          <h3>Sign In</h3>
          <div className="form-group">
            <label></label>
            <input
              type="email"
              className="form-control"
              placeholder="Email address"
              onChange={(event) => setEmaillog(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label></label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(event) => setPasswordlog(event.target.value)}
            />
          </div>

          <p>    <input className="check" type="checkbox" /> Keep me signed in</p>
        
        
              <h6>Selecting this checkbox will keep you signed into your account on this device until you sign out. Do not select this on shared devices.</h6>
<h6>By creating an account, I agree to the Expedia<a href="https://www.expedia.com/lp/lg-legal" > Terms and Conditions</a> , and  <a href="https://www.expedia.com/lp/b/exp-rewards-terms"> Expedia Rewards Terms and Conditions.</a></h6>

          <button type="submit" className="butt-s btn btn-primary btn-lg btn-block ">
            Login
          </button>
          <a className="a" href="Registration.js" >Forgot password? </a>

     

          {flag && (
            <Alert color="primary" variant="warning">
              Fill correct Info else keep trying.
            </Alert>
          )}
        </form>
      ) : (
        <Home />
      )}
    </div>
  );
}

export default Login;
