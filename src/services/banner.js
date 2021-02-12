import React from 'react';

const Banner = (props) => {
  // console.log(props.store)
  return ( 
    
    <div>
     <img className="content-image" src={props.store[0].logo} alt="" />
    </div>
   );
}
 
export default Banner;