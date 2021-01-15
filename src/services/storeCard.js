import React from 'react';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const StoreCard = (props) =>{


  const {name, email, logo,key } = props;
  return(
  <>
    <Grid key={name} item>
      <Paper className="paper" variant="elevation" onClick={()=>{ alert(`${name}`);}}>
        <div>
          <img className="content-image" src={logo} alt="" />
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