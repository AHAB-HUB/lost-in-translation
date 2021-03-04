import '../css/App.css';
import Header from './shared/Header'
import Footer from './shared/Footer'
import Login from './containers/Login'
import Translate from './containers/Translate'
import Profile from './containers/Profile'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useState } from 'react'

function App() {
  const [username, setUsername] = useState(null)

  const updateUsername = (name) => {
    setUsername(name)
  }

  return (
    <div className="app">
      <Router>
        <Header username={username} />

        <Switch>
          <Route path="/translate" component={Translate} />
          <Route path="/profile" component={Profile} />
          <Route exact path="/" ><Login updateUsername={updateUsername} /></Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;