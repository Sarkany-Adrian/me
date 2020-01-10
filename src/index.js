// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
//
import './index.css';
// pages
import Home from './pages/home';
import About from './pages/about';
import Error404 from './pages/error-404';

// layout todo: refactor this into it's own wrapper
import TopHat from './components/top-hat';
import Header from './components/header';

const appContainer: HTMLElement | null =
  document && document.getElementById('root');

if (appContainer) {
  ReactDOM.render(
    <div>
      <TopHat />
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />

          <Route path="/about" component={About} />
          {/* Error page */}
          <Route path="/error" component={Error} />
          {/* 404 */}
          <Route path="*" component={Error404} />
        </Switch>
      </BrowserRouter>
    </div>,
    appContainer
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
