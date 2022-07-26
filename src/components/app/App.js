import React from 'react';
import Navbar from '../navbar/Navbar';
import './App.css';
import Search from '../search/Search';
import Dropdown from '../dropdown/Dropdown';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/search" element={<Search/>}></Route>
          <Route exact path="/dropdown" element={<Dropdown/>}></Route>
          </Routes>     
     </Router>
    </div>
  );
  
  
}

export default App;
