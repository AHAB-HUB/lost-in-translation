import '../../css/login.css'
import logo from '../../assets/images/Logo.png'
import splash from '../../assets/Splash.svg'
import { useState, useRef } from 'react'

const Login = () => {

    const [username, setUsername] = useState("b")
    const input = useRef(null)

    const onClickLogin = () => {
        setUsername(input.current.value)
        //TODO: forward username to the header component
    }

    return (
        <div className="login">
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Sanchez&display=swap" rel="stylesheet" />
            <div className="banner">

                <div className="logo-container">
                    <img className="splash" src={splash} alt="splash" />
                    <img className="logo" src={logo} alt="logo" />
                </div>
                <div className="title">
                    <h1>Lost in translation</h1>
                    <p>Get started</p>
                </div>
            </div>
            <div className="wrapper">
                <div className="input-container">
                    <div className="input-">
                        {/*TODO: add a keyboard ui*/}
                        {/* <img src="" alt="keyboard" />
                        <div className="vertical-line" /> */}
                        <input ref={input} type="text" placeholder="What's your name?" required />
                        <button type="button" className="btn" onClick={onClickLogin}>login</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;