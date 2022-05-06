import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import NRA from './img/NRA.PNG'
import CRUD_V from './img/CRUD_V.jpeg'
import './App.css';
    const Proyecto = ()=>(   
        <div id='Proyectos' className='Proyectos'>
        <h2>Proyectos realizados</h2>
        <div className='tarjetas'>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={NRA}
        alt="Nuestro Rincon del Anime"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          NRA
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Aquí podrás leer y disfrutar de una gran variedad de contenidos
        relacionado con el anime, desde noticias regulares hasta fan arts y obras de pequeños artistas
        </Typography>
      </CardContent>
      <CardActions>
        <Button href='https://eliogomez.github.io/DWEC-PROY1-Gomez_Ortega_Elio/index.html' size="small">Ver mas</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={CRUD_V}
        alt="CRUD videojuegos pendientes"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          NRA
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Ten control sobre los videojuegos que has jugado y los que tienes pendientes
        </Typography>
      </CardContent>
      <CardActions>
        <Button href='https://github.com/ElioGomez/CRUD_Simple' size="small">Ver mas</Button>
      </CardActions>
    </Card>
    </div>
      </div>  
      )

export default  Proyecto