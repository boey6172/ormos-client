import React from 'react';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const StoreCard = (props) =>{


  const {name, email, id } = props;
  return(
  <>
    <Grid key={id} item>
      <Paper className="paper" variant="elevation">
        <div>
          <img className="content-image" src={`https://robohash.org/${id}?200x200`} alt="" />
        </div>
        <div>
          {name}
        </div>
      </Paper>
    </Grid>
  </> 
  );
}

export default StoreCard;