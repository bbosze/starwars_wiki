import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from 'Components/HomePage/HomePage';
import SpeciePage from 'Components/SpeciePage/SpeciePage';
import CharacterPage from 'Components/CharacterPage/CharacterPage';
import ResultPage from 'Components/ResultPage/ResultPage';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import Layout from './Layout';

const App = () => {
  const alertOptions = {
    position: positions.TOP_RIGHT,
    timeout: 3000,
    offset: '30px',
    transition: transitions.SCALE,
  };

  return (
    <Router>
      <AlertProvider template={AlertTemplate} {...alertOptions}>
        <Layout>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/specie" component={SpeciePage} />
            <Route path="/character" component={CharacterPage} />
            <Route path="/result" component={ResultPage} />
          </Switch>
        </Layout>
      </AlertProvider>
    </Router>
  );
};

export default App;
