import React from 'react';
import Navbar from '../navbar/Navbar';
import './App.css';
import Search from '../search/Search';
import Music from '../music/Music';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<home/>}></Route>
          <Route exact path="/search" element={<search/>}></Route>
          <Route exact path="/music" element={<music/>}></Route>
          </Routes>     
     </Router>
    </div>
  );
  
  
}

export default App;
