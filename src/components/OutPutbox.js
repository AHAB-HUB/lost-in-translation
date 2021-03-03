
import React, { forwardRef,useRef, useImperativeHandle } from "react";
import '../App.css';
import './css/OutPutBox.css'
import {HandSigns} from './utils/HandSigns'
import signhands from './images/sign-spritesheet-1200.png'

const Outputbox = forwardRef((props, ref) => {

    const handPos=HandSigns();

    useImperativeHandle(ref,() => ({
        
        translate(strToTranslate){
            console.log("from box "+strToTranslate)    
        }

    }),);
    
    return (
        <div>
            <div className="outputwrap">
                <div className="outputwhitewrap">
                {handPos.map((handPos) => 
          

                <div className="hands" hand-data={handPos.letter} key={handPos.letter}>
                    <img src={signhands} style={{left:"-"+handPos.x+'px',top:"-"+handPos.y+'px'} } alt={"ASL hand of the letter "+handPos.letter} />
                </div>
              // <img src={signhands} style={ {left:handPos.x+'px'}+";"+{top:handPos.y}} alt={"ASL hand of the letter "+handPos.letter} />

                
                
                )}
                </div>
            </div>

        </div>);
});

export default Outputbox;