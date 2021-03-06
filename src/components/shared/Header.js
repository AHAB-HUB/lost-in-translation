import '../../css/App.css';
import '../../css/header.css';
import profile from '../../assets/images/profile.jpg';
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

const Header = () => {
    const history = useHistory()
    const username = useSelector(state => state.username)
    const isLogged = useSelector(state => state.isLogged)
    const dispatch = useDispatch()

    const redirectToProfile = () => {
        history.push('/profile')
    }

    const logout = () => {
        dispatch({ type: "SIGN_IN" })
        localStorage.removeItem("data")
        history.push('/')
    }

    return (
        <div className="header">
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Love+Ya+Like+A+Sister&display=swap" rel="stylesheet" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Sanchez&display=swap" rel="stylesheet" />

            <p>Lost in translation</p>
            {isLogged && <div className="image-container">
                <div className="item">
                    <p className="nametag">{username}</p>
                </div>
                <div className="item" onClick={redirectToProfile}>
                    <img className="image" src={profile} alt={username} />
                </div>
                <div className="dropdown-container">
                    <Link className="dropdown-item" to="/profile">Profile</Link>
                    <div className="dropdown-item" onClick={logout}>Log Out</div>
                </div>
            </div>}
        </div>
    );
}
export default Header;