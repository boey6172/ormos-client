import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Stores from '../storeList/stores';

import { useTheme } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";

import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

import StorefrontRoundedIcon from '@material-ui/icons/StorefrontRounded';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: "Mang INASAL",
    imgPath:
      "https://th.bing.com/th/id/OIP.aM3SXhA931j6oZxJHsWlXwHaEK?pid=ImgDet&rs=1"
  },
  {
    label: "Jollibee",
    imgPath:
      "https://business.inquirer.net/wp-content/blogs.dir/5/files/2014/08/Jollibee-logo.jpg"
  },
  {
    label: "Chowking",
    imgPath:
      "https://th.bing.com/th/id/OIP.qv_gxWWkjq-i05jI3VDlcAHaHa?pid=ImgDet&rs=1"
  },
  {
    label: "McDonalds",
    imgPath:
      "https://th.bing.com/th/id/R9950dc5fca324fedc802f62eaaa44468?rik=hFAUYTIdnhfOvw&riu=http%3a%2f%2fbeloved-brands.com%2fwp-content%2fuploads%2f2014%2f04%2fMcdonalds-logo.jpg&ehk=o7sbYqBxWQvelCXB801uPmD46WrucrNw15MIM7mboyE%3d&risl=&pid=ImgRaw"
  },
  {
    label: "Goč, Serbia",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60"
  }
];


const images = [
  {
    url: 'https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,pg_1,q_60,w_965/fnltdcfgfriq10dspggu.jpg',
    title: 'FASTFOODS',
    width: '40%',
  },
  {
    url: 'https://sustainableconnections.org/wp-content/uploads/Eat-Local-Logo-stacked-color.png',
    title: 'LOCAL STORES',
    width: '40%',
  },

];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
    justifyContent: 'center',
    marginTop: '5px',
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

export default function ButtonBases() {
  const classes = useStyles();
  const theme = useTheme();
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


  return (
    <div>
      {/* ----------------------------slider---------------------------------------- */}
      <div className="slider-container">
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {tutorialSteps.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <img
                  className="slider-image"
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        {/* <Paper square elevation={0}>
        <Typography id="slider-name">
          {tutorialSteps[activeStep].label}
        </Typography>
      </Paper> */}
      </div>
      {/* ----------------------------------------category----------------------------- */}
      <div className="category-container">
        <div id="cat-container">
          <img
            id="cat-icons"
            src="https://www.flaticon.com/svg/vstatic/svg/2922/2922037.svg?token=exp=1614220634~hmac=28f1224cdf9b83c75a05141972cd584d"
          /><div id="cat-name">Snacks</div>

        </div>
        <div id="cat-container" >
          <img
            id="cat-icons"
            src="https://www.flaticon.com/svg/vstatic/svg/3082/3082015.svg?token=exp=1614221607~hmac=15c9b2b5336786cde0bb89cb8f2f212f"
          />
          <div id="cat-name">Drinks</div>
        </div>
        <div id="cat-container">
          <img
            id="cat-icons"
            src="https://www.flaticon.com/svg/vstatic/svg/3480/3480559.svg?token=exp=1614221777~hmac=ca6415ad2d12bf4bb3de54740054878e"
          />
          <div id="cat-name">Pasta</div>
        </div>
        <div id="cat-container">
          <img
            id="cat-icons"
            src="https://www.flaticon.com/svg/vstatic/svg/2674/2674065.svg?token=exp=1614221894~hmac=605625d9b6ceff02ec8c2025cb66a651"
          />
          <div id="cat-name">Pizza</div>
        </div>
        <div id="cat-container">
          <img
            id="cat-icons"
            src="https://www.flaticon.com/svg/vstatic/svg/817/817418.svg?token=exp=1614221951~hmac=4d87e65e2f0d690773313b3398fe498a"
          />
          <div id="cat-name">Pastry</div>
        </div>
        <div id="cat-container">
          <img
            id="cat-icons"
            src="https://www.flaticon.com/svg/vstatic/svg/965/965866.svg?token=exp=1614221979~hmac=60bfb793d0d1d737d2a571944f299651"
          />
          <div id="cat-name">Others</div>
        </div>
      </div>
      {/* ---------------------------fandlocal--------------------------------------- */}
      <div className={classes.root}>
        {images.map((image) => (
          <ButtonBase
            focusRipple
            key={image.title}
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            style={{
              width: image.width
            }}
          >
            <span
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`
              }}
            />
            <span className={classes.imageBackdrop} />
            <span className={classes.imageButton}>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <span className={classes.imageMarked} />
              </Typography>
            </span>
          </ButtonBase>
        ))}
      </div>
      <div style={{}}>
        <div style={{ display: 'flex', alignItems: 'center' }}> <StorefrontRoundedIcon style={{ marginLeft: '3%' }} fontSize="small" color="primary" /> <h6 id="home-text-container">Browse Stores </h6> </div>
        <Stores />
      </div>
    </div>































  );
}
