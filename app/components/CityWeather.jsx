import React from 'react';
import {Button} from '@blueprintjs/core';

const City = ({city, deleteCity}) => {
  let forcast;
  if (city.forcast && city.forcast.length > 0) {
    forcast = city.forcast[0].main.temp;
  }
  return (
    <tr>
      <td>{city.name}</td>
      <td>{city.main.temp}c</td>
			<td>{forcast && `${forcast}c`}</td>
			<td><Button 
						className="pt-icon-trash" onClick={() => deleteCity(city.id)}></Button></td>
    </tr>
  );
};

export default ({cities, deleteCity}) => {
  return (
    <table className="city-list" style={{width: '100%'}}>
      <tr>
        <th>City</th>
        <th>Today</th>
        <th>Forecast</th>
        <th>Delete</th>
      </tr>
      {cities.map((city, i) => {
        return <City key={i} city={city} deleteCity={deleteCity} />;
      })}
    </table>
  );
};
