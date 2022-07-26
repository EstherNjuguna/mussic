import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Navbar from '../navbar/Navbar';
import './App.css';
import Search from '../search/Search';
import Login from '../login/Login';
import Music from '../music/Music';
import Playlist from '../playlist/Playlist';
import Home from '../home/Home';
import Signup from '../signup/Signup';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<home/>}></Route>
          <Route exact path="/search" element={<search/>}></Route>
          <Route exact path="/music" element={<music/>}></Route>
          <Route exact path="/Login" element={<login/>}></Route>
          <Route exact path="/signup" element={<signup/>}></Route>
          <Route exact path="/playlist" element={<playlist/>}></Route>

          </Routes>     
     </Router>
    </div>
  );
  
  
}

export default App;
