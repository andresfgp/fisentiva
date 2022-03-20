import React from 'react';
import '../../assets/styles/components/carousel/Carousel.scss';
import Carousel from 'react-bootstrap/Carousel'

const DefaultCarousel = (props) => { //children es un componente hijo que se pasa por medio de los props, el cual se llama directamente
  const { array, Component,id,title } = props;

  return (
      <div className='carousel'>
        <h2 className='carousel__title' id={id}>{title}</h2>
        <Carousel variant="dark" className='carousel__container'>
          {array.teamwork.sort((a, b) => { return b.year - a.year; }).map((item) => (
            <Carousel.Item>
              <div>
                <Component
                  key={item.id}
                  {...item} />
              </div>
            </Carousel.Item>

          ))}
        </Carousel>
    </div>
  );
};

export default DefaultCarousel;
