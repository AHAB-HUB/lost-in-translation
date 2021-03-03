import React, { useRef,useState,useEffect } from "react";
import '../App.css';
import './css/InputBar.css'
import Profile from './Profile';
import './css/Profile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const InputBar = ({shrinkHeader}) => {
   
    const [value, setNewValue] = useState([]);
    const inputValue = useRef(null);

    useEffect(() => {
        const json = JSON.stringify(value);
        localStorage.setItem("value", json);
      }, [value]);

  

   const addValue =()=>{
    if (inputValue.current.value) {
        const newValue = {
        id: Math.random().toString(36).substr(2, 9),
        name: inputValue.current.value,
      };
      setNewValue([...value, newValue]);
      inputValue.current.value = "";
      shrinkHeader()
    }

   }

    return(  
    <div>
        {value.length>0 && <Profile name={value[0]}/>}
     <main>
        <div className="inputwrap">
                <div className="inputwhitewrap">
                    <div className="formwrap">
                    <div className="form-input ">
                        <label htmlFor="input" className="iconl"><FontAwesomeIcon className="far fa-keyboard" icon='keyboard'/></label>
                        <div className="iconr" onClick={addValue}><FontAwesomeIcon className="fas fon" icon='arrow-alt-circle-right'/></div>
                        <input ref={inputValue}  id="input" type="text" className="input" placeholder="What's your name?" required/>
                      </div>
                    </div>  
                </div>
        </div>
    </main>
   </div>);
   };
  
   
//name={"inputValue"} value={name} onChange={e => setName(e.target.value)}
   export default InputBar;