import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Without curly brace: No matter what you name the module you import. Always refers to the default import.
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const carList = [
    {
        make: 'Porche',
        model: '911',
        year: 2018,
        color: 'black',
        price: 100000
    },
    {
        make: 'Benz',
        model: 'G63',
        year: 2018,
        color: 'black',
        price: 100000
    }
]

ReactDOM.render(
    // Pass carList as a parameter named cars to child component(App).
    <App cars={carList} />,
    document.querySelector('main')
);
registerServiceWorker();
