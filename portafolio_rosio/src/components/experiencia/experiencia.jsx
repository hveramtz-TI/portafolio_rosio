import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const steps = [
  {
    label: 'Experiencia 1',
    description: 'Descripción de la experiencia 1.',
  },
  {
    label: 'Experiencia 2',
    description: 'Descripción de la experiencia 2.',
  },
  {
    label: 'Experiencia 3',
    description: 'Descripción de la experiencia 3.',
  },
];

export default function Experencia() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div>
      <Card sx={{ maxWidth: 400, margin: 'auto', marginTop: 2 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {steps[activeStep].label}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {steps[activeStep].description}
          </Typography>
        </CardContent>
      </Card>
      <MobileStepper
        variant="progress"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        sx={{ maxWidth: 400, flexGrow: 1, margin: 'auto', marginTop: 2 }}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </div>
  );
}