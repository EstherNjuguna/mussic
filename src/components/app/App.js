//import React,{ useEffect, useState} from 'react';
//import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
//import Navbar from '../navbar/Navbar';
//import Favourite from '../music/Favourite';
import Library from '../music/Library';
//import Feed from '../music/Feed';
import Music from '../music/Music';
import Player from '../music/Player';
//import Sidebar from '../sidebar/Sidebar';
//import Login from '../login/Login';
import React from 'react'

function App() {
 // const [token,setToken]= useState("");
  //useEffect(() => {
   // const hash=window.location.hash;
    //console.log(hash)
 // },[])
  return(
    <div>
      <Library />
      <Music />
      <Player />

    </div>
   // <div className="App" class="p-3 mb-2 bg-primary text-white">
     // <Router>
       // <Navbar />
        //<Sidebar />
        //<Login />
        //<Routes>
          //<Route exact path="/" element={<Library/>}></Route>
         // <Route exact path="/Favourite" element={<Favourite/>}></Route>
          //<Route exact path="/Feed" element={<Feed/>}></Route>
         // <Route exact path="/Music" element={<Music/>}></Route>
          //<Route exact path="/Player" element={<Player/>}></Route>
          
         // </Routes>     
    // </Router>
    
  );
  
  
}

export default App;
