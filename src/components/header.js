import React from 'react';
import Logo from './autolist_logo';
import FilterControl from './filter_control';

/**
 * functional component
 */
export default (props) => {
  let logoClass, filterClass;

  const componentClasses = ['row header-container']; 
  
  // if there is an activeCar hide the whole component   
  if (props.activeCar) {componentClasses.push('hide')}
  if (!props.showingCars) {
    logoClass="small"
    filterClass="index"
  }
  return (
    <div className={componentClasses.join(' ')}>
      <div className={`logo-container ${logoClass}`}>
        <Logo />
      </div>
      <div className={`filter-container ${filterClass}`}>
        <FilterControl />
      </div>
    </div>
  )
}