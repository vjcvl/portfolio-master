import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { LinearProgress, Grid, CssBaseline } from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
    mainContainer: {
        color : 'white'
      },
    head : {
        textAlign : 'center',
        background : 'transparent',
        color : "tomato",
        
    },
    right : {
        display : "grid",
        justifyContent : 'spaceBetween',
    
        width : '50%',
        padding : '2%'
    },
    left : {
        marginLeft : 'auto',
        width : '50%',
        padding : '2%'
    }
}))
const Skills = () => {
    const classes = useStyles();
  return (<>
    <Box className={classes.head} component="h2">
    Skills
  </Box>
  <CssBaseline/>
       <Grid className={classes.mainContainer}>
           
           <Typography className={classes.right}>
              HTML  <LinearProgress color="primary" variant='determinate' value={87}/>
           </Typography>
           <Typography className={classes.right}>
              Css  <LinearProgress color="primary" variant='determinate' value={82}/>
           </Typography>
           <Typography className={classes.right}>
              Javascript  <LinearProgress color="primary" variant='determinate' value={78}/>
           </Typography>
           <Typography className={classes.left}>
                <LinearProgress color="primary" variant='determinate' value={75}/> React Js
           </Typography>
           <Typography className={classes.left}>
              <LinearProgress color="primary" variant='determinate' value={68}/> Node Js
           </Typography>
           <Typography className={classes.left}>
              <LinearProgress color="primary" variant='determinate' value={70}/> Mongo DB
           </Typography>
       </Grid>
       </>
  )
}

export default Skills