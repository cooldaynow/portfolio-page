import React, {Component} from 'react';
import {Container, Row} from 'reactstrap';
import './index.scss';
import Icons from '../Contacts/Icons';
import GoogleMap from '../Contacts/GoogleMap';

class Contacts extends Component {
  render() {
    return (
      <Container  className="contacts__container">
        <Row>
          <Icons />
          <GoogleMap />
        </Row>
      </Container>
    );
  }
}

export default Contacts;
