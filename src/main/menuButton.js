import react, {useState}from 'react';
import { Button,ButtonGroup} from '@material-ui/core';
import {Link, Redirect} from 'react-router-dom';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import EventIcon from '@material-ui/icons/Event';
import { useHistory } from 'react-router-dom';
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import PersonOutlineTwoToneIcon from "@material-ui/icons/PersonOutlineTwoTone";
import HomeTwoToneIcon from "@material-ui/icons/HomeTwoTone";
import StorefrontTwoToneIcon from "@material-ui/icons/StorefrontTwoTone";
import ShoppingCartTwoToneIcon from "@material-ui/icons/ShoppingCartTwoTone";
import Avatar from '@material-ui/core/Avatar';
import MotorcycleIcon from '@material-ui/icons/Motorcycle';
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';



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

<AppBar position="static" style={{backgroundColor:'#efdb5e',height:'auto'}}>
  
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          scrollButtons="off"
          // inkBarStyle={{background: 'blue'}}
          className="bottom-nav"

        >
          <Tab 
          icon={<HomeTwoToneIcon  style={{ fontSize: 35 }}/>} 
          aria-label="phone"  
       
          onClick={(e)=>{redirect(e,"/")}} />
          <Tab
            icon={<MotorcycleIcon style={{ fontSize: 35 }} />}
            aria-label="favorite"
            onClick={(e)=>{redirect(e,"/p2pV2")}}
          />
          <Tab 
          icon={<StorefrontTwoToneIcon style={{ fontSize: 35 }} />} 
          aria-label="person"  
          onClick={(e)=>{redirect(e,"/food")}}
          />

          <Tab icon={<ShoppingCartTwoToneIcon style={{ fontSize: 35 }} />} 
          aria-label="help"

          />
          
          <Tab icon={<PersonOutlineIcon style={{ fontSize: 35 }} />} 
          aria-label="help"
          
          />
         
        </Tabs>
      </AppBar>


</div>

)
}

export default MenuButton