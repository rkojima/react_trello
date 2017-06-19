import React from 'react';
import CardList from './list';
import ListContainer from './list-container';

export default function Board(props) {
    const lists= props.lists.map(list => {
        return <ListContainer title={list.title} cards={list.cards} />
    });
    return (
        <div className='board'>
            <h1>{props.title}</h1>
            {lists}
        </div>
        )
}