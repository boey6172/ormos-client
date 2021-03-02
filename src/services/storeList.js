import React from 'react';
import Grid from "@material-ui/core/Grid";
import Card from './storeCard';
import {Link, Redirect} from 'react-router-dom';

const CardList = ({store}) => {
  
const cardComponent = store.map((store ,i) => {
  
    return(
      <Link          
      to={{
      pathname: "/product/",
      state: { store: store }
       }} >
        <Card
          key={i} 
          name={store.storeName} 
          logo={store.logo} 
          openning={store.storeHourOpen}
          clossing={store.storeHourClose}

          // email={store[i].email}
        />
     </Link>
    
    );  
  })
  return( 

    <div className="content-container">
        <Grid item xs={12}>
          <Grid container justify="center">
            {cardComponent} 
            </Grid>
          </Grid>
    </div>

    
  );
}

export default CardList;