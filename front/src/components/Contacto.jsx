import React from "react";
import axios from 'axios';
import env from "react-dotenv";
import '../styles/landing.css';
import '../styles/info.css';
import '../styles/contacto.css';


export default function Contacto() {

    const [data, setData] = React.useState(
        {
            nombre: '',
            email: '',
            msj: ''
        }
    );
    const [errors, setErrors] = React.useState({
        email: true,
        msj: true
    });
    const [msjError, setMsjError] = React.useState({
        email:'',
        msj:''
    });
    const [loading, setLoading] = React.useState(false);

    const validacion = (text, prop) => {
        if(prop === 'email') {
            if(text === '') {
                setErrors({
                    ...errors,
                    email: true
                });
                setMsjError({
                    ...msjError,
                    email: 'Debes ingresar un email'
                })
            }else if(text.length > 0 ) {
                if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(text)) {
                    setErrors({
                        ...errors,
                        email: true
                    });
                    setMsjError({
                        ...msjError,
                        email: 'El email no es válido'
                    })
                } else {
                    setErrors({
                        ...errors,
                        email: false
                    });
                    setMsjError({
                        ...msjError,
                        email: ''
                    })
                }
                
            }
        }else if (prop === 'msj') {
            if(text === ''){
                setErrors({
                    ...errors,
                    msj: true
                });
                setMsjError({
                    ...msjError,
                    msj: 'Psss.. te olvidas el mensaje...'
                })
            } else {
                setErrors({
                    ...errors,
                    msj: false
                });
                setMsjError({
                    ...msjError,
                    msj: ''
                })
            }
        }
         
    };

    const disabledButton= () => { 
        if(errors.email === true || errors.msj === true || loading === true) {
            return true
        } else {
            return false
        }
    }

    const change = (event, prop) => {
        event.preventDefault();
        const text = event.target.value;
        setData({
            ...data,
            [prop]: text
        });
        validacion(text, prop)
    };

    async function enviarMensaje(e) {
        e.preventDefault();
        setLoading(true);
        if (data.email.length > 0 && data.msj.length > 0) {
            try {
                console.log(data)
                const back = await axios.post(env.REACT_APP_EMAIL, data);
                alert(back.data)
            } catch (error) {
               console.log(error) 
            }
            setData({
                nombre: '',
                email: '',
                msj: ''
            })
        } 
        setLoading(false);    
    };

    return(
        <>
        <div>
            <h3 className="titulo">CONTACTO</h3>
            <div className="row">
                <img src="https://res.cloudinary.com/cusi/image/upload/v1661786046/email_red_chv5ku.png" alt="mail" id="mail" />
                <p className="email">cusijuarez07@gmail.com</p>
            </div>
            <p id="enviaM">Enviame un mensaje...</p>
            <img src="https://res.cloudinary.com/cusi/image/upload/v1661791968/flecha-1_kwojdy.png" alt="flecha2" className="flecha2" />
            <form id="enviarMensaje">
                <label for="nombre" className="label">Nombre: </label>
                <input type="text" name="nombre" className="input nombre" onChange={(event)=>change(event, 'nombre')} value={data.nombre}/>
                <label for="email" className="label">Email: </label>
                <input type="email" name="email" className="input val" onChange={(event)=>change(event, 'email')} value={data.email}/>
                <p className="error">{msjError.email}</p>
                <label for="mensaje" className="label">Mensaje: </label>
                <textarea name="mensaje" id="mensaje" cols="15" rows="5" onChange={(event)=>change(event, 'msj')} value={data.msj}></textarea>
                <p className="error">{msjError.msj}</p>
                <div className="row msg">
                    <img src="https://res.cloudinary.com/cusi/image/upload/v1661625331/flecha-2_ocb6oi.png" alt="flecha1" className='flecha1 men'/>
                    <div className='botoncito mensaje'>
                        <button className="boton enviar" disabled={disabledButton()} onClick={(e) => enviarMensaje(e)} >
                            Enviar
                        </button>
                    </div>
                    <img src="https://res.cloudinary.com/cusi/image/upload/v1661997765/sobre_hnobms.png" alt="sobre" className= { loading ? "sobre" : "noSobre"}/>
                </div>
            </form>
            <p>process:</p>
            <p>{process.env.REACT_APP_EMAIL}</p>
            <p>env:</p>
            <p>{env.REACT_APP_EMAIL}</p>
            <p>probando...</p>
            <p>process.env.OTROOO:</p>
            <p>{process.env.REACT_APP_OTROOO}</p>
            <p>env:</p>
            <p>{env.REACT_APP_OTROOO}</p>
        </div>
        <div className="row in">
            <a href="https://www.linkedin.com/in/griselda-juarez-developer/" target="_blank" rel="noopener noreferrer" className="ingh">
                <img src="https://res.cloudinary.com/cusi/image/upload/v1661787194/in_b_uelige.png" alt="linkedin" className="habilidades in" />
            </a>
            <a href="https://github.com/cusi7" target="_blank" rel="noopener noreferrer" className="ingh">
                <img src="https://res.cloudinary.com/cusi/image/upload/v1661787680/gh_b_r1ogwc.png" alt="github" className="habilidades gh" />
            </a>
        </div>
        </>
    )
}