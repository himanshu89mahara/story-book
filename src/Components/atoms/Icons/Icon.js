import React from "react";
import PropTypes from "prop-types";

import StyledIcon from "./Icon.styled"

export const Icon = (props) =>{
    return <StyledIcon {...props }>{props.children}</StyledIcon>
}