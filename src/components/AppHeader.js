import React, { useRef,useState } from "react";
import Inputbar from './InputBar'


import '../App.css';
import './css/AppHeader.css'
import Logo from './images/Logo.png'
const Appheader = () => {
    
    const header = useRef(null);

    function shrinkHeader(paramFromChild){
        console.log(paramFromChild+" from child")
        
    }

 return(  
 <div>
 <header ref={header}>
    <span className="miniHeader">Lost in translation</span>
    <hr className="divider" />
    <div className="lhwrap">
        <div className="logowrap">
            <img src={Logo} className="logoimg" alt="lost-in-translation logo"/>
        </div>
        <div className="hwrap">
            <h1>Lost in translation</h1><br/>
            <h2>Get startet</h2>
        </div>
    </div>
</header>
<Inputbar shrinkHeader={(paramFromChild) => shrinkHeader(paramFromChild) }/>
</div>);
};

export default Appheader;