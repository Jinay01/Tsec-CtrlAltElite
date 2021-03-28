import React,{useState,useEffect} from "react";

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 200,
  },
});

function Slide({parameter}){
    const classes = useStyles();
    return(
    <div className={classes.root}>
        <Slider
        defaultValue={0}
        getAriaValueText={parameter}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        marks
        min={0}
        max={5}
        />
    </div>
    )}

export default Slide;