import React from 'react';
import '../../assets/styles/components/services/Service.scss';

const Services = (props) => {
  const { img,title,text } = props;

  return (
    <div className='service'>
        <img src={img} alt="img" />
        <h5>{title}</h5>
        <p>{text}</p>
    </div>
  );
};
export default Services;