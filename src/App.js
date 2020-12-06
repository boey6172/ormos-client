import React, { useEffect,useState }from 'react';
import logo from './logo.png';
import './App.css';
import firebase from 'firebase';
import fire from './config/firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import Main from './main/main';

var uiConfig = {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
  callbacks:{
    signInSuccessWithAuthResult : (authResult) =>{
      const userInfo = authResult.additionalUserInfo;
      // if(userInfo.isNewUser && userInfo.providerid === 'password'){
        
      //   try{
      //     authResult.user.sendEmailverification();
      //   }
      //   catch{

      //   }
      // }
      return false;
    }
  }
};
const App = () => {
  const [user,setuser]= useState(null);
  useEffect(() => {
    const authObserver = firebase.auth().onAuthStateChanged((user) =>{
      setuser(user) 
    })
    return authObserver;
  })

if(user)
{
  return (
    <>
      {/* <Verification {...({user,add})}/> */}
      <Main {...({user})}/>
    </>
  )
}
else{
  return(
    <>
        <div className="App">
      <header className="App-header">
        <div>
         <img alt='mainLogo' src={logo} className={`App-logo`}/>
        </div>
        <div>Sign Up / Register</div>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={ firebase.auth()}/>
      </header>
      
    </div>
      
    </>
  )
}

}

export default App;
