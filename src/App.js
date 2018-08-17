import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home'; 
import './index.css';
import Portfolio from "./components/Portfolio"; 
import Contact from "./components/Contact"; 




class App extends Component {
   render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/Portfolio" component={Portfolio} />
          <Route path="/Contact" component={Contact} />
       
         
          
        </div>
      </Router>
    );
  }
}

export default App;