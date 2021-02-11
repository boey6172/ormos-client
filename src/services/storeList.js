import React from 'react';
import Grid from "@material-ui/core/Grid";
import Card from './storeCard';

const CardList = ({store}) => {
  
const cardComponent = store.map((store ,i) => {
  
    return( 
    <Card
      key={i} 
      name={store.storeName} 
      logo={store.logo} 
      openning={store.storeHourOpen}
      clossing={store.storeHourClose}

      // email={store[i].email}
    />
    );  
  })
  return( 

    <div className="content-container">
     
        <Grid item xs={12}>
          <Grid container justify="center" spacing={1}>
            {cardComponent} 
            </Grid>
          </Grid>
     
    </div>

    
  );
}

export default CardList;