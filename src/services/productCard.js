import React from 'react';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import FastfoodIcon from '@material-ui/icons/Fastfood';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';



const StoreCard = (props) =>{


  const {name, email, logo,key,openning,clossing,getDetails } = props;
  return(
  <div className="product-list">
    {/* <Grid key={name} item> */}
      <Paper className="product-paper" elevation={5} onClick={()=>{getDetails()}}>
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