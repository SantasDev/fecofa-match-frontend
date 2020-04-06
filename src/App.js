import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import './App.css';
import FcLayoutHeader from './components/layouts/LayoutHeader';
import FcLayoutNav from './components/layouts/LayoutNav';

import Pages from './pages';
import { FecofaMenu } from './services';

library.add(fab, faCheckSquare, faCoffee)

function App() {

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
