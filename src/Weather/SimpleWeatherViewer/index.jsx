// @format

import React, {Component} from 'react';
import './index.scss';
import {Nav, NavItem, NavLink, Row, Col, Container} from 'reactstrap';
import {currentCity} from '../Api';
import WeatherViewer from '../WeatherViewer';
import Navigation from '../Navigation';
import MediaQuery from '../MediaQuery';

class SimpleWeatherViewer extends Component {
  state = {
    CITIES: [
      {name: 'Moscow', zipCode: '119002'},
      {name: 'Saint Petersburg', zipCode: '190000'},
      {name: 'Novosibirsk', zipCode: '630000'},
      {name: 'Yekaterinburg', zipCode: '620000'},
      {name: 'Nizhniy Novgorod', zipCode: '603006'},
      {name: 'Kazan', zipCode: '420202'},
      {name: 'Chelyabinsk', zipCode: '454013'},
      {name: 'Omsk', zipCode: '644000'},
      {name: 'Rostov-on-Don', zipCode: '344000'},
    ],
    activePlace: 0,
    changeCity: true,
    weatherData: {},
    coords: {lat: 55.75222, lon: 37.61556},
    media: '',
  };

  renderNavs = () => {
    const activePlace = this.state.activePlace;
    const changeCity = this.state.changeCity;
    const CITIES = this.state.CITIES;

    return CITIES.map((place, index) => (
      <NavItem key={index}>
        <NavLink
          href="#"
          className={activePlace === index && changeCity ? 'active' : ''}
          id={index}
          onClick={() => this.changeCurrentCity(index)}>
          {place.name}
        </NavLink>
      </NavItem>
    ));
  };

  changeGeoPosition = async () => {
    navigator.geolocation.getCurrentPosition(this.geoSuccess);
  };

  geoSuccess = async position => {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=3dfdd48606f654af6715416a4bea4e5b&units=imperial`;
    await fetch(URL)
      .then(res => res.json())
      .then(json =>
        this.setState(state => {
          return {
            weatherData: json,
            changeCity: false,
            coords: {lat: lat, lon: lon},
          };
        }),
      );
  };

  changeCurrentCity = async index => {
    const data = await currentCity(this.state.CITIES[index].zipCode);
    this.setState(state => {
      return {
        weatherData: data,
        changeCity: true,
        activePlace: index,
        coords: data.coord,
      };
    });
  };
  mediaQuery = () => {
    let media;
    //window.addEventListener('resize', event => {
    if (document.body.clientWidth < 700) {
      console.log('<700');
      media = true;
    } else {
      media = false;
    }
    this.setState({
      media: media,
    });
    //});
  };
  async componentDidMount() {
    this.mediaQuery();
    const data = await currentCity(
      this.state.CITIES[this.state.activePlace].zipCode,
    );
    this.setState({weatherData: data});
  }

  render() {
    const activePlace = this.state.activePlace;
    return (
      <Container fluid className={'wrap__weather'}>
        <Navigation click={this.changeGeoPosition} />
        <Row className="justify-content-center">
          <Col xs={12} sm={12} md={3}>
            {this.state.media ? (
              <MediaQuery renderNavs={this.renderNavs} />
            ) : (
              <div>
                <h2>Select a city </h2>
                <Nav pills vertical>
                  {this.renderNavs()}
                </Nav>
              </div>
            )}
          </Col>
          <Col xs={12} sm={12} md={9}>
            <WeatherViewer
              key={activePlace}
              changeCity={this.state.changeCity}
              activePlace={activePlace}
              weatherData={this.state.weatherData}
              coords={this.state.coords}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SimpleWeatherViewer;
