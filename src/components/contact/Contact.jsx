import React, {useContext}  from 'react';
import '../../assets/styles/componets/contact/Contact.scss';
import {UseContext} from '../../hooks/useContext'
import { ReactComponent as Warning } from '../../assets/static/warning.svg';

const Contact = (props) => {

  const {formContact,setFormContact} = useContext(UseContext);

  const handleInput = (e) => { //recopilar informacion de formulario
      setFormContact({
      ...formContact,
      [e.target.name]: e.target.value,
    });
  };
  // eslint-disable-next-line react/destructuring-assignment

  const handleSubmit = (e) => { // enviar informacion formulario
    e.preventDefault();
    try {
      setFormContact();
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <div className='contact' id='contact'>
            <div className="row">
                <div className="col contact__title">
                  <h2>CONTÁCTENOS</h2>
                  <h5>Comunícate con nosotros y nos pondremos en contacto contigo tan pronto como nos sea posible.</h5>
                </div>
            </div>
            <form onSubmit={handleSubmit} className="contact__form">
                <div className="row contact__form-input">
                  <div className="col-md-6">
                    <label className='is-required'>Nombres</label>
                    <input
                        onChange={handleInput}
                        name="firstname"
                        type="text"
                        className = "form-control"
                        required />
                  </div>
                  <div className="col-md-6">
                    <label className='is-required'>Apellidos</label>
                    <input
                        onChange={handleInput}
                        name="lastname"
                        type="text"
                        className = "form-control"
                        required />
                  </div>
                </div>

                <div className="row contact__form-input">
                  <div className="col-md-6">
                    <label className='is-required'>Numero de teléfono</label>
                    <input
                        onChange={handleInput}
                        name="phone"
                        type="tel"
                        pattern="[0-9]{7}"
                        className = "form-control"
                        required />
                  </div>
                  <div className="col-md-6">
                    <label className='is-required'>Correo electronico</label>
                    <input
                        onChange={handleInput}
                        name="email"
                        type="email"
                        className = "form-control"
                        required />
                  </div>
                </div>

                <div className="row contact__form-input">
                  <div className="col-md-6">
                    <label className='is-required'>Asunto</label>
                    <input
                        onChange={handleInput}
                        name="title"
                        type="text"
                        className = "form-control"
                        required />
                  </div>
                </div>

                <div className="row contact__form-input">
                  <div className="col">
                    <label className='is-required'>Mensaje</label>
                    <textarea
                        onChange={handleInput}
                        name="message"
                        rows="4"
                        type="text"
                        className = "form-control"
                        required />
                  </div>
                </div>

                <div className='contact__form-button'>
                    <button 
                      type="submit"
                      className='btn'> Enviar</button>
                </div>
            </form>
            <div className="contact__footer">
                <div>
                  <Warning className='warning__icon'/>
                </div>
                <div>
                  <h6>Para peticiones, quejas, reclamos o sugerencias, escriba en el asunto: <strong>PQRS.</strong> Esta será tramitada en la mayor brevedad.</h6>
                </div>
            </div>
    </div>
  );
};
export default Contact;