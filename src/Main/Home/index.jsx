import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import './index.scss';

function Home() {
  return (
    <Container fluid>
      <Row>
        <Col sm={12} md={12} className="home__section">
            <div className="home__text">
              <h1>
                Hey <span>i'am spuvec </span>
              </h1>
              <span>trying to be a web developer...</span>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
