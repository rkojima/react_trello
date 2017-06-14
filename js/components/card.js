import React from 'react';

export default function Card(props) {
    return (
        <div className='card'>
            <div className='card-text'>{props.text}</div>
        </div>
        );
}