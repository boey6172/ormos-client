import React, { useState } from 'react';
import Paper from "@material-ui/core/Paper";


const StoreCard = (props) => {
  const { name, email, logo, key, openning, clossing, getDetails, specs } = props;

  return (
    <div className="product-list">
      {/* <Grid key={name} item> */}
      <Paper className="product-paper" elevation={5} onClick={() => { getDetails(props) }}>
        <div style={{ textAlign: 'center' }}>
          <img className="product-image" src={logo} alt="" />
        </div>
        <div className="product-name">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span id="product-name">{name}</span> <span id="product-price">P20.00</span>
          </div>
          <div id="product-est">
          <i >est: 15mins</i>
          </div>

        </div>
        <div >

        </div>

      </Paper>
      {/* </Grid> */}
    </div >
  );
}

export default StoreCard;