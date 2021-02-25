import React from 'react';
import Avatar from '@material-ui/core/Avatar';

const Banner = (props) => {
  // console.log(props.store)
  
  return ( 
    
    <div>
    
     <img className="banner" src={props.store[0].logo} alt="" />
     <h4 className="banner-text">{props.store[0].storeName}</h4>
     <h4 className="banner-text-location">Location</h4>
     <h4 className="banner-store-hrs">{props.store[0].storeHourOpen}-{props.store[0].storeHourClose} open/close</h4>
     <Avatar className="banner-logo" alt="Remy Sharp"  src={props.store[0].logo} style={{ height: '45px', width: '45px', }}/>

    </div>
   );
}
 
export default Banner;