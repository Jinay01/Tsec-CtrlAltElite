import React from "react";
import styled from "styled-components";
import Prep1 from "../components/Prep1";
import Prep2 from "../components/Prep2";
import {Container} from "react-bootstrap";
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Prep3 from "../components/Prep3";
import Prep4 from "../components/Prep4";
import Prep5 from "../components/Prep5";
import Prep6 from "../components/Prep6";
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }));
  
  function getSteps() {
    return ['Introduction to Interviewing', 'Writting an Effective Resume', 'Company Research','Dressing and Grooming','Mock Interview Practice', 'Domain Specific Interview'];
  }
  
  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <Prep1/>;
      case 1:
        return <Prep2 />;
      case 2:
        return <Prep3/>;
      case 3:
          return <Prep4/>;
      case 4:
        return <Prep5/>;
      case 5:
        return <Prep6/>;
      default:
        return 'Unknown stepIndex';
    }
  }

const StepperInterview = ({category, setCategory}) => {
    const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root} style={{padding: '120px 80px'}}>
      <Stepper  activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        <Container>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Link to="/"><Typography>GO TO HOMESCREEN</Typography></Link>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep,{category, setCategory})}</Typography>
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
        </Container>
      </div>
    </div>
  );
}
 
export default StepperInterview;