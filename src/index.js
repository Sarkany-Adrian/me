// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch} from 'react-router-dom';
//
import './index.css';
// pages
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Error404 from './pages/error-404';

// layout
import Layout from './containers/layout';

const appContainer: HTMLElement | null =
  document && document.getElementById('root');

if (appContainer) {
  ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <Layout exact path="/" component={Home} />

        <Layout path="/about" component={About} />
        <Layout path="/contact" component={Contact} />
        {/* Error page */}
        <Layout path="/error" component={Error} />
        {/* 404 */}
        <Layout path="*" component={Error404} />
      </Switch>
    </BrowserRouter>,
    appContainer
  );
}
