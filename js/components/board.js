import React from 'react';
import CardList from './list';

export default function Board() {
    const lists = [];
    for (let i = 0; i < 3; i ++) {
        lists.push(<CardList />);
    }
    return (
        <div className='board'>
            <p>This is the board</p>
            {lists}
        </div>
        )
}