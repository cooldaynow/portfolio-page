import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import './index.scss';
import Text from './Text';
import Card from './Card';
import Icon from './Icon';

class About extends Component {
  render() {
    return (
      <Container className={'about__section marginTop'}>
        <h2 className = 'h2'>
          About <span>Me</span>{' '}
        </h2>
        <Row>
          <Col md={4}>
            <Card />
          </Col>
          <Col md={8}>
            <Text />
            <Icon />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default About;
