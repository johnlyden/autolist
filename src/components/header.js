import React from 'react';
import Logo from './autolist_logo';
import FilterControl from './filter_control';

export default (props) => {
  var myClass, yoClass;
    if (props.small) {
      myClass="small"
      yoClass="index"
    }
    const componentClasses = ['row header-container'];    
    if (props.activeCar) {componentClasses.push('hide')}
    return (
      <div className={componentClasses.join(' ')}>
        <div className={`logo-container ${myClass}`}>
          <Logo />
        </div>
        <div className={`filter-container ${yoClass}`}>
          <FilterControl />
        </div>
      </div>
    )
}