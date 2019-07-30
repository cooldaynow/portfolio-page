import React, {Component} from 'react';
import {Col} from 'reactstrap';
import  './index.scss';
import GoogleMapReact from 'google-map-react';


class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 56.329054,
      lng: 43.90699,
    },
    zoom: 8,
  };
  renderMarkers = (map, maps) => {
    let adress =
      'Сормовское ш., 1Д, Нижний Новгород, Нижегородская обл., 603074';
    var infowindow = new maps.InfoWindow({
      content: adress,
    });

    let marker = new maps.Marker({
      position: this.props.center,
      map,
      title: '',
    });
    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });
  };
  render() {
    return (
      <Col lg={7} md={7} sm={12}>
        <div className="google__map">
          <GoogleMapReact
            yesIWantToUseGoogleMapApiInternals={true}
            bootstrapURLKeys={{key: 'AIzaSyBmxnpSa_flQZsOu_AysNQL8tT06_bV-pI'}}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            onGoogleApiLoaded={({map, maps}) => this.renderMarkers(map, maps)}
          />
        </div>
      </Col>
    );
  }
}

export default GoogleMap;
