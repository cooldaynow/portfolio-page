import React, {Component} from 'react';
import './index.scss';

//import {Link} from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import Scrollspy from 'react-scrollspy';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavItem,
} from 'reactstrap';

export class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      activeClass: '',
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  componentDidMount() {
    let classNavBar;
    window.addEventListener('scroll', event => {
      if (window.pageYOffset > 0) {
        classNavBar = 'move';
      } else {
        classNavBar = '';
      }
      this.setState({
        activeClass: classNavBar,
      });
    });
  }
  render() {
    return (
      <header>
        <Navbar
          color="dark"
          dark
          expand="md"
          fixed={'top'}
          className={'navigation '  + this.state.activeClass}>
          <Link to="/">Portfolio Page</Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar right ={'true'}>
            <Scrollspy
              items={['home', 'about', 'projects', 'contacts']}
							offset = {-120}
              currentClassName="current"
              className="nav ml-auto nav__list">
              <NavItem>
                <Link to="/#home">Home</Link>
              </NavItem>
              <NavItem>
                <Link to="/#about">About</Link>
              </NavItem>
              <NavItem>
                <Link to="/#projects">Projects</Link>
              </NavItem>
              <NavItem>
                <Link to="/#contacts">Contacts</Link>
              </NavItem>
            </Scrollspy>
          </Collapse>
        </Navbar>
      </header>
    );
  }
}
