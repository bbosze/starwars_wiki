import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './Layout';
import HomePage from '../HomePage/HomePage';
import SpeciePage from '../SpeciePage/SpeciePage';
import CharacterPage from '../CharacterPage/CharacterPage';

export default function App() {

  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/specie" component={SpeciePage} />
          <Route path="/character" component={CharacterPage} />
        </Switch>
      </Layout>
    </Router>
  );
}
