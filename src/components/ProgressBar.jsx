import React, { useState } from 'react';
import { 
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Box
} from '@mui/material';

const MuiProgressSteps = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    'Select campaign settings',
    'Create an ad group',
    'Create an ad',
    'Review your ad'
  ];

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 600, margin: 'auto', p: 3 }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box sx={{ mt: 2 }}>
        {activeStep === steps.length ? (
          <Box sx={{ textAlign: 'center' }}>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed!
            </Typography>
            <Button onClick={handleReset} sx={{ mt: 1 }}>
              Reset
            </Button>
          </Box>
        ) : (
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default MuiProgressSteps;