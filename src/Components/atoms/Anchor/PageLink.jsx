import React from 'react';
import PropTypes from 'prop-types';
import {StyledPageLink} from './Anchor.styled';

export const PageLink = (props) =>{
    return <StyledPageLink {...props} />
}

PageLink.propTypes = {
    primary: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    onClick: PropTypes.func,
    disabled:PropTypes.bool,
    label:PropTypes.number,
    icon:PropTypes.oneOf([ 'left', 'right'])
}


PageLink.defaultProps = {
    primary: false,
    size: 'medium',
    onClick: undefined,
    disabled:false
  };