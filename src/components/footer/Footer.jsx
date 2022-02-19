import React from 'react';
import '../../assets/styles/componets/footer/Footer.scss';
import logoFooter from '../../assets/static/logoFooter.png';



const Footer = () => {
    return (
    <footer className="page-footer font-small blue pt-4 footer">
        <div className="container-fluid text-center text-md-left">
            <div className="row">
                <div className="col-md-4 mt-md-0 mt-3 footer__section1">
                    <img className='footer__logo' src={logoFooter} alt="" />
                    <h5 className='footer__text'>Somos una empresa prestadora  <br/> de servicio de salud enfocada  <br/> en la terapia física</h5>
                </div>

                <hr className="clearfix w-100 d-md-none pb-0"/>

                <div className="col-md-4 mb-md-0 mb-3 footer__section2">
                    <ul className="list-unstyled">
                        <li><a href="#hero">Home</a></li>
                        <li><a href="#services">Servicio</a></li>
                        <li><a href="#teamWork">Equipo de trabajo</a></li>
                        <li><a href="#contact">Contactanos</a></li>
                    </ul>
                </div>

                <div className="col-md-4 mb-md-0 mb-3 footer__section3">
                    <div>
                        <div className='footer__icon'>
                            <a href='https://www.instagram.com/fisentiva/' target='_blank' rel='noreferrer'><i className='bx bxl-instagram'></i></a>
                            <a href='https://m.facebook.com/fisentiva.fisioterapia.medellin/' target='_blank' rel='noreferrer'> <i className='bx bxl-facebook-square'></i></a>    
                        </div>
                        <h2><strong>@FISENTIVA</strong></h2>
                    </div>
                    <h5>¡Siguenos en nuestras redes!</h5>
                    <div>
                        <a target='_blank' rel='noreferrer' href='https://api.whatsapp.com/send?phone=+573053493546&text=%C2%A1Hola,%20estoy%20interesado%20en%20conocer%20sobre%20sus%20servicios%20fisioterap%C3%A9uticos%20y%20disponibilidad%20de%20citas!' className="footer__button">
                            <i className='bx bxl-whatsapp'></i>
                            <h5><strong>Programe una cita</strong></h5> 
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer

