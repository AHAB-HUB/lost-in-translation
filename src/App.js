import './App.css';

import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

import Home from './components/Home'
import Appheader from './components/AppHeader'
import Outputbox from './components/OutPutbox'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import {faArrowAltCircleRight, faKeyboard } from '@fortawesome/free-solid-svg-icons'

library.add(fab,far, faArrowAltCircleRight, faKeyboard)

function App() {
  return (
       <div>
   <Router>
        <Appheader/>
    
            
            <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/translate' component={Outputbox}/>
            </Switch>

  </Router>    

        </div>
  );
}

export default App;
