import React from 'react';
import Logo from './autolist_logo';
import FilterControl from './filter_control';

export default (props) => {
  var logoClass, filterClass;
    if (props.small) {
      logoClass="small"
      filterClass="index"
    }
    const componentClasses = ['row header-container'];    
    if (props.activeCar) {componentClasses.push('hide')}
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