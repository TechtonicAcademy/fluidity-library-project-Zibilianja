import { render } from 'react-dom';
import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import App from './App';
import './styles/index.scss';

render(<App />, document.getElementById('root'));