import '../../css/profile.css'
import '../../css/signs.css'
import profile from '../../utils/user'

const Profile = () => {

    const user = profile()
    user.setUser(JSON.parse(localStorage.getItem('data')))

    const items = (user.getTranslations())
        ? user.getTranslations().map((item, index) =>
            <div key={index} className="item-container">
                <div key={item} className="translation"> word: {item}</div>
                <div key={index} className="translation"> Translation: </div>
                {item.replaceAll(/\s/g, "").split("").map((letter, i) =>
                    <div key={i} className={"sign " + letter} />
                )}
            </div>
        )
        : <div className="error">There is nothing to show</div>
    return (
        <div className="profile">
            <div className="list-container">
                {items}
            </div>
        </div>
    );
}

export default Profile;