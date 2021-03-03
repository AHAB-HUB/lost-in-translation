import './App.css';

import React, { useRef } from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

import Appheader from './components/AppHeader'
import Home from './components/Home'
import Outputbox from './components/OutPutbox'
import Inputbar from './components//InputBar'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import {faArrowAltCircleRight, faKeyboard } from '@fortawesome/free-solid-svg-icons'
library.add(fab,far, faArrowAltCircleRight, faKeyboard)

function App() {

 const headerRef = useRef();
 const outputbox = useRef();

 function passToHeader(fromChild){
      console.log("Hello "+fromChild)
      headerRef.current.shrinkHeader()
 }     

function passToOutPutBox(strTotranslate){
      outputbox.current.translate(strTotranslate);

}

  return (
       <div>
             
   <Router>
   
      <Appheader ref={headerRef}/> 
      <Inputbar passToHeader={passToHeader} passToOutPutBox={passToOutPutBox}/>
            <Switch>
      <Route exact path="/" component={Home}/>
      <Route path='/translate'  component={() => <Outputbox ref={outputbox}/>}/> 
            </Switch>

  </Router>    

        </div>
  );
}

export default App;
