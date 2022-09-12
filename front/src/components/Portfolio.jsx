import React from "react";
import {Link} from "react-scroll";
import '../styles/portfolio.css';

import Landing from "./Landing";
import Info from "./Info";
import Habilidades from "./Habilidades";
import Proyectos from "./Proyectos";
import Contacto from "./Contacto";

export default function Portfolio() {
    
        window.onload = function() {
            const load = document.getElementById('load');
            const div = document.getElementById('hidden');
    
            load.style.display = 'none';
            div.id = 'none';
        };
    
    return(
        <div id="hidden">
            <div id='load'>
                <div class="lds-ripple">
                    <div></div>
                    <div></div>
                </div>
            </div>
            <header id="navbar">
            <div className="logo">
                <h2 className="logo">g<span>J</span></h2>
            </div>
                <ul id="menu">
                    <li>
                        <Link activeClass="active" to="home" spy={true} smooth={true} offset={-100} duration={500} className='link home'>
                            <button>Home</button>
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="info" spy={true} smooth={true} offset={460} duration={500} className='link'>
                            <button>Sobre mí</button>
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="habilidades" spy={true} smooth={true} offset={-80} duration={500} className='link'>
                            <button>Habilidades</button>
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="proyectos" spy={true} smooth={true} offset={-120} duration={500} className='link'>
                            <button>Proyectos</button>
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="contacto" spy={true} smooth={true} offset={-120} duration={500} className='link'>
                            <button>Contacto</button>
                        </Link>
                    </li>
                </ul>
            </header>

            <main id="main">
                <div id='home' className="pag">
                    <Landing />
                </div>
                <div id='info' className="pag sec">
                    <Info />
                </div>
                <div id='habilidades' className="pag ter">
                    <Habilidades />
                </div>
                <div id='proyectos' className="pag ter">
                    <Proyectos />
                </div>
                <div id='contacto' className="pag sec contact">
                    <Contacto />
                </div>
            </main>

        </div>
        
    )

}