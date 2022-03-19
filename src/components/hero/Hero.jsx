import React from 'react';
import '../../assets/styles/componets/hero/Hero.scss';
import clock from '../../assets/static/hero/clock.png'
import calendar from '../../assets/static/hero/calendar.png'
import appointment from '../../assets/static/hero/appointment.png'
import Time from '../hero/component/Time'

const Hero = () => {
  return (
    <div className='hero' id='hero'>
      <h1> Tu calidad de vida <br/>en las manos de los profesionales</h1>
      <h5>Somos una empresa prestadora de servicio de salud enfocada en la terapia física y nuestra principal característica es la calidad humana y ética profesional. Cuenta con profesionales calificados para el acompañamiento y progreso en salud.</h5>
      <h6>Somos una empresa prestadora de servicio de salud enfocada en la terapia física y nuestra principal característica es la calidad humana y ética profesional.</h6>
      <div className='hero-button'>
        <button 
          type="button"
          className='btn'> Más Información
        </button>
      </div>

      <div className='hero__container'>
        <div className='hero__container-time'>
          <img src={clock} alt="clock" />
          <h5>Horarios de atención</h5>
            <div className='hero__container-timeText'>
              <p>Lunes - Viernes</p>
              <p>8am - 6pm</p>
            </div>
            <div className='hero__container-timeText'>
              <p>Sábado</p>
              <p>9am - 12pm</p>
            </div>
        </div>
        <Time 
          img={calendar} 
          title='Disponibilidad' 
          text='Conoce sobre el horario de trabajo y/o citas de nuestros médicos.' />
        <Time 
          img={appointment} 
          title='Programa una cita' 
          text='Conoce sobre el horario de trabajo y/o citas de nuestros médicos.' />
      </div>
    </div>
  );
};
export default Hero;