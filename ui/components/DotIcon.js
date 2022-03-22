import React from 'react';
import PropTypes from 'prop-types';

export const DotIcon = ({ className = 'fill-gray-500' }) => (
  <svg
    viewBox='0 0 100 100'
    className={`w-6 h-auto ${className}`}
  >
    <circle cx='50%' cy='50%' r='25' />
  </svg>
)

PropTypes.DotIcon = {
  color: PropTypes.string,
  intensity: PropTypes.number,
};