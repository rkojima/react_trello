import React from 'react';
import Card from './card';

export default function CardList() {
    const cards = [];
    for (let i=0; i<3; i++) {
        cards.push(<Card />);
    }
    return (
        <div className='card-list'>
            {cards}
        </div>
        )
}