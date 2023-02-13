import React from "react";
import '../styles/landing.css';
import '../styles/info.css';

export default function Info() {
    return(
        <>
        <div id="info">
            <h3 className="titulo">SOBRE MI</h3>
            <ul>
                <li className="texto">Soy desarrolladora Web Full Stack egresada de Henry Bootcamp.</li>
                <li className="texto">Me caracterizo por ser una persona responsable, colaborativa, flexible y curiosa, 
                    con ganas de aprender día a día para crecer tanto en lo profesional como en lo personal.</li>
                <li className="texto">Me apasiona tanto la lógica como el diseño, por lo que la programación me inspira todos los días,
                    y me incentiva a seguir aprendiendo.</li>
                <li className="texto">Te invito a descargar mi CV, y no dudes en contactarme para conocer más sobre mí...</li>
            </ul>
            <img src="https://res.cloudinary.com/cusi/image/upload/v1661625331/flecha-2_ocb6oi.png" alt="'flecha1" className='flecha1'/>
            <a href= "https://drive.google.com/file/d/1ECilCPQsI_RdjrJKIyxrBk-22ako-JVT/view" target="_blank" rel="noopener noreferrer" className='botoncito cv'>
                <button className="boton">
                    Mi CV
                </button>
            </a>
        </div>
        <div id="imagenes">
            <img src="https://res.cloudinary.com/cusi/image/upload/v1661627064/foco_muaxrb.png" alt="foco" id="foco"/>
            <img src="https://res.cloudinary.com/cusi/image/upload/v1661627072/nave_it8zh2.png" alt="nave" id="nave" />
        </div>
        </>
    )

};