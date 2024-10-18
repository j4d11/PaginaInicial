import React from 'react';


const Contact = () => {
    return (
        <div className="contact-container">
            <h1>Fale conosco!</h1>
            <form className="contact-form">
                <label htmlFor="name">Nome:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="message">Messagem:</label>
                <textarea id="message" name="message" rows="5" required />

                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default Contact;
