require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';

import Boards from './components/board';

document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(<Boards />, document.getElementById('app'))
    );