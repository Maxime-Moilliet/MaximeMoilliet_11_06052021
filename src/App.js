import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Home } from './Components/Home';
import { Footer } from './Components/Base/Footer';
import { Header } from './Components/Base/Header';
import { About } from './Components/About';
import  PropertyDetails  from './Components/PropertyDetails';

export default function App () {
  return (
    <Router>

      <Header />

      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path ='/property/:id' component={PropertyDetails} />
      </Switch>

      <Footer />

    </Router>
  );
}

