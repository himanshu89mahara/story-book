import React from 'react';
import PropTypes from 'prop-types';
export const Anchor = (props) =>{
    return <a href="">{props.children}</a>
}
Anchor.propTypes = {
    primary:PropTypes.bool,
    
}