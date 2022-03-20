import React from 'react';
import '../../assets/styles/components/teamwork/Teamwork.scss';
import logo from '../../assets/static/teamwork/logo.png'

const Teamwork = (props) => {
  const { img,name,career } = props;

  return (
    <div className='teamwork'>
      <div className='teamwork__container'>
        <div className='teamwork__image'>
          <img src={img} alt="img" className='teamwork__photo' />
          <img src={logo} alt="logo"  className='teamwork__logo'/>
        </div>
        <h4>{name}</h4>
        <h5>{career}</h5>
      </div>
    </div>
  );
};
export default Teamwork;