// @format
import React from 'react';
import {Button} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
export const ButtonCurrientPosition = ({click, name}) => {
  const mapMarker = <FontAwesomeIcon icon={faMapMarkerAlt} />;
  return (
    <div style={{marginRight: '100px'}}>
      <Button color="primary" onClick={click}>
        {' '}
        {mapMarker} {name}{' '}
      </Button>
    </div>
  );
};
