import React , {useEffect, useState}from 'react';
import { TextField } from '@material-ui/core';
import StoreList from './storeList';
import {robots} from './robots';
import instance from '../instance/instance'
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Button} from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import SearchIcon from '@material-ui/icons/Search';
import { InputAdornment } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const Stores = () =>{

  const history = useHistory();
  // const classes = useStyles();
  const redirect=(e,props)=>
  {
    e.preventDefault();
    history.push(props);
  }

  const classes = useStyles();
  const initialFieldValues = {
    store:'',
    robotss: robots
  } 
  
  var [values,setValues ] = useState(initialFieldValues)
  var [stores,setStores] = useState(null)
 

  useEffect(()=> {
    instance.get("stores.json").then((response)=>{

      const getData=[];
      for (let key in response.data){
          getData.push({...response.data[key], id: key})
        }
      setStores({
        stores:getData
      })
    })
  },[])

  const handelInputChange = e =>{
    var { name,value }= e.target
    setValues({
       ...values,
       [name]: value
    })
   
  }




  // console.log(filteredStore);
  if(stores){
    
    const filteredStore = stores.stores.filter(store => {
      return store.storeName.toLowerCase().includes(values.store.toLocaleLowerCase());
    })
    return( 
     <div className="store-list">
        <div className="p2p">
           
    
        </div>
      <div>
          <StoreList store = {filteredStore}/>
      </div>
    </div>
    )
  }
  else{
    return (
      <div>
        <Backdrop className={classes.backdrop} open='true' >
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
      )
  }
}

export default Stores