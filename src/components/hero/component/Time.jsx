import React from 'react';
import '../../../assets/styles/componets/hero/component/Time.scss';

const Time = (props) => {
    const {img,title,text}=props;
  return (
    <div className='hero__container-time'>
        <img src={img} alt="img" />
        <h5>{title}</h5>
        <p>{text}</p>
    </div>
  );
};
export default Time;