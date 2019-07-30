import React from 'react';
import html from '../../../images/html.png';
import js from '../../../images/js.png';
import css from '../../../images/css.png';
import ubuntu from '../../../images/ubuntu.png';
import gitHub from '../../../images/GitHub-Mark-64px.png';

export default class AboutIcon extends React.Component {
  render() {
    return (
      <div>
        <ul className="about__icon">
          <li>
            <a href="https://www.w3.org/html/">
              <img src={html} alt="icon html" />{' '}
            </a>
          </li>
          <li>
            <a href="https://www.w3.org/Style/CSS/Overview.en.html">
              <img src={css} alt="icon css" />{' '}
            </a>
          </li>
          <li>
            <a href="https://www.javascript.com/">
              <img src={js} alt="icon js" />{' '}
            </a>
          </li>
          <li>
            <a href="https://www.ubuntu.com/">
              <img src={ubuntu} alt="icon ubuntu" />{' '}
            </a>
          </li>
          <li>
            <a href="https://github.com/">
              <img src={gitHub} alt="icon github" />{' '}
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
