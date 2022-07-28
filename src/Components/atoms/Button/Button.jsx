import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton, StyledPaginationLink } from './button.styled';


export const Button = (props) => {
  return (
    <StyledButton
      type="button"
      {...props}
    />
  );
};

export const PaginationLink = (props) =>{
  return (
    <StyledPaginationLink
   
     {...props}
    />
  );

}

Button.propTypes = {
  primary: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  onClick: PropTypes.func,
  disabled:PropTypes.bool
};

Button.defaultProps = {
  primary: false,
  size: 'medium',
  onClick: undefined,
  disabled:false
};

PaginationLink.propTypes = {
  primary: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  onClick: PropTypes.func,
  disabled:PropTypes.bool
};

PaginationLink.defaultProps = {
  primary: false,
  size: 'medium',
  onClick: undefined,
  disabled:false
};

