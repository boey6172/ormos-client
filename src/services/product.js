import React,{useState,useEffect}from 'react';
import db,{storage } from '../config/firebase'
import instance from '../instance/instance'
import { makeStyles,useTheme } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Banner from './banner';
import ProductList from './productList';
import Button from '@material-ui/core/Button';


import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Input from '@material-ui/core/Input';

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import TextareaAutosize from '@material-ui/core/TextareaAutosize';

// import { autoPlay } from 'react-swipeable-views-utils';

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);



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
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});



const Product = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const initialvalues={
      logo:'',
      specs:[ ],
      name:'',
    }
  
  const [value, setValue] = useState(null);
  var [products,setProducts ] =  useState(null)
  const [open, setOpen] = useState(false);
  // var [product,setProduct ] =  useState(null)
  var [body,setBody ] =  useState(initialvalues)
  var [qty,setQty] = useState(0);




// --------------------------------------------------
  const [activeStep, setActiveStep] = React.useState(0);
  // const maxSteps = tutorialSteps.length;

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
const handleChange = (event) => {
  setValue(event.target.value);
};



  
  const store = useState(props.location.state.store);
  useEffect(()=> {
    db.child('products')
      .on('value',snapshot=>{
        getProduct(store);
    })
  },[])

  const getProduct=()=>{
    instance.get("products.json").then((response)=>{
      const getData=[];
      for (let key in response.data){
          getData.push({...response.data[key],id:key})
        }
      setProducts(
        {products:getData}
      )
    })
  }

  const getDetails =(props)=>{
    setBody(props);
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  };
  const addQty = () => {
    var holder =qty + 1

    console.log(holder)

    setQty( 
holder
      );
  };
  const subQty = () => {
    var holder =qty - 1
    console.log(holder)
    setQty(
holder
   );
  };

  const getFiltered=()=>{
    const filteredStore = products.products.filter(products => {
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
        <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
          <AppBar  className={classes.appBar} style={{borderRadius:'5px',height:'40px',backgroundColor:'#ffeb3b'}}>
          <Toolbar>
           
            <Typography variant="h6" style={{marginTop:'-15px'}} className={classes.title}>
            {body.name}
            </Typography>
            <IconButton edge="start" color="inherit" style={{marginTop:'-15px'}} onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <div className="details-container" >
          <div className="details-swipeable">
            {/* use on future updates */}
            {/* <AutoPlaySwipeableViews
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
            </AutoPlaySwipeableViews> */}
            <img className="details-image" src={body.logo} alt={body.logo} />
          </div>
          <div className="details-name">
            {body.name}
          </div> 
          <div className="specs">
           <div>
             <h6><i>Food Descripction</i></h6>
             <TextareaAutosize style={{width:'100%'}} readOnly rowsMin={3} aria-label="empty textarea" placeholder="Food Desc" />
          
             <div className="details-variation">
             Variation
             </div> 
           </div>
          {/* <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
            { body.specs.map((spec ,i) => (
              <div>
                <FormControlLabel value={spec.price} control={<Radio />} label={spec.size + ' '+ spec.price} />
              </div>  
            ))}
          </RadioGroup>  */}

      <ButtonGroup size="small" value={value} aria-label="small outlined button group" onChange={handleChange} className="details-variation-button">
      { body.specs.map((spec ,i) => ( 
        <Button>{spec.size}</Button>
       ))}
      </ButtonGroup>

          <Input disabled value={qty}></Input>
          <Button color='secondary' onClick={subQty}>-</Button>
          <Button color='secondary' onClick={addQty}>+</Button>
          
         
          <Button
        variant="contained"
        style={{ margin: theme.spacing(1),}}
        color="secondary"
        className="addtocart"
        endIcon={<AddShoppingCartIcon>addtocart</AddShoppingCartIcon>}
      >
        Add to Cart
      </Button>
      
        </div>
        </div>
      </Dialog>
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