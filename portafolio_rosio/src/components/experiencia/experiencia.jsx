import React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import './experiencia.css';

const steps = [
  {
    label: 'Radisson Hotel Curicó - Recepcionista',
    description: (
      <>
        <Typography>abril de 2024 - Present (10 meses)</Typography>
        <Typography>San francisco 35</Typography>
      </>
    ),
  },
  {
    label: 'Hotel Boutique Trinidad - Practica profesional',
    description: (
      <>
        <Typography>diciembre de 2023 - febrero de 2024 (3 meses)</Typography>
        <Typography>Viña del mar, 4 Poniente #625</Typography>
        <Typography>
          Durante la práctica realicé apoyo a la administradora del alojamiento,
          pudiendo así desempeñar tareas como planificación de horarios laborales
          y actividades afines de recursos humanos; asimismo, realicé estrategias
          de mercadotecnia para el alojamiento, apoyo en la implementación del
          software de gestión de cafetería y alimentos FUDO, aprendizajes relativos a la
          recepción del hotel, gestión de tarifas y reservas.
        </Typography>
        <Typography>
          Culminé mi práctica con un plan estratégico de marketing relacionado al
          posicionamiento y la competencia directa del alojamiento. Considerando que
          el alojamiento estaba en uno de los sectores más demandados de la Ciudad
          Jardín, investigamos junto a la administradora respecto a la competencia y
          desarrollamos estrategias distintivas y comparativas para posicionar el hotel.
        </Typography>
      </>
    ),
  },
  {
    label: 'Radisson Hotel Curicó - Practica Operativa',
    description: (
      <>
        <Typography>diciembre de 2021 - febrero de 2022 (3 meses)</Typography>
        <Typography>Curicó, Región del Maule, Chile</Typography>
        <Typography>
          Mi primera cercanía al rubro de forma práctica fue realizando la práctica
          Operativa de mis estudios en Hotel Radisson Curicó, donde realicé 4
          semanas de práctica en el área de Housekeeping, aprendiendo del aseo y
          esenciales a considerar para que los huéspedes tengan una estadía plena
          en las habitaciones de un alojamiento turístico para posteriormente realizar
          4 semanas de aprendizaje en Recepción del hotel, donde pude evidenciar
          procesos de Check In y Check Out, atención a público y la importancia de la
          correcta resolución de problemas.
        </Typography>
      </>
    ),
  },
];

function Experiencia() {
  const [activeStep, setActiveStep] = React.useState(0);

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
    <div className='experiencia'>
      <div className='contenedor_stepper'>
      <h2>Experiencia</h2>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel>{step.label}</StepLabel>
              <StepContent>
                {step.description}
                <div>
                  <div>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                      disabled={index === steps.length - 1}
                    >
                      {index === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                    <Button
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Back
                    </Button>
                  </div>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} sx={{ p: 3 }}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
              Reset
            </Button>
          </Paper>
        )}
      </div>
    </div>
  );
}

export default Experiencia;