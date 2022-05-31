import React from 'react';
import ReactDom from 'react-dom';
import { App } from './App';

console.log('Starting react app...');
const appRoot = document.getElementById('app-root');

ReactDom.render(<App />, appRoot);
