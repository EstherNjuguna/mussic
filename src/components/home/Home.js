import React,{ useEffect, useState} from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Navbar from '../navbar/Navbar';
import Favourite from '../music/Favourite';
import Library from '../music/Library';
import Feed from '../music/Feed';
import Music from '../music/Music';
import Player from '../music/Player';
import Sidebar from '../sidebar/Sidebar';
import Login from '../login/Login';
//import { setClientToken } from '../../spotify';


function Home() { 

    //const [token, setToken] = useState("");
  
    //useEffect(() => {
      //const token = window.localStorage.getItem("token");
     // const hash = window.location.hash;
     // window.location.hash = "";
      //if (!token && hash) {
      //  const _token = hash.split("&")[0].split("=")[1];
        //window.localStorage.setItem("token", _token);
       // setToken(_token);
       // setClientToken(_token);
    //  } else {
      //  setToken(token);
      //  setClientToken(token);
    //  }
   // }, []);
  

  //return !token ?(
//<Login />) : 
    <div className="App" class="p-3 mb-2 bg-secondary text-white">
      
      <Router>
        <Navbar />
        <Sidebar />
        <Login />
       
        <Routes>
          <Route exact path="/" element={<Library/>}></Route>
          <Route exact path="/Favourite" element={<Favourite/>}></Route>
          <Route exact path="/Feed" element={<Feed/>}></Route>
          <Route exact path="/Music" element={<Music/>}></Route>
          <Route exact path="/Player" element={<Player/>}></Route>
          
          </Routes>     
     </Router>
    </div>
  
  
  
}

export default Home;