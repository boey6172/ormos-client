import React,{useEffect,useState} from 'react';
import firebase from 'firebase';
import { makeStyles,useTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
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

const Profile = (props) => {
    const [user,setuser]= useState(null);
    const classes = useStyles();
  const [open, setOpen] = useState(false);





    const handleOpen =()=>{
        setOpen(true);
      }
    
      const handleClose = () => {
        setOpen(false);
      };

    if(props){ 
      return (
            <>
            <div className="profile-contianer">
                <div className="title">
                    User profile
                </div>
                <div>
                    Name: {props.displayName}
                </div>    
                <div>
                    Email: {props.email}
                </div> 
                <div>
                    Phone: {props.phoneNumber}
                </div>
                <button onClick={handleOpen}>update</button>
            </div> 
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar  className={classes.appBar} style={{borderRadius:'10px',height:'40px',backgroundColor:'#efdb5e'}}>
                    <Toolbar>
                        <Typography variant="h6" style={{marginTop:'-15px'}} className={classes.title}>
                        Update Profile
                        </Typography>
                        <IconButton edge="start" color="inherit" style={{marginTop:'-15px'}} onClick={handleClose} aria-label="close">
                        <CloseIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            <div className="details-container" >
                <div className="details-swipeable">

                    {/* <img className="details-image" src={body.logo} alt={body.logo} /> */}
                </div>
                <div className="details-name">
                    {/* {body.name} */}
                </div> 
                <div className="specs">
                    <div>
                        <div className="details-variation">
                            <div>
                                <TextField 
                                    required
                                    name="productName" 
                                    label="Name" 
                                    // onChange={props.handelInputChange}
                                    // value={props.values.productName } 
                                />
                            </div>
                            <div>
                                <TextField 
                                    required
                                    name="productName" 
                                    label="Phone Number" 
                                    // onChange={props.handelInputChange}
                                    // value={props.values.productName } 
                                />
                            </div>
                            <div>
                                <Button 
                                    variant="contained" 
                                    color="primary" 
                                    component="span"
                                    >
                                    Upload Picture
                                </Button>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </Dialog>
            </>
        );
    }
}
 
export default Profile;