import React from 'react';
import Stores from './stores'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Button} from '@material-ui/core';
import { useHistory } from 'react-router-dom';


const Food = () =>{
  const history = useHistory();
  // const classes = useStyles();
  const redirect=(e,props)=>
  {
    e.preventDefault();
    history.push(props);
  }
  return(
    <div>
        <Button onClick={(e)=>{redirect(e,"/")}}>
          <ArrowBackIcon/> 
            <small>BACK</small>
        </Button>
      <Stores />
    </div>
  )
}

export default Food