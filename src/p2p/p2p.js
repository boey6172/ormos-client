
import React from 'react';
import Form from './form';
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import instance from '../instance/instance'


const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const P2P = (props) => {
  const classes = useStyles();

if(props) {
  return ( 
    <div>
      <Form />
    </div>
   );
}
 
else{
    return(
    <div>
      <Backdrop className={classes.backdrop} open='true' >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
    );
  }
}
export default P2P;