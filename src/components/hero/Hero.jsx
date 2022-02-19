import React from 'react';
import '../../assets/styles/componets/hero/Hero.scss';
import hero from '../../assets/static/hero.png'

const Hero = () => {
  return (
    <div className='hero' id='hero'>
      <img class="crop" src={hero} alt="hero" />
      <h1> Tu calidad de vida <br/>en las manos de los profesionales</h1>
      <h5>Somos una empresa prestadora de servicio de salud enfocada en la terapia física y nuestra principal característica es la calidad humana y ética profesional. Cuenta con profesionales calificados para el acompañamiento y progreso en salud.</h5>
      <div className='hero-button'>
        <button 
          type="button"
          className='btn'> Más Información
        </button>
      </div>

    </div>
  );
};
export default Hero;