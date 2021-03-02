import React, { useEffect, useState } from 'react';
import { TextField } from '@material-ui/core';
import StoreList from './storeList';
import { robots } from './robots';
import instance from '../instance/instance';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';


import { InputAdornment } from '@material-ui/core';

import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';
import AppBar from '@material-ui/core/AppBar';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  root: {
    // flexGrow: 1,
  },

  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '90%',
    // [theme.breakpoints.up('sm')]: {
    //     marginLeft: theme.spacing(1),
    //     width: 'auto',
    // },

  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    // padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    // transition: theme.transitions.create('width'),
    width: '100%',
    // [theme.breakpoints.up('sm')]: {
    //     width: '12ch',
    //     '&:focus': {
    //         width: '20ch',
    //     },
    // },
  },




}));

const Stores = () => {

  const history = useHistory();
  // const classes = useStyles();
  const redirect = (e, props) => {
    e.preventDefault();
    history.push(props);
  }

  const classes = useStyles();
  const initialFieldValues = {
    store: '',
    robotss: robots
  }

  var [values, setValues] = useState(initialFieldValues)
  var [stores, setStores] = useState(null)


  useEffect(() => {
    instance.get("stores.json").then((response) => {

      const getData = [];
      for (let key in response.data) {
        getData.push({ ...response.data[key], id: key })
      }
      setStores({
        stores: getData
      })
    })
  }, [])

  const handelInputChange = e => {
    var { name, value } = e.target
    setValues({
      ...values,
      [name]: value
    })

  }




  // console.log(filteredStore);
  if (stores) {

    const filteredStore = stores.stores.filter(store => {
      return store.storeName.toLowerCase().includes(values.store.toLocaleLowerCase());
    })
    return (
      <div className={classes.root}>
        <AppBar position="fixed" style={{marginTop:'60px'}}>
          <Toolbar>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>

              <InputBase
                placeholder="Find Stores…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                type="text"
                id="store"
                name="store"
                placeholder="Find store "
                variant="standard"
                value={values.store}
                onChange={handelInputChange}
                inputProps={{ 'aria-label': 'search' }}
              />

            </div>
            <span><CloseIcon style={{ marginLeft: '20px' }} /></span>
          </Toolbar>
        </AppBar>
        <div style={{marginTop:'70px'}}>
          <StoreList store = {filteredStore}/>
        </div>






        {/* <div className="p2p">
            <TextField
            className="searchfield"
              type = "text"
              id = "store"
              name = "store"
              placeholder = "Find store "
              variant="standard"
              value={values.store}
              onChange = {handelInputChange} 
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon style={{color:'gray'}} />
                  </InputAdornment>
                ),
              }}
            />
    
        </div>
        <div>
          <StoreList store = {filteredStore}/>
        </div> */}
      </div>
    )
  }
  else {
    return (
      <div>
        <Backdrop className={classes.backdrop} open='true' >
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    )
  }
}

export default Stores