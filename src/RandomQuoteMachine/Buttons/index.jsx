import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faTwitterSquare,
  faTumblrSquare,
} from '@fortawesome/free-brands-svg-icons';
import styles from '../Buttons/index.module.scss';

class Buttons extends Component {
  render() {
    let data = this.props.data;
    let quote = data ? data.quote + data.author : null;
    let twitter = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote}`;
    return (
      <div className={styles.wrap__buttons}>
        <div className={styles.wrap__message}>
          <a
            href={twitter}
            className={styles.message}
            style={{color: this.props.color}}>
            <FontAwesomeIcon icon={faTwitterSquare} />
          </a>
          <a
            href="https://www.tumblr.com"
            className={styles.message}
            style={{color: this.props.color}}>
            <FontAwesomeIcon icon={faTumblrSquare} />
          </a>
        </div>
        <button
          className={styles.newQuote}
          onClick={this.props.handleClick}
          style={{backgroundColor: this.props.color}}>
          New Quote
        </button>
      </div>
    );
  }
}

export default Buttons;
