import React from 'react';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import FastfoodIcon from '@material-ui/icons/Fastfood';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import StorefrontIcon from '@material-ui/icons/Storefront';
import LocationOnIcon from '@material-ui/icons/LocationOn';


const StoreCard = (props) =>{


  const {name, email, logo,key,openning,clossing } = props;
  return(
  <>
    {/* <Grid key={name} item> */}
      <Paper className="paper" elevation={3} onClick={()=>{}}>
        <div>
          <img className="store-image" src={logo} alt="" />
        </div>
        <div className="store-name"  >
        <div style={{
                 display: 'flex',
                 alignItems: 'center',
                 flexWrap: 'wrap',}}>
          <div><h4 id="store-name">{name}</h4></div>
          <div><i style={{fontSize:'9px'}}> (foods variation)</i></div>
        </div>
        <div>
         <h6 id="store-hrs"><LocationOnIcon fontSize="small" color="primary" />distance</h6>
         <h6 id="store-hrs"><StorefrontIcon fontSize="small"/>Store Hours - {openning}/{clossing}</h6>
        </div>
        <div className="store-avatar">
        <Avatar alt="Remy Sharp" src={logo} style={{ height: '60px', width: '60px', border:'1px solid', borderColor:'#4141419d'}}/>
        </div>
        </div>
     
       {/* <h6 id="store-status"> Open</h6> */}
      </Paper>
    {/* </Grid> */}
  </> 
  );
}

export default StoreCard;