import React,{ useEffect, useState} from 'react';
import Navbar from '../navbar/Navbar'
import Favourite from '../music/Favourite';
import Library from '../music/Library';
import Feed from '../music/Feed';
import Music from '../music/Music';
import Player from '../music/Player';
import Sidebar from '../sidebar/Sidebar';
import Login from '../login/Login';


function App() {
 const [token,setToken]= useState("");
  useEffect(() => {
   const hash=window.location.hash;
    console.log(hash)
 },[])
  return(
    <div>
      <Library />
      <Music />
      <Player />
      <Login />
      <Navbar />

    </div>
  )
  
}

export default App;
