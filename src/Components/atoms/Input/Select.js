import React from "react";
import PropTypes from "prop-types";
import { StyledSelect } from "./Input.styled";
export const Select = (props) =>{
    return <StyledSelect {...props} />
}

Select.PropTypes = {
    placeholder:PropTypes.string,
    disabled:PropTypes.bool,
    error:PropTypes.bool,
    value:PropTypes.oneOf([1,2,3,4,5])
}
Select.defaultProps = {
    placeholder:"Example Select",
    disabled:false,
    error:false
}

