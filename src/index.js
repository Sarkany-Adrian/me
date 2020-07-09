// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

// pages
import Home from 'pages/home';
import Contact from './pages/contact';
import About from './pages/about';
import Error404 from './pages/error-404';
import Error500 from './pages/error-500';

// layout
import Layout from 'layout';

const appContainer: HTMLElement | null =
  document && document.getElementById('root');

/**
 *
 */
if (appContainer) {
  ReactDOM.render(
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/error">
            <Error500 />
          </Route>
          <Route path="*">
            <Error404 />
          </Route>
        </Switch>
      </Layout>
    </Router>,
    appContainer
  );
}
