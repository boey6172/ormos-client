import React, { useState }from 'react';
import VerifyForm from '../verify/verifyForm';
import Home from "../home/index";




const Main = (props) =>{
  var[orderObject,setOrderObject] = useState(true);
  
 if(orderObject){
    return(
    <>
      <div className="App">
       
      <div className="header-welcome"> Welcome , {props.user.displayName}</div>
       {/* <div><MenuButton /></div> */}
       
       <div id="margin-top"><Home {...props}/></div>
     
       

      </div>
    </>
    )
  }
  else{
    return <VerifyForm />
  }
}

export default Main