import React from "react";
import '../styles/landing.css';
import '../styles/habilidades.css';

export default function Habilidades() {
    
    return(
        <div>
        <h3 className="titulo">HABILIDADES</h3>
        <div id="iconos">
            <div className="icon">
                <img src="https://res.cloudinary.com/cusi/image/upload/v1661658689/js_b_c5phtj.png" alt="html" className="habilidades js"/>
                <p className="name Js">JavaScript</p>
            </div>
            <div className="icon">
                <img src="https://res.cloudinary.com/cusi/image/upload/v1661658674/html_b_shh9yn.png" alt="html" className="habilidades Html"/>
                <p className="name Html">HTML</p>
            </div>
            <div className="icon">
                <img src="https://res.cloudinary.com/cusi/image/upload/v1661658606/css_b_xrr2bc.png" alt="css" className="habilidades Css"/>
                <p className="name Css">CSS</p>
            </div>
            <div className="icon">
                <img src="https://res.cloudinary.com/cusi/image/upload/v1661658914/react_b_vwn1bz.png" alt="react" className="habilidades react"/>
                <p className="name react">React</p>
            </div>
            <div className="icon">
                <img src="https://res.cloudinary.com/cusi/image/upload/v1661658927/redux_b_h81mip.png" alt="redux" className="habilidades redux"/>
                <p className="name redux">Redux</p>
            </div>
            <div className="icon">
                <img src="https://res.cloudinary.com/cusi/image/upload/v1661658708/materialUI_b_o3tkjg.png" alt="mui" className="habilidades mui"/>
                <p className="name mui">Material UI</p>
            </div>
            <div className="icon">
                <img src="https://res.cloudinary.com/cusi/image/upload/v1661658762/node_b_ryvglc.png" alt="node" className="habilidadesLarge node"/>
                <p className="name node">Node.js</p>
            </div>
            <div className="icon">
                <img src="https://res.cloudinary.com/cusi/image/upload/v1661658619/express_b_auhlyw.png" alt="express" className="habilidadesLarge exp"/>
                <p className="name exp">Express</p>
            </div>
            <div className="icon">
                <img src="https://res.cloudinary.com/cusi/image/upload/v1661696207/postgreN_fc9bi6.png" alt="postgre" className="habilidades post"/>
                <p className="name post">PostgreSQL</p>
            </div>
            <div className="icon">
                <img src="https://res.cloudinary.com/cusi/image/upload/v1661658941/sequelize_b_iyj3br.png" alt="sequelize" className="habilidades seq"/>
                <p className="name seq">Sequelize</p>
            </div>
            <div className="icon">
                <img src="https://res.cloudinary.com/cusi/image/upload/v1661658720/mongoDB_b_nsmqfp.png" alt="mongo" className="habilidadesTall mongodb"/>
                <p className="name mongodb">MongoDB</p>
            </div>
            <div className="icon">
                <img src="https://res.cloudinary.com/cusi/image/upload/v1661658740/mongoose_b_ucrhtf.png" alt="mongoose" className="habilidadesLarge mongoo"/>
                <p className="name mongoo">Mongoose</p>
            </div>
            <div className="icon">
                <img src="https://res.cloudinary.com/cusi/image/upload/v1661658894/postman_b_q7d0ay.png" alt="postman" className="habilidades postman"/>
                <p className="name postman">Postman</p>
            </div>
            <div className="icon">
                <img src="https://res.cloudinary.com/cusi/image/upload/v1661658644/git_b_q8m1cq.png" alt="git" className="habilidades git"/>
                <p className="name git">Git</p>
            </div>
        </div>
        </div>
    )

};