import { useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'

import '../../css/login.css'
import logo from '../../assets/images/Logo.png'
import splash from '../../assets/Splash.svg'
import profile from '../../utils/user'

const Login = ({ updateUsername }) => {
    const history = useHistory()
    const [error, setError] = useState(null)
    const input = useRef(null)

    const onClickLogin = () => {

        if (input.current.value.replaceAll(/\s/g, "").length < 1) {
            setError("Enter a name first!")
            return;
        }

        updateUsername(input.current.value)
        //save user name to local storage
        const user = profile(input.current.value)
        localStorage.setItem("data", JSON.stringify(user.getUser()))

        history.push('/translate')
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
                    {error && <label className="error-message">{error}</label>}
                </div>
            </div>
        </div>
    );
}

export default Login;