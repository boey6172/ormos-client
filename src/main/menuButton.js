import react, {useState}from 'react';
import { useHistory } from 'react-router-dom';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import StorefrontTwoToneIcon from "@material-ui/icons/StorefrontTwoTone";
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import MotorcycleRoundedIcon from '@material-ui/icons/Motorcycle';
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';


const MenuButton = (props) => {
  const history = useHistory()
  const [value, setValue] = useState("recents");
const redirect=(e,props)=>
{
  e.preventDefault();
  history.push(props);
}
const handleChange = (event, newValue) => {
  setValue(newValue);
  
};
return (
<div  className="footer-nav">

<AppBar position="static" style={{backgroundColor:'white',height:'auto'}}>
  
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          scrollButtons="off"
          // inkBarStyle={{background: 'blue'}}
          className="bottom-nav"

        >
          <Tab 
          icon={<HomeRoundedIcon  style={{ fontSize: 30,color:'#050505' }}/>} 
          aria-label="phone"  
       
          onClick={(e)=>{redirect(e,"/")}} />
          <Tab
            icon={<MotorcycleRoundedIcon style={{ fontSize: 30,color:'#050505' }} />}
            aria-label="favorite"
            onClick={(e)=>{redirect(e,"/p2pV2")}}
          />
          <Tab 
          icon={<SearchIcon style={{ fontSize: 36, }} />} 
          style={{backgroundColor:'orange',width:"20px",borderRadius:'10px',boxShadow:'0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)'}}
          aria-label="person"  
          onClick={(e)=>{redirect(e,"/food")}}
          />

          <Tab icon={<ShoppingCartRoundedIcon style={{ fontSize: 30,color:'#050505' }} />} 
          aria-label="help"

          />

          <Tab icon={<Avatar className="account-avatar" alt={props.user.displayName} src={props.user.photoURL} />} 
          aria-label="profile"
          onClick={(e)=>{redirect(e,"/profile")}}
          
          />
         
        </Tabs>
      </AppBar>


</div>

)
}

export default MenuButton