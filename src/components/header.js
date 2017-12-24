import React from 'react';
import Logo from '../img/autolist_logo.jpg';

export default (props) => {
  var myClass;
    if (props.small) {
      myClass="small"
    }
    return (
      <div className={`logo-container ${myClass}`}>
        <img src={Logo} />
      </div>
    )
}