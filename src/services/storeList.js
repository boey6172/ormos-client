import React from 'react';
import Grid from "@material-ui/core/Grid";
import Card from './storeCard';

const CardList = ({store}) => {
const cardComponent = store.map((user ,i) => {
    return( <Card 
      key={i} 
      id={ store[i].id} 
      name={store[i].name} 
      email={store[i].email}
    />
    );  
  })
  return( 
    <div>
    <div className="content-container">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={1}>
            {cardComponent} 
            </Grid>
          </Grid>
        </Grid>
    </div>
    </div>
    
  );
}

export default CardList;