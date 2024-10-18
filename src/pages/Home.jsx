import React from "react";
import './StyleHome.css';
import { useState } from 'react';
import { ReactDOM } from 'react';

const Home = () => {
    const [name, setName] = useState('');
    const [showName, setShowName] = useState(false); 

    const handleSubmit = (event) => {
        event.preventDefault();
        setShowName(true); 
    }

    return (
        <div className="Container">
            <h1>Bem-vindo à Página Inicial!</h1>
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

           <div className="ShowName">
            {showName && <div className="resultado">Olá, {name}!</div>}
            </div>
        </div>
    );
};

export default Home;