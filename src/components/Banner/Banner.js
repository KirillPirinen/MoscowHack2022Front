import React from 'react'
import CardMedia from '@mui/material/CardMedia';

const defaultUrl = 'https://spark-interfax.ru/showcase/preview/61788989e6d77e1ce0531b9aa8c027ab.png'

export const Banner = ({ url = defaultUrl }) => (<CardMedia
  component="img"
  height="190"
  image={url}
  alt="Paella dish"
  sx={{ borderRadius: '14px', margin: '45px 0' }}
/>
)
