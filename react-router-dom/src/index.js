import React from 'react';
import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import { Menu } from './components/Menu';
import { CounterContextProvider } from './contexts/CounterContext';
import './styles/global-styles.css';
import { Abc } from './templates/ABC';
import { Home } from './templates/Home';
import { Page404 } from './templates/Page404';

ReactDOM.render(
  <React.StrictMode>
    <CounterContextProvider>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Fragment>
            <Route path="/abc/:slug/:id" element={<Abc />} />
            <Route path="/abc" element={<Abc />} />
            <Route path="/" element={<Home />} exact />
            <Route path="*" element={<Page404 />} />
          </Fragment>
        </Routes>
      </BrowserRouter>
    </CounterContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
