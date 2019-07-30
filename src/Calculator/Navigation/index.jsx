import React from 'react';
import styles from './index.module.scss';

function Navigation() {
  return (
    <nav className = {styles.navi}>
      <div>
        <ul>
          <li>
            <a href="https://github.com/cooldaynow/calc" title = 'Link to Github'> Simple Calc </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
