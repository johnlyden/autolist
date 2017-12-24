import React from 'react';
import Logo from '../img/autolist_logo.jpg';

export default (props) => {
  var myClass;
    if (props.small) {
      myClass="small"
    }
    return (
      <div className="row">
        <div className={`logo-container col-sm-8 col-sm-offset-2 ${myClass}`}>
          <img src={Logo} />
        </div>
      </div>
    )
}