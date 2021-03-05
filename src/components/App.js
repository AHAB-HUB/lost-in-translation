import '../css/App.css';
import Header from './shared/Header'
import Footer from './shared/Footer'
import Login from './containers/Login'
import Translate from './containers/Translate'
import Profile from './containers/Profile'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PrivateRoute from './PrivateRoute';
import { useDispatch } from 'react-redux'
import { setUsername } from '../redux/actions/usernameActions'
import { useEffect } from 'react'

import profile from '../utils/user'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {

    if (localStorage.getItem("data") !== null) {
      let user = profile()
      user.setUser(JSON.parse(localStorage.getItem("data")))

      dispatch({ type: 'SIGN_IN' })
      dispatch(setUsername(user.getUsername()))
    }
  }, [dispatch])

  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/signin" component={Login} exact />
          <PrivateRoute path="/profile" component={Profile} exact />
          <PrivateRoute path="/translate" component={Translate} exact />
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;