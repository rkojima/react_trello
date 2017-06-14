import React from 'react';
import CardList from './list';

export default function Board(props) {
    const lists= props.lists.map(list => {
        return <CardList title={list.title} cards={list.cards} />
    });
    return (
        <div className='board'>
            <h1>{props.title}</h1>
            {lists}
        </div>
        )
}