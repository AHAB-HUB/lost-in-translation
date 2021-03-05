import '../../css/login.css'
import logo from '../../assets/images/Logo.png'
import splash from '../../assets/Splash.svg'
import profile from '../../utils/user'
import { setUsername } from '../../redux/actions/usernameActions'
import { useRef, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

const Login = () => {
    const history = useHistory()
    const [error, setError] = useState(null)
    const input = useRef(null)
    const dispatch = useDispatch()
    const islogged = useSelector(state => state.isLogged)

    useEffect(() => {
        if (islogged) {
            history.push('/translate')
        }
    }, [history, islogged])

    const onClickLogin = () => {
        //show error message if the input is empty
        if (input.current.value.replaceAll(/\s/g, "").length < 1) {
            setError("Enter a name first!")
            return;
        }
        //update state
        dispatch(setUsername(input.current.value))
        dispatch({ type: "SIGN_IN" })
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