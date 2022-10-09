import App from './App';
import { Provider } from 'react-redux';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { fetchHorses } from './asyncAction/horses';
import store from './store';

const container = document.getElementById('root');
const root = createRoot(container);
store.dispatch(fetchHorses());
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
