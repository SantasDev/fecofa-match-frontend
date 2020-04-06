import React, { useEffect, useState } from 'react';
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

  const [actualPage, setActualPage] = useState(FecofaMenu[0]);
  useEffect( ()=>{
    setActualPage(FecofaMenu[Math.floor(Math.random() * FecofaMenu.length)]);
  },[]);
  return (
    <Router>
      <div className="App">
        <div className="fc-content_navbar">
          <FcLayoutNav navigation={FecofaMenu}/>
        </div>
        <div className="fc-content">
          <FcLayoutHeader title={actualPage.label} sections={actualPage.sections} />
          <main className="fc-content_main">
           <Pages />
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
