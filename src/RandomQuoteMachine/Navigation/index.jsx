import React from 'react';
import styles from '../Navigation/index.module.scss';

function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <a href = 'https://github.com/cooldaynow/random-quote-machine' title = 'Link to github' > Random quote machine </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
