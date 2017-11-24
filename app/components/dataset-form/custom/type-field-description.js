import React from 'react';

const customTypeField = () =>
  (<ul className="type-description-list">
    <li>
      <span>Tabular: Dataset contains table formatted data. Providers available:
      Carto, Gee, Feature Service, csv, json tsv and xml</span>
    </li>
    <li>
      <span>Raster: Dataset is an image. Only Google Earth Engine, wms and Carto
      connectors can hold raster data</span>
    </li>
  </ul>);

export default customTypeField;
