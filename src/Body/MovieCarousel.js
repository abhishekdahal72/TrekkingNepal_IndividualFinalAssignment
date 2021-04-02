import { Component, state } from 'react';
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@material-ui/core';
import num1 from '../media/endgame.jpg';
import num2 from '../media/doctor-strange.jpg';
import num3 from '../media/download.jpg';
import axios from 'axios';

function MovieCarousel(props) {
  var items = [
    {
      name: 'Random Name #1',
      image: num1,
      description: 'Probably the most random thing you have ever seen!',
    },
    {
      name: 'Random Name #2',
      image: num2,
      description: 'Hello World!',
    },
    {
      name: 'Random Name #3',
      image: num3,
      description: 'Hello World!',
    },
  ];

  return (
    <Carousel
      autoPlay={true}
      stopAutoPlayOnHover={false}
      interval={5000}
      indicators={false}
      swipe={true}
      navButtonsAlwaysInvisible={true}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper>
      {/* <h2>{props.item.name}</h2>

      <p>{props.item.description}</p> */}

      <div className='c-item'>
        <img src={props.item.image} alt='try' />
        <div className='c-desc'>
          <h3>{props.item.name}</h3>
          <p>{props.item.description}</p>
        </div>
      </div>
    </Paper>
  );
}

export default MovieCarousel;
