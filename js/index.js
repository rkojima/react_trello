require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';

import Boards from './components/board';
const data = {
    title: "This is a board",
    lists: [
        {title: "List title 1",
         cards: ["Card 1", "Card 2", "Card 3"],
        },
        {title: "List title 2",
         cards: ["Card 4", "Card 5", "Card 6"],
        }
    ]
};
document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(<Boards 
        title={data.title} 
        lists={data.lists}
        />, document.getElementById('app'))
    );