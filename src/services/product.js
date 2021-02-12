import React,{useState,useEffect}from 'react';
import db,{storage } from '../config/firebase'
import instance from '../instance/instance'
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Banner from './banner';
import ProductList from './productList';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const Product = (props) => {
  const classes = useStyles();
  var [products,setProducts ] =  useState(null)
  
  const store = useState(props.location.state.store);
  // console.log(store[0]);
  useEffect(()=> {
    db.child('products')
      .on('value',snapshot=>{
        getProduct(store);
    })
  },[])

  const getProduct=()=>{
    // console.log(store[0])
    instance.get("products.json").then((response)=>{
      const getData=[];
      for (let key in response.data){
          getData.push({...response.data[key],id:key})
        }
      setProducts(
        {products:getData}
      )
    })

    // console.log(filteredStore)
  }
  const getFiltered=()=>{
    const filteredStore = products.products.filter(products => {
      // console.log(products.store.toLowerCase().includes(store[0].storeName.toLowerCase()))
      return products.store.toLowerCase().includes(store[0].storeName.toLowerCase());
    })
    return filteredStore
  }

  if(store[0] && products)
  {
    const filtered=getFiltered()
    
    return (  
      <>
      <Banner store={store}/>
      <ProductList product={filtered}/>
      </>
    );  
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
 
export default Product;