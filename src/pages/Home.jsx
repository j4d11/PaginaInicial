// import React from "react";
import './Home.css';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';

const Home = () => {
    const [name, setName] = useState()
    const handleSubmit = (event) => {
        event.preventDefault();

    }
    return (
        <div className="Container">
            <h1>Bem-vindo a Página Inicial!</h1>
            <form onSubmit={handleSubmit}>
                <div className='labelName'>
                    <label htmlFor="name">Insira seu nome:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className='btnContainer'>
                    <button className='btn' type="submit">Enviar</button>
                </div>

            </form>
            {/* <div className='Text'>
                <h1>Olá {name}!</h1>
            </div> */}
        </div>
    )

};

export default Home;


