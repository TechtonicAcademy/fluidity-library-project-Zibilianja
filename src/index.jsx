import { render } from 'react-dom';
import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import App from './App';


render(<ErrorBoundary><App /></ErrorBoundary>, document.getElementById('root'));