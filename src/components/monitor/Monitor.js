import React from 'react';
import PropTypes from 'prop-types';

function Monitor({ name }) {
  return <h3>${name}</h3>;
}

Monitor.propTypes = {
  name: PropTypes.string.isRequired
};

export default Monitor;
