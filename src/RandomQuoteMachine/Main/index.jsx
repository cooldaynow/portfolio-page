import React, {Component} from 'react';
import styles from './index.module.scss';
import Buttons from '../Buttons/';
import Quote from '../Quote/';
import Navigation from '../Navigation/index.jsx';

class Main extends Component {
  state = {
    data: null,
  };
  handleClick = async () => {
    let data = await this.getData();
    let random = Math.floor(Math.random() * data.length);
    let color = this.randomColors();
    this.setState({
      textColor: 'white',
    });
    setTimeout(() => {
      this.setState({
        textColor: color,
        data: data[random],
        color: color,
      });
    }, 700);
  };
  getData = () => {
    return fetch(
      'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json',
    )
      .then(response => {
        return response.json();
      })
      .then(res => res.quotes);
  };
  randomColors = () => {
    let colors = [
      '#16a085',
      '#27ae60',
      '#2c3e50',
      '#f39c12',
      '#e74c3c',
      '#9b59b6',
      '#FB6964',
      '#342224',
      '#472E32',
      '#BDBB99',
      '#77B1A9',
      '#73A857',
    ];

    let random = Math.floor(Math.random() * colors.length);

    return colors[random];
  };

  componentDidMount() {
    this.handleClick();
  }
  render() {
    return (
      <div
        className={styles.container}
        style={{backgroundColor: this.state.color}}>
        <Navigation />
        <div className={styles.wrap__content}>
          <div className={styles.frame}>
            <Quote data={this.state.data} textColor={this.state.textColor} />
            <Buttons
              handleClick={this.handleClick}
              color={this.state.color}
              data={this.state.data}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
