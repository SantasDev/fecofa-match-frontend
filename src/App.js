import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import './App.css';
import FcLayoutHeader from './components/layouts/LayoutHeader';
import FcLayoutNav from './components/layouts/LayoutNav';

import HomePage from './pages/Home';
import TestPage from './pages/Test';

library.add(fab, faCheckSquare, faCoffee)

const FecofaMenu = [
  {
    id: 1,
    label: 'inicio',
    link: '/',
    icon: ''
  },
  {
    id: 2,
    label: 'Juegos',
    link: '/games',
    icon: ''
  },
  {
    id: 3,
    label: 'Equipos',
    link: '/team',
    icon: ''
  },
  {
    id: 1,
    label: 'Jugadores',
    link: '/players',
    icon: ''
  }
];

function App() {
  return (
    <Router>
      <div className="App">
        <div className="fc-content_navbar">
          <FcLayoutNav navigation={FecofaMenu}/>
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
