import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from './Home';
import MatchesPage from './Matches';
import PlayersPage from './Players';
import TeamsPage from './Teams';
import TestPage from './Test';
import AdminTeams from './admin/Teams';

const pages = () => (
  <Switch>
  <Route path="/admin/teams">
    <AdminTeams />
  </Route>
    <Route path="/test">
      <TestPage />
    </Route>
    <Route path='/teams'>
      <TeamsPage />
    </Route>
    <Route path='/matches'>
      <MatchesPage />
    </Route>
    <Route path='/players'>
      <PlayersPage />
    </Route>
    <Route path='/'>
      <HomePage />
    </Route>

</Switch>
);
export default pages;