import React from 'react';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import FastfoodIcon from '@material-ui/icons/Fastfood';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import StorefrontIcon from '@material-ui/icons/Storefront';


const StoreCard = (props) =>{


  const {name, email, logo,key,openning,clossing } = props;
  return(
  <>

      <Grid key={name} item>
        <Paper className="paper" variant="elevation" onClick={(e)=>{ }}>
          <div>
            <img className="content-image" src={logo} alt="" />
          </div>
          <div className="store-name">
          <div>
            <h4 id="store-name">{name}</h4>
          </div>
          <div>
          <h6 id="store-hrs"><StorefrontIcon fontSize="small"/>Store Hours - {openning}/{clossing}</h6>
          </div>
          </div>
          <div className="store-avatar">
          <Avatar alt="Remy Sharp" src={logo} />
          </div>
        <h6 id="store-status"> Open</h6>
          

        </Paper>
      </Grid>
   
  </> 
  );
}

export default StoreCard;