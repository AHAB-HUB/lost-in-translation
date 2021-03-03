import React, { useRef,useState } from "react";
import Inputbar from './InputBar'


import '../App.css';
import './css/AppHeader.css'
import Logo from './images/Logo.png'
const Appheader = () => {
    
    const header = useRef(null);
    const lhwrap = useRef(null);
    
    /**Collaps header when the name is set */
    function shrinkHeader(){

       if(header.current.classList.value==='headerActive'){
            header.current.classList.toggle("shrink");
            lhwrap.current.classList.toggle("gone");
       }
    }

 return(  
 <div>
 <header ref={header} className="headerActive">
    <span className="miniHeader">Lost in translation</span>
    <hr className="divider" />
    <div ref={lhwrap} className="lhwrap">
        <div className="logowrap">
            <img src={Logo} className="logoimg" alt="lost-in-translation logo"/>
        </div>
        <div className="hwrap">
            <h1>Lost in translation</h1><br/>
            <h2>Get startet</h2>
        </div>
    </div>
</header>
<Inputbar shrinkHeader={() => shrinkHeader() }/>
</div>);
};

export default Appheader;