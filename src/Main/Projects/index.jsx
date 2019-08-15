import React, {Component} from 'react';
import {
  Container,
  Row,
} from 'reactstrap';
import ProjectsCard from '../Projects/ProjectsCard/index.jsx';
import weather from '../../images/Weather.png';
import ticTacToe from  '../../images/tic-tac-toe.png';
import randomQuoteMachine from  '../../images/random-quote-machine.png';
import calculator from  '../../images/calculator.png';
import pomodoroClock from  '../../images/pomodoro-clock.png';
import drumMachine from  '../../images/drum-machine.png';
import testForLad from  '../../images/test.png';

import './index.scss';

class Projects extends Component {
  state = {
    cards: [
      {src: testForLad, href: '/testForLad', name: 'Test for IT-company Lad'},
      {src: weather, href: '/SimpleWeatherViewer', name: 'Simple Weather Viewer'},
      {src: ticTacToe, href: '/TicTacToe', name: 'Simple Tic-Tac-Toe'},
      {src: randomQuoteMachine, href: '/RandomQuoteMachine', name: 'Random Quote Machine'},
      {src: calculator, href: '/Calculator', name: 'Simple Calculator'},
      {src: pomodoroClock, href: '/PomodoroClock', name: 'Pomodoro Clock'},
      {src: drumMachine, href: '/DrumMachine', name: 'Drum Machine'},
    ],
  };
  renderProjects = () => {
    return this.state.cards.map((card, index) => {
      return (
        <ProjectsCard
          key={index}
          src={card.src}
          href={card.href}
          name={card.name}
        />
      );
    });
  };
  render() {
    return (
      <Container className="projects__container">
        <Row>{this.renderProjects()}</Row>
      </Container>
    );
  }
}

export default Projects;
