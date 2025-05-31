import React from "react";
import MainButton from "./MainButton";

function Form({input, setInput, setName}){

    const handleForm = (e) => {
        e.preventDefault();
        setName(input);
    }

    return(
        <form>
            <label htmlFor="name">Ingresa tu nombre</label>
            <input type="text" id="name" value={input} onChange={(e) => setInput(e.target.value)}/>
            <MainButton handlingFunction={handleForm} text={"Subir nombre"} />
        </form>
    )
}

export default Form;