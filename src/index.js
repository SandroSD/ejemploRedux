import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import personaReducer from './store/reducers/persona';
import backgroundReducer from './store/reducers/background';

import { Provider } from 'react-redux';

const rootReducer = combineReducers({
    per: personaReducer,
    bck: backgroundReducer
});


const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();