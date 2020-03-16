import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import './App.css';
import FcLayoutHeader from './components/layouts/LayoutHeader';
import FcLayoutNav from './components/layouts/LayoutNav';

import Pages from './pages';

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
    label: 'Partidos',
    link: '/matches',
    icon: ''
  },
  {
    id: 3,
    label: 'Equipos',
    link: '/teams',
    icon: ''
  },
  {
    id: 4,
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
          <FcLayoutHeader />
          <main className="fc-content_main">
           <Pages />
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
