import './App.css'
import MainButton from 'Components/MainButton';
import Form from './Components/Form';
import TitlesContainer from 'Components/TitlesContainer';
import { useState } from 'react';

function App() {

    const messages = [];

    const handleMyFirstButton = (e) => {
        console.log(e.target);
    }

    const [name, setName] = useState("");
    const [input, setInput] = useState("");

    for (let i = 1; i <= 25; i++) {
        messages.push(`Este es el titulo #${i}`);
    }

    return (
        <>
            <h1>Hola desde React</h1>
            <MainButton handlingFunction={handleMyFirstButton} text={"Este es mi primer boton en React"} />
            <Form input={input} setInput={setInput} setName={setName} />
            <h1>{name}</h1>
            <TitlesContainer>
                {messages.map((message, key) => {
                    return (
                        <h1 key={key}>{message}</h1>
                    )
                })}
            </TitlesContainer>
        </>
    )
}

export default App