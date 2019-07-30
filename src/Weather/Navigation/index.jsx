//@format
import React, {Component} from 'react';
import {Navbar} from 'reactstrap';
import {ButtonCurrientPosition} from '../ButtonCurrentPosition';
import '../Navigation/index.scss';

export default class Navigation extends Component {
  render() {
    const clickOnPosition = this.props.click;
    return (
      <div className={'weather__navigation'}>
        <Navbar className="bg-light weather__navbar">
          <a
            href="https://github.com/cooldaynow/ok/tree/master/src"
            className="weather__brand">
            Simple Weather Viewer{' '}
          </a>
          <ButtonCurrientPosition
            click={clickOnPosition}
            name={'Current position'}
          />
        </Navbar>
      </div>
    );
  }
}
