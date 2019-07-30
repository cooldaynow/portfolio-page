// @format
import React, {Component} from 'react';
import {Row, Col, Container, Button, ButtonGroup} from 'reactstrap';
import DataTable from '../DataTable';
import {Clock} from '../Clock';
import '../WeatherViewer/index.scss';

export default class WeatherViewer extends Component {
  constructor() {
    super();
    this.state = {
      celsius: true,
    };
  }

  translateInCelsius = fahrenheit => {
    return this.state.celsius
      ? Math.round((((fahrenheit - 32) * 5) / 9) * 100) / 100 + '\u2103'
      : `${fahrenheit}\u2109`;
  };

  render() {
    const weatherData = this.props.weatherData;
    if (!('weather' in weatherData)) return <p>Loading...</p>;
    const weather = weatherData.weather[0];
    const iconUrl = 'https://openweathermap.org/img/w/' + weather.icon + '.png';

    return (
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} sm={12} lg={10} className="weather__info">
            <div className="text-center weather__header">
              <h2>
                {weather.main} in {weatherData.name}
                <img src={iconUrl} alt="icon" />
              </h2>
              <Clock coords={this.props.coords} />
            </div>
            <ButtonGroup>
              <Button
                disabled={this.state.celsius}
                onClick={() => this.setState({celsius: !this.state.celsius})}>
                &#8451;
              </Button>
              <Button
                disabled={!this.state.celsius}
                onClick={() => this.setState({celsius: !this.state.celsius})}>
                &#8457;
              </Button>
            </ButtonGroup>
            <DataTable
              currTemp={this.translateInCelsius(weatherData.main.temp)}
              maxTemp={this.translateInCelsius(weatherData.main.temp_max)}
              minTemp={this.translateInCelsius(weatherData.main.temp_min)}
              windSpeed={
                Math.round(weatherData.wind.speed * 0.44704 * 100) / 100 +
                ' m/s'
              }
              pressure={weatherData.main.pressure / 10 + ' kPa'}
              humidity={weatherData.main.humidity + '%'}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}
