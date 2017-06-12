import React from 'react';

export default function Card() {
    const text = 'This is a card';
    return (
        <div className='card'>
            <div className='card-text'>{text}</div>
        </div>
        );
}