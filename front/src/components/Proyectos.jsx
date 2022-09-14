import React from "react";
import '../styles/landing.css';
import '../styles/proyectos.css';

export default function Proyectos() {

    return (
        <div>
        <h3 className="titulo">PROYECTOS</h3>
        <div className="hojas">
            <div className="grid">
                <div>
                    <img src="https://res.cloudinary.com/cusi/image/upload/v1661698183/chincheta_whvbcl.png" alt="chinche" className="chinche"/>
                    <div className="hoja">
                        <h4>NFT Market</h4>
                        <div>
                            <img src="https://res.cloudinary.com/cusi/image/upload/v1661731866/Proyectos/nftM-1_kdjwy3.jpg" alt="imgNFT" className="proyect nft"/>
                        </div>  
                        <p><span>*</span>Desarrollo Back-end</p> 
                    </div>
                </div>
                <div className="columna">
                    <div>
                        <a href="https://inspiring-seahorse-c66785.netlify.app/" target="_blank" rel="noopener noreferrer" className='botoncito proyec'>
                            <button className="boton">
                                Deploy
                            </button>
                        </a>
                    </div>
                    <img src="https://res.cloudinary.com/cusi/image/upload/v1661625331/flecha-2_ocb6oi.png" alt="flecha1" className="flecha1 port" />
                </div>
            </div>
            <div className="grid">
                <div>
                    <img src="https://res.cloudinary.com/cusi/image/upload/v1661698183/chincheta_whvbcl.png" alt="chinche" className="chinche"/>
                    <div className="hoja">
                        <h4>Recipe Book</h4>
                        
                        <div>
                            <img src="https://res.cloudinary.com/cusi/image/upload/v1661731899/Proyectos/rec-book-1_yztlxp.jpg" alt="imgRB" className="proyect rb"/>
                        </div>
                        <p><span>*</span>Desarrollo Full-Stack</p>
                    </div>
                </div>
                <div className="columna">
                    <div>
                        <a href="https://github.com/cusi7/PI-Recipe-Book" target="_blank" rel="noopener noreferrer" className='botoncito proyec'>
                            <button className="boton">
                                Repo
                            </button>
                        </a>
                    </div>
                    <img src="https://res.cloudinary.com/cusi/image/upload/v1661625331/flecha-2_ocb6oi.png" alt="flecha1" className="flecha1 port" />
                </div>
            </div>
            <div className="grid">
                <div>
                    <img src="https://res.cloudinary.com/cusi/image/upload/v1661698183/chincheta_whvbcl.png" alt="chinche" className="chinche"/>
                    <div className="hoja">
                        <h4>Admin Gastos</h4>
                        <div>
                            <img src="https://res.cloudinary.com/cusi/image/upload/v1663139533/Proyectos/costos-app_iywr0t.jpg" alt="imgGastos" className="proyect gas"/>
                        </div>  
                        <p><span>*</span>Desarrollo Front-end Angular</p> 
                    </div>
                </div>
                <div className="columna">
                    <div>
                        <a href="https://gastos-admin.vercel.app/" target="_blank" rel="noopener noreferrer" className='botoncito proyec'>
                            <button className="boton">
                                Deploy
                            </button>
                        </a>
                    </div>
                    <img src="https://res.cloudinary.com/cusi/image/upload/v1661625331/flecha-2_ocb6oi.png" alt="flecha1" className="flecha1 port" />
                </div>
            </div>
        </div> 
    </div> 
    )
    
};