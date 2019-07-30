import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import {Container} from 'reactstrap';
import {Navigation} from './Navigation';
import Skeleton from './Skeleton';
import TicTacToe from './Tic/TicTacToe';
import SimpleWeatherViewer from './Weather/SimpleWeatherViewer';
import RandomQuoteMachine from './RandomQuoteMachine/Main';
import Calculator from './Calculator/Calc/';
import PomodoroClock from './Projects/PomodoroClock/Main';
import DrumMachine from './Projects/DrumMachine/Main';

function App() {
  return (
    <Router>
      <Container fluid>
        <Navigation />
        <Route exact path="/" component={Skeleton} />
        <Route path="/TicTacToe" component={TicTacToe} />
        <Route path="/SimpleWeatherViewer" component={SimpleWeatherViewer} />
        <Route path="/RandomQuoteMachine" component={RandomQuoteMachine} />
        <Route path="/Calculator" component={Calculator} />
        <Route path="/PomodoroClock" component={PomodoroClock} />
        <Route path="/DrumMachine" component={DrumMachine} />
      </Container>
    </Router>
  );
}
export default App;
