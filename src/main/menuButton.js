import react from 'react';
import { Button,ButtonGroup} from '@material-ui/core';
import {Link, Redirect} from 'react-router-dom';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import MotorcycleIcon from '@material-ui/icons/Motorcycle';
import EventIcon from '@material-ui/icons/Event';
import { useHistory } from 'react-router-dom';



const MenuButton = () => {
  const history = useHistory()
const redirect=(e,props)=>
{
  e.preventDefault();
  history.push(props);
}
return (
<div>
  <ButtonGroup color="secondary" aria-label="outlined primary button group">
    <Button onClick={(e)=>{redirect(e,"/p2p")}}>
      <MotorcycleIcon/> 
        <small>P2P</small>
    </Button>
    <Button onClick={(e)=>{redirect(e,"/food")}}>
      <FastfoodIcon/> 
        <small>FOOD</small>
    </Button>
    <Button onClick={(e)=>{redirect(e,"/")}}>
      <EventIcon/>
        <small>Comming Soon..</small>
    </Button>
  </ButtonGroup>
</div>
)
}

export default MenuButton