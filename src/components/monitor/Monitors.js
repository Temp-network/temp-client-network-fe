import React from 'react';
import Monitor from './Monitor';
import PropTypes from 'prop-types';

function Monitors({ monitors }) {
  const monitorElements = monitors.map(monitor => (
    <li key={monitor._id}>
      <Monitor monitor={monitor}/>
    </li>
  ));

  return (
    <ul>{monitorElements}</ul>
  );
}

Monitors.propTypes = {
  monitors: PropTypes.array.isRequired
};

export default Monitors;

