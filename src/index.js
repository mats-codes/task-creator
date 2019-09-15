import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const tasks = [
    {
        assignee: 'Coding Kid',
        title: 'Save my Cat',
        description: 'BlaBlaBla',
    },
    {
        assignee: 'Clean Code Women',
        title: 'Fix my dirty code',
        description: 'BlaBlaBla',
    },
    {
        assignee: 'Bug Hunter',
        title: 'Kill that nifty bug',
        description: 'BlaBlaBla',
    },
    {
        assignee: 'Bug Hunter',
        title: 'Kill that other nifty bug as well!',
        description: 'BlaBlaBla',
    },
];

ReactDOM.render(<App tasks={tasks}/>, document.getElementById('root'));

