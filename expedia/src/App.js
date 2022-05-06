import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';

import MainRoutes from './Routes/MainRoutes';
import {Footer} from './Components/Footer';
import TabPanel from './Components/TabPanel'

function App() {
  return (
    <div className="App">
     {/* <Navbar/> */}
     <TabPanel/>
     <MainRoutes/>
     <Footer/>
    </div>
  );
}

export default App;
