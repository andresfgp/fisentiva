import React from 'react';
import '../../assets/styles/components/teamwork/Teamwork.scss';

const Teamwork = (props) => {
  const { img,name,career } = props;

  return (
    <div className='teamwork'>
      <div className='teamwork__container'>
        <img src={img} alt="img" className='teamwork__photo' />
        <h4>{name}</h4>
        <h5>{career}</h5>
      </div>
    </div>
  );
};
export default Teamwork;