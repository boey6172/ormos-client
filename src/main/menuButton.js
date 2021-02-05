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
<div>
  <div className="footer-container">
        <BottomNavigation
          value={value}
          onChange={handleChange}
          className="footer-nav"
        >
          <BottomNavigationAction
            label="Home"
            value="recents"
            icon={<HomeTwoToneIcon />}
            onClick={(e)=>{redirect(e,"/")}}
          />
          <BottomNavigationAction
            label="P2P"
            value="P2P"
            icon={<MotorcycleIcon />}
            onClick={(e)=>{redirect(e,"/p2pV2")}}
          />
          <BottomNavigationAction
            label="Stores"
            value="favorites"
            icon={<StorefrontTwoToneIcon />}
            onClick={(e)=>{redirect(e,"/food")}}
          />
          <BottomNavigationAction
            label="Cart"
            value="nearby"
            icon={<ShoppingCartTwoToneIcon />}
          />
          {/* <BottomNavigationAction
            label={props.user.displayName.split(' ').slice(0, -1).join(' ')}
            value="Account"
            icon={<Avatar alt={props.user.displayName} src={props.user.photoURL} />}
          /> */}
        </BottomNavigation>
  </div>
</div>

)
}

export default MenuButton