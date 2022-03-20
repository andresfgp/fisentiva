import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/styles/components/categories/Categories.scss';
import classNames from 'classnames';

const Categories = (props) => { //children es un componente hijo que se pasa por medio de los props, el cual se llama directamente
  const { children, title, id, isService, isTeamwork } = props;

  const inputStyles = classNames('categories', {
    isService,
    isTeamwork
  });

  return (
    <div className={inputStyles}>
      <h2 className='categories__title' id={id}>{title}</h2>
      {children}
    </div>
  );
};

Categories.propTypes = {
  title: PropTypes.string,
};
export default Categories;
