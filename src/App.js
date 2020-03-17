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
    icon: '',
    sections : [
      {
        id: 1,
        label: 'Fecofa',
        link: '/about',
      },
      {
        id: 2,
        label: 'Selección Colombia',
        link: '/colombia-team',
      },
      {
        id: 3,
        label: 'Comité',
        link: '/chair',
      },
    ]
  },
  {
    id: 2,
    label: 'Partidos',
    link: '/matches',
    icon: '',
    sections : [
      {
        id: 1,
        label: 'Resultados',
        link: '/matches/results',
      },
      {
        id: 2,
        label: 'Siguiente fecha',
        link: '/matches/nearlest',
      },
      {
        id: 3,
        label: 'Próximos partidos',
        link: '/matches/next',
      },
    ]
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
    icon: '',
    sections : [
      {
        id: 1,
        label: 'defensiva',
        link: '/players/defensive',
      },
      {
        id: 2,
        label: 'Ofensiva',
        link: '/players/ofensive',
      },
      {
        id: 3,
        label: 'Equipos especiales',
        link: '/players/special-teams',
      },
      {
        id: 4,
        label: 'Técnicos',
        link: '/players/coaches',
      }
    ]
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
          <FcLayoutHeader page={FecofaMenu[3]} />
          <main className="fc-content_main">
           <Pages />
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
