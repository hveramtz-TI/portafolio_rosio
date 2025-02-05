import React from 'react';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from '@mui/lab';
import { colors, Paper, Typography } from '@mui/material';
import './experiencia.css';

const experiences = [
  {
    date: 'abril de 2024 - Present (10 meses)',
    title: 'Radisson Hotel Curicó - Recepcionista',
    location: 'San francisco 35',
    description: '',
  },
  {
    date: 'diciembre de 2023 - febrero de 2024 (3 meses)',
    title: 'Hotel Boutique Trinidad - Practica profesional',
    location: 'Viña del mar, 4 Poniente #625',
    description: `
      Durante la práctica realicé apoyo a la administradora del alojamiento,
      pudiendo así desempeñar tareas como planificación de horarios laborales
      y actividades afines de recursos humanos; asimismo, realicé estrategias
      de mercadotecnia para el alojamiento, apoyo en la implementación del
      software de gestión de cafetería y alimentos FUDO, aprendizajes relativos a la
      recepción del hotel, gestión de tarifas y reservas.
      Culminé mi práctica con un plan estratégico de marketing relacionado al
      posicionamiento y la competencia directa del alojamiento. Considerando que
      el alojamiento estaba en uno de los sectores más demandados de la Ciudad
      Jardín, investigamos junto a la administradora respecto a la competencia y
      desarrollamos estrategias distintivas y comparativas para posicionar el hotel.
    `,
  },
  {
    date: 'diciembre de 2021 - febrero de 2022 (3 meses)',
    title: 'Radisson Hotel Curicó - Practica Operativa',
    location: 'Curicó, Región del Maule, Chile',
    description: `
      Mi primera cercanía al rubro de forma práctica fue realizando la práctica
      Operativa de mis estudios en Hotel Radisson Curicó, donde realicé 4
      semanas de práctica en el área de Housekeeping, aprendiendo del aseo y
      esenciales a considerar para que los huéspedes tengan una estadía plena
      en las habitaciones de un alojamiento turístico para posteriormente realizar
      4 semanas de aprendizaje en Recepción del hotel, donde pude evidenciar
      procesos de Check In y Check Out, atención a público y la importancia de la
      correcta resolución de problemas.
    `,
  },
];

function Experiencia() {
  return (
    <div className='experiencia'>
      <h2 className='titulo_experiencia'>Experiencia</h2>
      <Timeline position="alternate-reverse" sx={{height: '100%', width: '80%', alignItems: 'center', justifyContent: 'center'}}>
        {experiences.map((exp, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary" sx={{color:'white'}} >
                {exp.date}
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              {index < experiences.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="h6" component="h1" sx={{marginBottom: '10px'}} >
                  {exp.title}
                </Typography>
                <Typography sx={{marginBottom:'10px'}}>{exp.location}</Typography>
                <Typography sx={{fontSize:{xs: '0px',sm:'15px', md: '14px', lg:'15px', xl:'18px'}}}>{exp.description}</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}

export default Experiencia;