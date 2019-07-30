import React, {Component} from 'react';
import styles from '../Quote/index.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faQuoteLeft,
} from '@fortawesome/free-solid-svg-icons'; 

class Quote extends Component {
  render() {
    let data = this.props.data;
    let quote = data ? data.quote : null;
    let author = data ? data.author : null;
    let textColor = this.props.textColor;
    return (
      <div>
        <div className={styles.wrap__quote}>
          {
            <p className={styles.text} style={{color: textColor}}>
              <FontAwesomeIcon icon = {faQuoteLeft}/> {quote}
            </p>
          }
        </div>
        <div className={styles.author} style={{color: textColor}}>
          {<p> -{author}</p>}
        </div>
      </div>
    );
  }
}

export default Quote;
