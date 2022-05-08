
import React from 'react';
import './App.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Registration from './Components/Registeration';
import MainRoutes from './Routes/MainRoutes';
import {Footer} from './Components/Footer';
import TabPanel from './Components/TabPanel'

function App() {
  return (
    <div className="App">
      <div className="outer">
        <div className="inner">
          <MainRoutes/>
        </div>
      </div>
    </div>
  );
}

export default App;
