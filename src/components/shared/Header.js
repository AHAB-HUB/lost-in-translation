import '../../css/App.css';
import '../../css/header.css';
import profile from '../../assets/images/profile.jpg';

const Header = () => {
    const username = "ahmad"

    return (
        <div className="header">
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Love+Ya+Like+A+Sister&display=swap" rel="stylesheet" />
            <p>Lost in translation</p>
            <div className="image-container">
                <div className="item">
                    <p className="nametag">{username}</p>
                </div>
                <div className="item">
                    <img className="image" src={profile} alt={username} />
                </div>
            </div>
        </div>
    );
}
export default Header;
