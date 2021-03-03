import React from "react";
import '../App.css';
import './css/AppHeader.css'
import Logo from './images/Logo.png'
const Appheader = () => {
 return(  
 <div>
 <header>
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
</div>);
};

export default Appheader;