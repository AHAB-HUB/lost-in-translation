
import React, { forwardRef,useState, useImperativeHandle } from "react";
import '../App.css';
import './css/OutPutBox.css'
import {HandSigns} from './utils/HandSigns'
import signhands from './images/sign-spritesheet-1200.png'

const Outputbox = forwardRef((props, ref) => {

    const handPos=HandSigns();
    const [translate, setTranslate] = useState([]);

    useImperativeHandle(ref,() => ({
        

        translate(strToTranslate){
            
            /**create array from the string  */
            let ArrToTranslate=strToTranslate.toUpperCase().split('');
           /**Find matching letters in in hand potision object */
            const lettersList = letter => ArrToTranslate.includes(letter)
            let result = handPos.filter(item => lettersList(item.letter))  
            /**Sort the matching letters so the match the strings array index */  
            const translation = ArrToTranslate.map((i) => result.find((j) => j.letter === i));
           
            setTranslate (translation)
        
        }

    }),);
    /**
     * random unique key for react to keep track of
     * child in list
     */
    function randKey(){
        return Math.random().toString(36).substr(2, 9);
    }
    
    return (
        <div>
            <div className="outputwrap">
                <div className="outputwhitewrap">
                    
                {translate.map((translate) => 
                <div className="hands" hand-data={translate.letter} key={randKey()}>
                    <img src={signhands} style={{left:"-"+translate.x+'px',top:"-"+translate.y+'px'} } alt={"ASL hand of the letter "+translate.letter} />
                </div>
                
                )}
            
                </div>
            </div>
                
        </div>);
});

export default Outputbox;