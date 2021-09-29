import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import App from './App.jsx';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/errorboundary.scss';

render(
  <Router>
    <ErrorBoundary>
      <Header />
        <App />
      <Footer />
    </ErrorBoundary>
  </Router>,
  document.getElementById('root')
);
