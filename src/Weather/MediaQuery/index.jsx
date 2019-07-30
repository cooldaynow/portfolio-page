import React from 'react';
import {
  Nav
} from 'reactstrap';

export default class MediaQuery extends React.Component {
  render() {
    return (
      <Nav pills className = 'justify-content-center'>
				{this.props.renderNavs()}
      </Nav>
    );
  }
}
