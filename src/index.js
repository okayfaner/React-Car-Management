import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Without curly brace: No matter what you name the module you import. Always refers to the default import.
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Car from './components/Car'

const carList = [
    new Car('Porche', '911', 2018, 'black', 100000),
    new Car('Benz', 'G63', 2018, 'black', 100000)
]

ReactDOM.render(
    // Pass carList as a parameter named cars to child component(App).
    <App cars={carList} />,
    document.querySelector('main')
);
registerServiceWorker();
