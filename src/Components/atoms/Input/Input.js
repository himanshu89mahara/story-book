import React from "react";
import PropTypes from "prop-types";
import { StyledInput } from "./Input.styled";
export const Input = (props) =>{
    return <StyledInput {...props} />
}

Input.PropTypes = {
    placeholder:PropTypes.string,
    disabled:PropTypes.bool,
    error:PropTypes.bool
}
Input.defaultProps = {
    placeholder:"Example Input",
    disabled:false,
    error:false
}

