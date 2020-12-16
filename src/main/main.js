import React, { useState }from 'react';
import VerifyForm from '../verify/verifyForm';
import MenuButton from './menuButton'
import History from './history'



const Main = (props) =>{
  var[orderObject,setOrderObject] = useState(true);
  
//  useEffect(()=>{
 
//   var object=null
//     firebase.database().ref('users/').orderByChild('userid').equalTo(props.user.uid)
//                        .on('value',(snapshot)=>{
//                 snapshot.forEach((childSnapshot) => {
//        object = childSnapshot.val()
//      //  console.log(childSnapshot.val())
//      });
//      object= snapshot.val();
//    })
//    console.log(object)
//    if (object === null) {
//      setOrderObject(
//        true
//      )
   
//    }
//  },[])


 if(orderObject){
    return(
    <>
      <div className="App">
       
      <div> Welcome , {props.user.displayName}</div>
       <div><MenuButton /></div>
       <div><History /></div>

      </div>
    </>
    )
  }
  else{
    return <VerifyForm />
  }
}

export default Main