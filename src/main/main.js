import React, { useState }from 'react';
import VerifyForm from '../verify/verifyForm';
import MenuButton from './menuButton'
import History from './history'



const Main = (props) =>{
  var[orderObject,setOrderObject] = useState(true);
  
 if(orderObject){
    return(
    <>
      <div className="App">
       
      <div className="header-welcome"> Welcome , {props.user.displayName}</div>
       {/* <div><MenuButton /></div> */}
       
       <div id="margin-top"><History  /></div>
      <div id="margin-top"><History  /></div>
       

      </div>
    </>
    )
  }
  else{
    return <VerifyForm />
  }
}

export default Main