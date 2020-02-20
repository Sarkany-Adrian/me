// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch} from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

// pages
import Home from './pages/home';
import Expertise from './pages/expertise';
import Contact from './pages/contact';
import Clients from './pages/clients';
import News from './pages/news';
import Error404 from './pages/error-404';
import Error500 from './pages/error-500';

// layout
import Layout from './containers/layout';

const appContainer: HTMLElement | null =
  document && document.getElementById('root');

if (appContainer) {
  ReactDOM.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Layout exact path="/" component={Home} />
        <Layout path="/expertise" component={Expertise} />
        <Layout path="/clients" component={Clients} />
        <Layout path="/news" component={News} />
        <Layout path="/contact" component={Contact} />
        {/* error pages */}
        <Layout path="/error" component={Error500} />
        <Layout path="*" component={Error404} />
      </Switch>
    </BrowserRouter>,
    appContainer
  );
}
