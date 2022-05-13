import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

    const Estudios = ()=>(   
        
        <div id='Estudios'>
          <div className='EspEst'></div>
        <h2>Estudios</h2>
        <Timeline position='alternate' className='barra'>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Bachillerato Tecnológico (IES Mar De Cadiz)</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Nivel B1 de ingles (Examen de Cambridge)</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Desarrollo de Aplicaciones Web (IES Rafael Alberti)</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>Curso básico primeros auxilios</TimelineContent>
      </TimelineItem>
    </Timeline>
      </div>  
      )

export default  Estudios
