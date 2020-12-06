import React, { useEffect,useState }from 'react';
import firebase from 'firebase';
import NavBar from './navBar';

const signOut = () =>{
  firebase.auth().signOut().then(function() {
    console.log('Successfully Signed out')
  }).catch(function(){
    console.log('error Signed out')
  })
}

const Main = (props) =>{

  return(
    <>
    <div className="App">
    <NavBar />
      <div className="App-header">
        
        {props.user.displayName}
        <button onClick={signOut}>Sign Out</button>
      </div>  
    </div>
    </>
  )
}

export default Main