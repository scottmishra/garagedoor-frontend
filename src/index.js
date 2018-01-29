import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { HashRouter } from 'react-router-dom';

const AppWrapper = () => {
    return (
        <HashRouter>
            <App />
        </HashRouter>
    )
}

ReactDOM.render(
    <MuiThemeProvider>
        <AppWrapper />
    </MuiThemeProvider>,
    document.getElementById('root'));
registerServiceWorker();
