import React from "react";
import '../styles/landing.css';

export default function Landing() {

    return(
        <>
        <div id="info">
            <h1 className="saludo">Hola, soy <span>Griselda</span> Juarez</h1>
            <p className="titulo">Full Stack Developer</p>
        </div>
        <img src="https://res.cloudinary.com/cusi/image/upload/v1661571999/palito_ft0zkk.png" alt='muñeco_palito' id="foto"/>
        </>
    )

};