import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import { Home } from './pages/home';
import { Model } from './pages/model';
import { Two } from './pages/two';
import { Three } from './pages/three';
import { Layout } from './components/layout';
import { AnimatePresence } from 'framer-motion';

function App() {
  const imageDetails = {
    width: 260,
    height: 320
  };

  return (
    <BrowserRouter>
      <Layout>
        <Route
          render={({ location }) => (
            <AnimatePresence initial={false} exitBeforeEnter>
              <Switch location={location} key={location.pathname}>
                <Route
                  exact
                  path='/'
                  render={() => <Home imageDetails={imageDetails} />}
                />
                <Route
                  exact
                  path='/model'
                  render={() => <Model imageDetails={imageDetails} />}
                />
                <Route
                  exact
                  path='/two'
                  render={() => <Two imageDetails={imageDetails} />}
                />
                <Route
                  exact
                  path='/three'
                  render={() => <Three imageDetails={imageDetails} />}
                />
              </Switch>
            </AnimatePresence>
          )}
        />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
