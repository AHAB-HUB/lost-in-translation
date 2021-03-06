import './App.css';

import React, { useRef } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Appheader from './components/AppHeader'
import ProfilePage from './components/ProfilePage'
//import Home from './components/Home'
import Outputbox from './components/OutPutbox'
import Inputbar from './components/InputBar'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { faArrowAltCircleRight, faKeyboard } from '@fortawesome/free-solid-svg-icons'

library.add(fab, far, faArrowAltCircleRight, faKeyboard)



function App() {

      const headerRef = useRef();
      const outputbox = useRef();
      const profileRef =useRef();

      //using forwardRef to pass information from child component to child component
      function passToHeader() {
            /**Tell header to Animate */
            headerRef.current.shrinkHeader()
      }

      function passToOutPutBox(strTotranslate) {
            /**send input value to translation */
            outputbox.current.translate(strTotranslate);
      }

      function passToProfile(translation){
            /**send latest translation to profile page */
            profileRef.current.updateList(translation)
      }

      return (
            <div>

                  <Router>
                        <Appheader ref={headerRef} />
                        <ProfilePage ref={profileRef}/>
                        <Inputbar passToHeader={passToHeader} passToOutPutBox={passToOutPutBox} passToProfile={passToProfile}/>
                        <Switch>
                              {/*just a blank component to have a home path*/}
                             {/* <Route exact path="/" component={Home} />*/}
                              <Route path='/translate' component={() => <Outputbox ref={outputbox} />} />
                        </Switch>

                  </Router>

            </div>
      );


}

export default App;
