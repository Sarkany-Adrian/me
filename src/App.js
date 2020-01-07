// @flow
import React from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './pages/home';
import About from './pages/about';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>
        </Switch>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
