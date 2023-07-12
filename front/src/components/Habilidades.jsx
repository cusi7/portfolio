import React from "react";
import '../styles/landing.css';
import '../styles/habilidades.css';

export default function Habilidades() {
    
    return(
        <div>
        <h3 className="titulo">HABILIDADES</h3>
        <div id="iconos">
            <div className="icon">
                <img src="https://res.cloudinary.com/cusi/image/upload/v1661658681/js_t5mf5z.png" alt="js" className="habilidades sq"/>
                <p className="name">JavaScript</p>
            </div>
            <div className="icon">
                <img src="https://res.cloudinary.com/cusi/image/upload/v1661658645/html_nue2oe.png" alt="html" className="habilidades sq"/>
                <p className="name">HTML</p>
            </div>
            <div className="icon">
                <img src="https://res.cloudinary.com/cusi/image/upload/v1661658596/css_n4v4zt.png" alt="css" className="habilidades sq"/>
                <p className="name">CSS</p>
            </div>
            <div className="icon">
                <img src="https://res.cloudinary.com/cusi/image/upload/v1661658886/react_s72hgc.png" alt="react" className="habilidades sq"/>
                <p className="name">React</p>
            </div>
            <div className="icon">
                <img src="https://res.cloudinary.com/cusi/image/upload/v1661658921/redux_usqdkn.png" alt="redux" className="habilidades sq"/>
                <p className="name">Redux</p>
            </div>
            <div className="icon">
                <img src="https://res.cloudinary.com/cusi/image/upload/c_scale,h_140/v1663139824/angular_ebywsd.png" alt="angular" className="habilidades sq"/>
                <p className="name">Angular</p>
            </div>
            <div className="icon">
                <img src="https://res.cloudinary.com/cusi/image/upload/v1661658697/materialUI_trgvbg.png" alt="mui" className="habilidades sq"/>
                <p className="name">Material UI</p>
            </div>
            <div className="icon">
                <img src="https://res.cloudinary.com/cusi/image/upload/v1661658755/node_rp76s1.png" alt="node" className="habilidades large"/>
                <p className="name">Node.js</p>
            </div>
            <div className="icon">
                <img src="https://res.cloudinary.com/cusi/image/upload/v1661658613/express_ru9mhe.png" alt="express" className="habilidades large"/>
                <p className="name">Express</p>
            </div>
            <div className="icon">
                <img src="https://res.cloudinary.com/cusi/image/upload/v1661696216/postgreNColor_zjuepb.png" alt="postgre" className="habilidades sq"/>
                <p className="name">PostgreSQL</p>
            </div>
            <div className="icon">
                <img src="https://res.cloudinary.com/cusi/image/upload/v1661658935/sequelize_rvkdyg.png" alt="sequelize" className="habilidades sq"/>
                <p className="name">Sequelize</p>
            </div>
            <div className="icon">
                <img src="https://res.cloudinary.com/cusi/image/upload/v1661658714/mongoDB_zjk8u4.png" alt="mongo" className="habilidades tall"/>
                <p className="name">MongoDB</p>
            </div>
            <div className="icon">
                <img src="https://res.cloudinary.com/cusi/image/upload/v1661658732/mongoose_unhsg1.png" alt="mongoose" className="habilidades large"/>
                <p className="name">Mongoose</p>
            </div>
            <div className="icon">
                <img src="https://res.cloudinary.com/cusi/image/upload/v1661658879/postman_n1skvc.png" alt="postman" className="habilidades sq"/>
                <p className="name">Postman</p>
            </div>
            <div className="icon">
                <img src="https://res.cloudinary.com/cusi/image/upload/v1661658630/git_vlenz8.png" alt="git" className="habilidades sq"/>
                <p className="name">Git</p>
            </div>
        </div>
        </div>
    )

};