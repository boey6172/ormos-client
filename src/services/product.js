import React,{useState,useEffect}from 'react';
import db,{storage } from '../config/firebase'
import instance from '../instance/instance'
import { makeStyles,useTheme } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Banner from './banner';
import ProductList from './productList';
import ProductDetails from './productDetails';
import Modal from '@material-ui/core/Modal';
import SwipeableViews from 'react-swipeable-views';

import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


const tutorialSteps = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
  },
  {
    label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
    imgPath:
      'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];









function rand() {
  return Math.round(Math.random() * 20) - 10;
}
const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  paper: {
    position: 'absolute',
    width: '90%',
    backgroundColor: theme.palette.background.paper,
    // border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1),
  },
  img: {
    height: 255,
    display: 'block',
    maxWidth: 400,
    overflow: 'hidden',
    width: '100%',
  },
}));



const Product = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  var [products,setProducts ] =  useState(null)
  const [open, setOpen] = React.useState(false);


// --------------------------------------------------
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };


// ---------------------------------------------------




  
  const store = useState(props.location.state.store);
  // console.log(store[0]);
  useEffect(()=> {
    db.child('products')
      .on('value',snapshot=>{
        getProduct(store);
    })
  },[])

  const getProduct=()=>{
    // console.log(store[0])
    instance.get("products.json").then((response)=>{
      const getData=[];
      for (let key in response.data){
          getData.push({...response.data[key],id:key})
        }
      setProducts(
        {products:getData}
      )
    })

    // console.log(filteredStore)
  }
  const getDetails =()=>{
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  };
  const body = (
    <div className="details-container">
      <div className="details-swipeable">
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className="details-image" src={step.imgPath} alt={step.label} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>

      {/* <img className="details-image" src="https://scontent.fmnl4-1.fna.fbcdn.net/v/t1.0-9/36747190_2030496796974100_3372976111200763904_n.jpg?_nc_cat=103&ccb=3&_nc_sid=09cbfe&_nc_eui2=AeFPrp-MsU2v_IqYfrnvq5SV8IXiPb2GEjPwheI9vYYSMzgjJdnmhVVMPc-tQIQz1VRtijzBJN2u-INPjBVplgFh&_nc_ohc=prCQlI1108wAX8i8b7N&_nc_ht=scontent.fmnl4-1.fna&oh=b4e67cf0ede7a321e512bcc586981d88&oe=604D02C7" alt="" /> */}
      </div>
      <div className="details-name">
      <h4 id="details-name">Bonn Bayag</h4>
      <h4 id="details-name">Bonn Bayag</h4>
      <h4 id="details-name">Bonn Bayag</h4>
      <h4 id="details-name">Bonn Bayag</h4>
      <h4 id="details-name">Bonn Bayag</h4>
      <h4 id="details-name">Bonn Bayag</h4>
      <h4 id="details-name">Bonn Bayag</h4>
      <h4 id="details-name">Bonn Bayag</h4>
      <h4 id="details-name">Bonn Bayag</h4>
      <h4 id="details-name">Bonn Bayag</h4>
      <h4 id="details-name">Bonn Bayag</h4>
      <h4 id="details-name">Bonn Bayag</h4>
      <h4 id="details-name">Bonn Bayag</h4>

      <h4 id="details-name">Bonn Bayag</h4>
      <h4 id="details-name">Bonn Bayag</h4>
      <h4 id="details-name">Bonn Bayag</h4>
      <h4 id="details-name">Bonn Bayag</h4>
      <h4 id="details-name">Bonn Bayag</h4>
      <h4 id="details-name">Bonn Bayag</h4>
      <h4 id="details-name">Bonn Bayag</h4>
      <h4 id="details-name">Bonn Bayag</h4>
      <h4 id="details-name">Bonn Bayag</h4>
      <h4 id="details-name">Bonn Bayag</h4>
      <h4 id="details-name">Bonn Bayag</h4>
      <h4 id="details-name">Bonn Bayag</h4>
      <h4 id="details-name">Bonn Bayag</h4>
      
      </div>
      
    </div>
  );
  const getFiltered=()=>{
    const filteredStore = products.products.filter(products => {
      // console.log(products.store.toLowerCase().includes(store[0].storeName.toLowerCase()))
      return products.store.toLowerCase().includes(store[0].storeName.toLowerCase());
    })
    return filteredStore
  }

  if(store[0] && products)
  {
    const filtered=getFiltered()
    
    return (  
     <div className="product-container">
       <div  className="product-banner"> 
         <Banner store={store}/>
       </div>
       <div> 
         <ProductList 
         product={filtered}
         getDetails={getDetails}
         /> 
        <Modal
          className="modal-none"
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          >
          {body}
        </Modal> 
       </div>
     
      </div>
    );  
  }
  else{
    return (
      <div>
        <Backdrop className={classes.backdrop} open='true' >
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
      )
  }
}
 
export default Product;