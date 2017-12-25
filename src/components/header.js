import React from 'react';
import Logo from './autolist_logo';
import FilterControl from './filter_control';

export default (props) => {
  var myClass, yoClass;
    if (props.small) {
      myClass="small"
      yoClass="index"
    }
    return (
      <div className={`row header-container`}>
        <div className={`logo-container ${myClass}`}>
          <Logo />
        </div>
        <div className={`filter-container ${yoClass}`}>
          <FilterControl />
        </div>
      </div>
    )
}