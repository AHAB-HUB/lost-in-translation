
import React, { useState, forwardRef, useImperativeHandle } from "react";
import './css/ProfilePage.css'
const ProfilePage = forwardRef((props, ref) => {


    const [t, setTranslate] = useState([]);


    useImperativeHandle(ref, () => ({

        updateList(translations) {

            setTranslate(translations)
            console.log(t)

        }


    }));

function clarlocal(){
    localStorage.clear();
}

    return (

        <div className="profilePagewrap">

            <h6>Your 10 latest translations</h6>
            <ul>
                {
                    t.map((item, i) => {

                        return <li key={i}>{item}</li>
                    })

                }

            </ul>
            <div className="logoutwrap">

                {localStorage.getItem('username')!=null && <div className="logout" onClick={clarlocal}>LOGOUT</div>}
            </div>

        </div>
    )


});

export default ProfilePage