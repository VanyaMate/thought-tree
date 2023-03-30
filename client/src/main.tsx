import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/index.scss';
import './styles/fonts.scss';
import {Provider} from "react-redux";
import {store} from "./store/index.store";
import {BrowserRouter, Router} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
)
