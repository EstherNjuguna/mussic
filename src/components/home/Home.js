import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Navbar from '../navbar/Navbar';
import Search from '../search/Search';
import Library from '../music/Library';
import Music from '../music/Music';
import Login from '../login/Login';

function Home() {

<div className="App" class="p-3 mb-2 bg-secondary text-white">
      
<Router>
  <Navbar />
  
  <Login />
 
  <Routes>
    <Route exact path="/" element={<Library/>}></Route>
    <Route exact path="/Navbar" element={<Navbar/>}></Route>
    <Route exact path="/Login" element={<Login/>}></Route>
    <Route exact path="/Music" element={<Music/>}></Route>
    <Route exact path="/Search" element={<Search/>}></Route>
    
    </Routes>     
</Router>
</div>



}

export default Home;