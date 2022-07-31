import React from 'react';
import PropTypes from 'prop-types';
import {StyledDecisionButton } from './button.styled';
import { CheckIcon } from '../Icons/svg/CheckIcon';
import {Icon} from '../Icons/Icon';
export const DecisionButton = (props) => {
    return (
      <StyledDecisionButton
        type="button"
        {...props}
      >
        
       {/* <Icon><CheckIcon /></Icon> */}
        {props.icon && <i class={`fa ${props.icon}`} aria-hidden="true"></i> } 
        {props.label}
      </StyledDecisionButton>
    );
  };


  DecisionButton.propTypes = {
    primary: PropTypes.bool,
    onClick: PropTypes.func,
    disabled:PropTypes.bool,
   
    icon:PropTypes.string
  };
  
  DecisionButton.defaultProps = {
    primary: false,
    onClick: undefined,
    disabled:false,
    icon:"fa-check-circle"
  };
  
  
  