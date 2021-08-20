import PropTypes from 'prop-types';

export const propTypesChildren = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.node),
  PropTypes.node,
]);
