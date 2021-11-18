import React from 'react';
import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import { Menu } from './components/Menu';
import { CounterContextProvider } from './contexts/CounterContext';
import './styles/global-styles.css';
import { Abc } from './templates/ABC';
import { Home } from './templates/Home';

ReactDOM.render(
  <React.StrictMode>
    <CounterContextProvider>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Fragment>
            <Route path="/" element={<Home />} exact />
            <Route path="/abc/:slug/:id" element={<Abc />} exact />
          </Fragment>
        </Routes>
      </BrowserRouter>
    </CounterContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
