import React from "react";
import '../App.css';
import './css/InputBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/**Todo
 * local storrage (get set)
 * 
 * if time add transition
 */
const InputBar = () => {
    return(  
    <div>
     <main>
        <div className="inputwrap">
                <div className="inputwhitewrap">
                    <div className="formwrap">
                    <div className="form-input ">
                        <label htmlFor="input" className="iconl"><FontAwesomeIcon className="far fa-keyboard" icon='keyboard'/></label>
                        <div className="iconr" ><FontAwesomeIcon className="fas fon" icon='arrow-alt-circle-right'/></div>
                        <input id="input" type="text" className="input" placeholder="What's your name?" required/>
                      </div>
                    </div>  
                </div>
        </div>
    </main>
   </div>);
   };

   export default InputBar;