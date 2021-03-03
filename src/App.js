import './App.css';

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
        <Appheader/>
       
        <Outputbox/>
        </div>
  );
}

export default App;
