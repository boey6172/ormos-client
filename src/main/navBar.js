
import React from 'react';
import { AppBar, Toolbar, IconButton, Typography ,Fab ,Button,Menu ,MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { SwipeableDrawer } from '@material-ui/core';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';



const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});


const AppBarMenu = (props) =>{
  const classes = useStyles();
  
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
  
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Home', 'Test', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            {text}
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
       
      </List>
    </div>
  );

  return(
  <>
    <AppBar position="static">
    <Toolbar>
      <IconButton edge="start"  color="inherit" aria-label="menu" aria-haspopup="true" onClick={toggleDrawer('left', true)}>
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" >
        ORMOS
      </Typography>
    </Toolbar>
    </AppBar>


      {/* ///THIS IS WHERE THEY APPEAR */}



      <div>
   
      {['left'].map((anchor) => (
        <React.Fragment key={'left'}>
          {/* <Button onClick={toggleDrawer('left', true)}>{'left'}</Button> */}
          <SwipeableDrawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
            {list('left')}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>  
  </>

  
  )
} 



export default AppBarMenu