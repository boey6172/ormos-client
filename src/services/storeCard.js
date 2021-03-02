import React from 'react';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import FastfoodIcon from '@material-ui/icons/Fastfood';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import StorefrontIcon from '@material-ui/icons/Storefront';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import Typography from '@material-ui/core/Typography';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';

import { makeStyles } from '@material-ui/core/styles';
import { GridList } from '@material-ui/core';


import InfoIcon from '@material-ui/icons/Info';


// import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles({
  root: {
    maxWidth: 120,

  },
});

const StoreCard = (props) => {
  const classes = useStyles();


  const { name, email, logo, key, openning, clossing } = props;
  return (
    <div className="store-container">
      <Paper className="paper" elevation={3} onClick={() => { }}>
      <div><img className="store-image" src={logo} alt="" /></div>
      <div className="store-name">{name}<span style={{float:'right',marginRight:'2px'}}><InfoIcon style={{marginBottom:'3px'}} color="inherit" fontSize="small"/></span></div>
      </Paper>



      {/* <Grid key={name} item> */}
      {/* <Paper className="paper" elevation={3} onClick={() => { }}>
       
        <div className="store-card">
          <div> <img className="store-image" src={logo} alt="" /></div>
          <div id="store-desc" style={{marginTop:'5px'}}><Typography variant="h5">{name}</Typography></div>
         <div id="store-desc" style={{marginTop:'30px'}}><Typography>address</Typography></div>  */}
      {/* <div  id="store-desc" style={{marginTop:'40px'}}>Distance</div>
         <div  id="store-desc" style={{marginTop:'60px'}}>Availability</div>
         <div  id="store-desc" style={{marginTop:'80px'}}>Availability</div> */}
    </div>
    /*  <div className="store-name"  >
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
    </div> */

    /* <h6 id="store-status"> Open</h6> */
    // </Paper>
    // {/* </Grid> */}

  );
}

export default StoreCard;