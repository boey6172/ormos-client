import React , {useEffect, useState}from 'react';
import { TextField } from '@material-ui/core';
import StoreList from './storeList';
import {robots} from './robots';



const Stores = () =>{


  const initialFieldValues = {
    store:'',
    robotss: robots
  } 

  var [values,setValues ] = useState(initialFieldValues)

  // useEffect(()=>{
  //   setValues({ robotss: robots})
  // },[])

  const handelInputChange = e =>{
    var { name,value }= e.target
    setValues({
       ...values,
       [name]: value
    })
   
  }
  // const {robotss,store }= initialFieldValues;
   const filteredStore = values.robotss.filter(robots => {
    return robots.name.toLowerCase().includes(values.store);
  })

  // console.log(filteredStore);

  return(
    <div>
      <div className="p2p">Search Stores</div>
      <div className="row my-2">
        <div className="col d-flex justify-content-center">
          <TextField
            type = "text"
            id = "store"
            name = "store"
            // label = "Store"
            placeholder = "Search Store Name "
            value={values.store}
            onChange = {handelInputChange} 
            margin="normal"
            // fullWidth
          />
        </div>
      </div>
         <StoreList store = {filteredStore}/>
    </div>
  )
}

export default Stores