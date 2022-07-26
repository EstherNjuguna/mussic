import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Navbar from '../navbar/Navbar';
import './App.css';
import Search from '../search/Search';
import Login from '../login/Login';
import Music from '../music/Music';
import Authentication from '../authentication/Authentication';
import Home from '../home/Home';



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/search" element={<Search/>}></Route>
          <Route exact path="/music" element={<Music/>}></Route>
          <Route exact path="/Login" element={<Login/>}></Route>
          <Route exact path="/Signup" element={<Authentication/>}></Route>
          <Route exact path="/" element={<Home />} />  
          </Routes>     
     </Router>
    </div>
  );
  
  
}

export default App;
