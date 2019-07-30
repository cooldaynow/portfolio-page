//@format
import React, {Component} from 'react';
import {Table} from 'reactstrap';

export default class DataTable extends Component {
  render() {
    return (
      <Table dark style={{marginTop: '20px'}}>
        <tbody>
          <tr>
            <th scope="row">Current temperature : </th>
            <td>{this.props.currTemp}</td>
          </tr>
          <tr>
            <th scope="row">Max temperature : </th>
            <td>{this.props.maxTemp}</td>
          </tr>
          <tr>
            <th scope="row">Min temperature : </th>
            <td>{this.props.minTemp}</td>
          </tr>
          <tr>
            <th scope="row">Wind Speed: </th>
            <td>{this.props.windSpeed}</td>
          </tr>
          <tr>
            <th scope="row">Pressure : </th>
            <td>{this.props.pressure}</td>
          </tr>
          <tr>
            <th scope="row">Humidity : </th>
            <td>{this.props.humidity}</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
