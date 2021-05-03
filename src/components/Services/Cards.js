import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h2>Services</h2>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <CardItem
              src='hero1.jpg'
              text='Post articles'
              path='/products'
            />
            <CardItem
              src='ser1.jpg'
              text='Manage your TODO List'
              path='/services'
            />
            <CardItem
              src='ser3.jpg'
              text='Read free books'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;