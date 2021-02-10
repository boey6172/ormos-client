import React, { useEffect,useState }from 'react';
import logo from './logo.png';
import './App.css';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Main from './main/main';
import VerifyForm from './verify/verifyForm';
import PtoP from './services/ptop'
import Food from './services/food'
import NavBar from './main/navBar';
import P2p from './p2p/p2p';
import MenuButton from './main/menuButton'

var uiConfig = {
  signInFlow: 'popup',
  signInOptions: [
    {
      provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      // scopes: [
      //   'https://www.googleapis.com/auth/contacts.readonly'
      // ],
      customParameters: {
        // Forces account selection even when one account
        // is available.
        prompt: 'select_account'
      }
    },
    firebase.auth.EmailAuthProvider.PROVIDER_ID,

  ],
  tosUrl: '<your-tos-url>',
  privacyPolicyUrl: '<your-privacy-policy-url>',
  callbacks:{
    signInSuccessWithAuthResult : (authResult) =>{
      // const userInfo = authResult.additionalUserInfo; 
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

if(user){
    return (
      <>
      <Router>
        <NavBar {...({user})}/>
        <MenuButton {...({user})}/>
          <Route exact path="/" render = {props => (
            <React.Fragment>
            <Main {...({user})}/>
            </React.Fragment>
          )} />
            
        <Route path="/verify" component={VerifyForm}/>
        <Route path="/p2p" component={PtoP}/>
        <Route path="/food" component={Food}/>
        <Route path="/p2pV2" component={P2p}/>
      </Router>
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
