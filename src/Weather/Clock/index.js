//@format
import React, {Component} from 'react';
import {getTime} from '../Clock/ClockApi';

export class Clock extends Component {
  state = {
    time: new Date().toLocaleString(),
    coords: this.props.coords,
  };

  getGeoName = async () => {
    let geoName = await getTime(this.state.coords);
    this.setState({geoName: geoName});
  };
  renderTime = () => {
    let geoName = this.state.geoName;

    let d = new Date();
    let pureTime = d.getTime() - -(d.getTimezoneOffset() * 60000);

    this.setState(state => {
      return {
        time: new Date(pureTime + geoName.rawOffset * 1000).toLocaleString(),
      };
    });
  };
  //return geo current time !
  async componentWillReceiveProps(nextProps) {
    if (nextProps.coords !== this.props.coords) {
      await this.setState({
        coords: nextProps.coords,
      });
      this.getGeoName();
    }
  }

  async componentDidMount() {
    this.getGeoName();
    this.timerID = setInterval(() => this.renderTime(), 900);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return <div>as of {this.state.time}</div>;
  }
}
