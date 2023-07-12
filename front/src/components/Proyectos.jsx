import React from "react";
import '../styles/landing.css';
import '../styles/proyectos.css';
import Slide from "./Slide";

export default function Proyectos() {

    const imgNft = {
        name:"nftMarket",
        img:[
        "https://res.cloudinary.com/cusi/image/upload/v1661731866/Proyectos/nftM-1_kdjwy3.jpg",
        "https://res.cloudinary.com/cusi/image/upload/v1661731878/Proyectos/nftM-3_jqya3v.jpg",
        "https://res.cloudinary.com/cusi/image/upload/v1661731888/Proyectos/nftM-6_elojat.jpg"
    ]};
    
    const imgRecipeBook = {
        name:"recBook",
        img:[
        "https://res.cloudinary.com/cusi/image/upload/v1661731899/Proyectos/rec-book-1_yztlxp.jpg",
        "https://res.cloudinary.com/cusi/image/upload/v1661731941/Proyectos/rec-book-2_kt2nne.jpg",
        "https://res.cloudinary.com/cusi/image/upload/v1661731957/Proyectos/rec-book-6_uu5m9h.jpg"
    ]};

    const imgAdminGastos = {
        name: "adminGastos",
        img: [
            "https://res.cloudinary.com/cusi/image/upload/v1663139533/Proyectos/costos-app_iywr0t.jpg",
            "https://res.cloudinary.com/cusi/image/upload/v1663139545/Proyectos/costos-app-2_jru9oc.jpg"
        ]};

    return (
        <div>
        <h3 className="titulo">PROYECTOS</h3>
        <div className="hojas">
            <div className="grid">  
                <div className="hoja">
                    <h4>NFT Market</h4>
 
                    <div className="enlaceP">
                        <Slide name={imgNft.name} img={imgNft.img}/>
                         <img src="https://res.cloudinary.com/cusi/image/upload/v1661625331/flecha-2_ocb6oi.png" alt="flecha1" className="flecha1 port" />
                         <a href="https://inspiring-seahorse-c66785.netlify.app/" target="_blank" rel="noopener noreferrer" className='botoncito cv portf'>
                             <button className="boton">
                                 Deploy
                             </button>
                         </a>
                    </div>     
                </div>
                
                <div className="columna">
                    <div className="itemProyect">
                        <img src="https://res.cloudinary.com/cusi/image/upload/v1661791968/flecha-1_kwojdy.png" alt="flecha2" className="flechaProyect one invisible" />
                        <p className="texto uno">Desarrollo Back-End</p> 
                    </div>
                    <div className="itemProyect invisible">
                        <img src="https://res.cloudinary.com/cusi/image/upload/v1661791968/flecha-1_kwojdy.png" alt="flecha2" className="flechaProyect two" />
                        <p className="texto dos">Plataforma web donde podrás crear, intercambiar y vender NFTs ficticios</p> 
                    </div>
                    <div className="itemProyect">
                        <img src="https://res.cloudinary.com/cusi/image/upload/v1661791968/flecha-1_kwojdy.png" alt="flecha2" className="flechaProyect one" />
                        <div className="skillsProyect">
                            <img src="https://res.cloudinary.com/cusi/image/upload/v1661658681/js_t5mf5z.png" alt="js" className="sProyect"/>
                            <img src="https://res.cloudinary.com/cusi/image/upload/v1661658755/node_rp76s1.png" alt="node" className="lProyect"/>
                            <img src="https://res.cloudinary.com/cusi/image/upload/v1661658714/mongoDB_zjk8u4.png" alt="mongo" className="tProyect"/>
                        </div> 
                    </div>
                </div>
            </div>

            <hr/>

            <div className="grid">  
                <div className="hoja">
                    <h4>Recipe Book</h4>
 
                    <div className="enlaceP">
                        <Slide name={imgRecipeBook.name} img={imgRecipeBook.img}/>
                         <img src="https://res.cloudinary.com/cusi/image/upload/v1661625331/flecha-2_ocb6oi.png" alt="flecha1" className="flecha1 port" />
                         <a href="https://github.com/cusi7/PI-Recipe-Book" target="_blank" rel="noopener noreferrer" className='botoncito cv portf'>
                             <button className="boton">
                                 Repo
                             </button>
                         </a>
                    </div>     
                </div>
                
                <div className="columna">
                    <div className="itemProyect">
                        <img src="https://res.cloudinary.com/cusi/image/upload/v1661791968/flecha-1_kwojdy.png" alt="flecha2" className="flechaProyect one invisible" />
                        <p className="texto uno">Desarrollo Full-Stack</p> 
                    </div>
                    <div className="itemProyect invisible">
                        <img src="https://res.cloudinary.com/cusi/image/upload/v1661791968/flecha-1_kwojdy.png" alt="flecha2" className="flechaProyect two" />
                        <p className="texto dos">App donde podrás crear, filtrar y ordenar recetas provenientes de una API y una base de datos</p> 
                    </div>
                    <div className="itemProyect">
                        <img src="https://res.cloudinary.com/cusi/image/upload/v1661791968/flecha-1_kwojdy.png" alt="flecha2" className="flechaProyect one" />
                        <div className="skillsProyect">
                            <img src="https://res.cloudinary.com/cusi/image/upload/v1661658681/js_t5mf5z.png" alt="js" className="sProyect"/>
                            <img src="https://res.cloudinary.com/cusi/image/upload/v1661658886/react_s72hgc.png" alt="react" className="sProyect"/>
                            <img src="https://res.cloudinary.com/cusi/image/upload/v1661658921/redux_usqdkn.png" alt="redux" className="sProyect"/>
                            <img src="https://res.cloudinary.com/cusi/image/upload/v1661658755/node_rp76s1.png" alt="node" className="lProyect"/>
                            <img src="https://res.cloudinary.com/cusi/image/upload/v1661696216/postgreNColor_zjuepb.png" alt="postgre" className="sProyect"/>
                        </div> 
                    </div>
                </div>
            </div>

            <hr/>

            <div className="grid">  
                <div className="hoja">
                    <h4>Admin Gastos</h4>
 
                    <div className="enlaceP">
                        <Slide name={imgAdminGastos.name} img={imgAdminGastos.img}/>
                         <img src="https://res.cloudinary.com/cusi/image/upload/v1661625331/flecha-2_ocb6oi.png" alt="flecha1" className="flecha1 port" />
                         <a href="https://gastos-admin.vercel.app/" target="_blank" rel="noopener noreferrer" className='botoncito cv portf'>
                             <button className="boton">
                                 Deploy
                             </button>
                         </a>
                    </div>     
                </div>
                
                <div className="columna">
                    <div className="itemProyect">
                        <img src="https://res.cloudinary.com/cusi/image/upload/v1661791968/flecha-1_kwojdy.png" alt="flecha2" className="flechaProyect one invisible" />
                        <p className="texto uno">Desarrollo Front-End</p> 
                    </div>
                    <div className="itemProyect invisible">
                        <img src="https://res.cloudinary.com/cusi/image/upload/v1661791968/flecha-1_kwojdy.png" alt="flecha2" className="flechaProyect two" />
                        <p className="texto dos">App donde podrás administrar tus gastos</p> 
                    </div>
                    <div className="itemProyect">
                        <img src="https://res.cloudinary.com/cusi/image/upload/v1661791968/flecha-1_kwojdy.png" alt="flecha2" className="flechaProyect one" />
                        <div className="skillsProyect">
                            <img src="https://res.cloudinary.com/cusi/image/upload/c_scale,h_140/v1663139824/angular_ebywsd.png" alt="angular" className="sProyect"/>
                            <img src="https://res.cloudinary.com/cusi/image/upload/v1661658697/materialUI_trgvbg.png" alt="mui" className="sProyect"/>
                        </div> 
                    </div>
                </div>
            </div>

            <hr/>

        </div> 
    </div> 
    )
    
};