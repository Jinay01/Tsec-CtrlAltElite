import React from "react";
import styled from "styled-components"
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(0),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return ['Interview Preparation Introduction', 'Why should you ace your interview' , 'Steps to follow'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `The job interview is probably the most important step you will take in your job search journey - it’s your best chance to show the a hiring manager or recruitment company that you’re the best person for their job.`;
    case 1:
      return 'Since a job interview gives you a chance to show your qualifications and make a good impression on the hiring team, you will want to perform at your best during this important meeting. In the steps which we are going to follow below will help you ace your interview ';
    case 2:
      return `To ace your next interview and land your dream job the steps which we're going to follow are: Introduction to Interviewing > Writting an Effective Resume > Company Research > Dressing and Grooming > Mock Interview Practice > Domain Specific Interview. Post that you will be ready to ace your interview. Click on the button below to start your preparation `;
    default:
      return 'Unknown step';
  }
}

export default function VerticalStepper() {
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
    <div className={classes.root}>
    <Body>
    <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel style={{fontSize:"1.1rem"}}>{label}</StepLabel>
            <StepContent>
              <Typography style={{fontSize:"1.1rem"}}>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Body>
      
      {activeStep === steps.length && (
        <Paper square elevation={1} className={classes.resetContainer}>
            {/* <Button onClick={handleReset} className={classes.button}>
            Read Steps Again
          </Button> */}
          <Typography style={{fontSize:"1.1rem"}}>Click on the button below to start your preparation!</Typography>
        </Paper>
      )}
    </div>
  );
}

const Body = styled.div`
    background-color: rgb(235, 255, 255);
    padding:20px;
    margin-bottom:10px;
    border-radius: 8px;
`
