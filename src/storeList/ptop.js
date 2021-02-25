import React from 'react';
import { Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Map from './map';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));


const Ptop = () =>{
  const history = useHistory();
  const classes = useStyles();
  const redirect=(e,props)=>
  {
    e.preventDefault();
    history.push(props);
  }
  return(
    <>
        <Button onClick={(e)=>{redirect(e,"/")}}>
          <ArrowBackIcon/> 
            <small>BACK</small>
        </Button>
      <div className="p2p">
         Point to point Services
      </div>
      <div >
  
        <Map />
     
      </div>
    </>
  )
}

export default Ptop