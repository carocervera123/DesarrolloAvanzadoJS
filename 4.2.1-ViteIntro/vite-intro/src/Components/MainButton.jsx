import React from "react";

function MainButton({text, handlingFunction}){
    return(
        <>
            <button onClick={handlingFunction}>{text}</button>
        </>
    )
}

export default MainButton;