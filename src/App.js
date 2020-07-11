import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Contact from './Components/Contact';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path ='/' component={Home}/>
        <Route path ='/aboutus' component={AboutUs}/>
        <Route  path ='/contact' component={Contact}/>

      </Switch>
    </Router>
  );
}

export default App;
