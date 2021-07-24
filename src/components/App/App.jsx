import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from 'Components/HomePage/HomePage';
import SpeciePage from 'Components/SpeciePage/SpeciePage';
import CharacterPage from 'Components/CharacterPage/CharacterPage';
import Layout from './Layout';

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
