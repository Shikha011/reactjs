import React from 'react';
import Details from './Details/Details.js'

import {Route, Link, BrowserRouter as Router} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router>
    <div>
<Route path="/Details" component={Details}/>
    
    </div>
    </Router>

  );
}

export default App;
