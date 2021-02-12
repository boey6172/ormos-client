import React from 'react';
import Grid from "@material-ui/core/Grid";
import Card from './productCard';
import {Link, Redirect} from 'react-router-dom';

const ProductList = (props) => {
  const cardComponent = props.product.map((product ,i) => {
    return(
      // <Link          
      // to={{
      // pathname: "/product/",
      // state: { store: store }
      //  }} >
        <Card
          key={i} 
          name={product.productName} 
          logo={product.pic} 
          // openning={store.storeHourOpen}
          // clossing={store.storeHourClose}

          // email={store[i].email}
        />
    //  </Link>
    
    );  
  })

  return ( 
    <>
      {cardComponent}
    </>
   );
}
 
export default ProductList;