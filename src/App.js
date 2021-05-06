import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Home } from './Components/Home';
import { Footer } from './Components/Base/Footer';
import { Header } from './Components/Base/Header';

export default function App () {
  return (
    <Router>

      <Header />

      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>

      <Footer />

    </Router>
  );
}

