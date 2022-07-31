import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './button.styled';


export const Button = (props) => {
  return (
    <StyledButton
      type="button"
      {...props}
    >
      {props.icon && <i class={`fa ${props.icon}`} aria-hidden="true"></i> } 
      {props.label}
    </StyledButton>
  );
};




Button.propTypes = {
  primary: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  onClick: PropTypes.func,
  disabled:PropTypes.bool,
  icon:PropTypes.string
};

Button.defaultProps = {
  primary: false,
  size: 'medium',
  onClick: undefined,
  disabled:false
};


