import { useState, useRef } from 'react';
import '../../css/translate.css'
import '../../css/signs.css'

const Translate = () => {
    const [message, setMessage] = useState(null)
    const input = useRef(null)

    const onClickTranslate = () => {
        setMessage(input.current.value)
    }

    const signs = (message) ? message.replaceAll(/\s/g, "").split("").map(function (item, i) {

        return <div class="item-wrapper">
            <div key={i} className={"sign " + item} ></div>
        </div>
    }) : <div></div>

    return (
        <div className="translate">
            <div className="banner">

                <div className="input">
                    {/*TODO: add a keyboard ui*/}
                    {/* <img src="" alt="keyboard" />
                        <div className="vertical-line" /> */}
                    <input ref={input} type="text" placeholder="Type a word to translate." required />
                    <button type="button" className="btn" onClick={onClickTranslate}>Translate</button>
                </div>
            </div>
            <div className="items-outter-container">
                <div className="items-container">
                    {signs}
                </div>
            </div>
        </div>
    );
}

export default Translate;