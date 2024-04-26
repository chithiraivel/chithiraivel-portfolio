import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import vel from '../Assets/images/chithiraivel.jpeg'
import html from '../Assets/images/html.webp'
import css from '../Assets/images/CSS.png'
import javacript from '../Assets/images/JavaScript.png'
import react from '../Assets/images/react.png'
import java from '../Assets/images/Java.png'
const Skills = () => {
  return (
    <div>
        <Card >
    
    {/* <img src={vel} style={{height:'200px',width:'300px',objectFit:'contain',box}}/> */}
    <Grid container spacing={2} style={{padding:'80px'}} sx={{justifyContent:'center',gap:2}}>
        <Grid item lg={2}>
        <CardMedia className='zoom'
        sx={{ boxShadow: 5,borderRadius:4,objectFit:'contain' }}
        component="img"
       width={80}
       height={150}
        image={html}
      />
        </Grid>
        <Grid item lg={2}>
        <CardMedia className='zoom'
        sx={{ boxShadow: 5,borderRadius:4,objectFit:'contain' }}
        component="img"
       width={80}
       height={150}
        image={css}
      />
        </Grid>
        <Grid item lg={2}>
        <CardMedia className='zoom'
        sx={{ boxShadow: 5,borderRadius:4,objectFit:'contain' }}
        component="img"
       width={80}
       height={150}
        image={javacript}
      />
        </Grid>
        <Grid item lg={2}>
        <CardMedia className='zoom'
        sx={{ boxShadow: 5,borderRadius:4,objectFit:'cover' }}
        component="img"
       width={80}
       height={150}
        image={react}
      />
        </Grid>
        <Grid item lg={2}>
        <CardMedia className='zoom'
        sx={{ boxShadow: 5,borderRadius:4,objectFit:'contain' }}
        component="img"
       width={80}
       height={150}
        image={java}
      />
        </Grid>
        
        </Grid>
        
      
      
        </Card>
    </div>
  )
}

export default Skills