import React, {useState} from 'react';
import Paper from "@material-ui/core/Paper";


const StoreCard = (props) =>{
  const {name, email, logo,key,openning,clossing,getDetails,specs } = props;

  return(
  <div className="product-list">
    {/* <Grid key={name} item> */}
      <Paper className="product-paper" elevation={5} onClick={()=>{getDetails(props)}}>
        <div>
          <img className="product-image" src={logo} alt="" />
        </div>
        <div className="product-name">
          <div>
            <h4 id="product-name">{name}</h4>
          </div>
          <div >

          </div>
        </div>
      </Paper>
    {/* </Grid> */}
   </div>
  );
}

export default StoreCard;