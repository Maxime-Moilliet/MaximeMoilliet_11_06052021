import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Home } from './Components/Home';
import { Footer } from './Components/Base/Footer';
import { Header } from './Components/Base/Header';
import { About } from './Components/About';

export default function App () {
  return (
    <Router>

      <Header />

      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
      </Switch>

      <Footer />

    </Router>
  );
}

