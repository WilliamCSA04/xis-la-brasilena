import PropTypes from 'prop-types';
import React from 'react';
import { propTypesChildren } from '../../helpers';
import { typeSafeguard } from './Button.helpers';

export default function Button({ children, type, onClick, ...props }) {
  const validType = typeSafeguard(type);
  return (
    <button type={validType} onClick={onClick} {...props}>
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func.isRequired,
  children: propTypesChildren.isRequired,
};

Button.defaultProps = {
  type: 'submit',
};
