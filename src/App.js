import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import {faArrowAltCircleRight, faKeyboard } from '@fortawesome/free-solid-svg-icons'

import Appheader from './components/AppHeader'
import Inputbar from './components/InputBar'

library.add(fab,far, faArrowAltCircleRight, faKeyboard)
function App() {
  return (
    <div>
        <Appheader/>
        <Inputbar/>
        </div>
  );
}

export default App;
