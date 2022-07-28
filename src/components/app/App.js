import React,{ useEffect, useState} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Navbar from '../navbar/Navbar'
import Library from '../music/Library';
import Music from '../music/Music';
import Login from '../login/Login';
import Home from '../home/Home';
import { Provider } from '../context';

function App() {


  <Router>
    <>
      <Navbar />
      <Library />
      <div className="container">
      
        <Route exact path="/" component={Home}/>
    
      </div>
      </>
  
    </Router>

  
  
}

export default App;
