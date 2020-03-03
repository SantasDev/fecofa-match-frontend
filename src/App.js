import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import FcLayoutHeader from './components/layouts/LayoutHeader';
import FcLayoutNav from './components/layouts/LayoutNav';

import HomePage from './pages/Home';
import TestPage from './pages/Test';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="fc-content_navbar">
          <FcLayoutNav />
        </div>
        <div className="fc-content">
          <FcLayoutHeader></FcLayoutHeader>
          <main className="fc-content_main">
            <Switch>
              <Route path="/test">
                <TestPage />
              </Route>
              <Route path="/">
                <HomePage />
              </Route>
            </Switch>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
