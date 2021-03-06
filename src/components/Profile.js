import React from "react";

function Profile({name}){

function showIntries(){
    let ppw=document.querySelector('.profilePagewrap')
    console.log(ppw.classList)
   

    if(ppw.className!=='profilePagewrap popout'){
        ppw.classList.remove("popin")
        ppw.classList.add("popout");

    }else{
        ppw.classList.remove("popout")
        ppw.classList.add("popin");
    }
    
    /*
    if(ppw.className==='profilePagewrap popout'){
       
        ppw.classList.remove("popout")
       // ppw.classList.add("popin");
    }
    */
    
}


    return(
        <div>
        <div className="profilewrap" onClick={showIntries}>
            <div className="profileName">{name}</div>
            <div className="profileImage"></div>
        </div>

        </div>
    )


}
export default Profile;