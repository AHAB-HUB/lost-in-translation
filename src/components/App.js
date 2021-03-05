import '../css/App.css';
import Header from './shared/Header'
import Footer from './shared/Footer'
import Login from './containers/Login'
import Translate from './containers/Translate'
import Profile from './containers/Profile'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PrivateRoute from './PrivateRoute';

function App() {

  return (
    <div className="app">
      <Router>
        <Header />

        <Switch>
          <PrivateRoute exact path="/translate" component={Translate} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <Route exact path="/signin" component={Login} />
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;