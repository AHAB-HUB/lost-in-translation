import React from "react";
import '../App.css';
import './css/OutPutBox.css'
import {HandSigns} from './utils/HandSigns'
import signhands from './images/sign-spritesheet-1200.png'

const Outputbox = () => {

    const handPos=HandSigns();
    
    return (
        <div>
            <div className="outputwrap">
                <div className="outputwhitewrap">
                {handPos.map((handPos) => 
          

                <div className="hands" hand-data={handPos.letter}>
                    <img src={signhands} style={{left:"-"+handPos.x+'px',top:"-"+handPos.y+'px'} } alt={"ASL hand of the letter "+handPos.letter} />
                </div>
              // <img src={signhands} style={ {left:handPos.x+'px'}+";"+{top:handPos.y}} alt={"ASL hand of the letter "+handPos.letter} />

                
                
                )}
                </div>
            </div>

        </div>);
};

export default Outputbox;