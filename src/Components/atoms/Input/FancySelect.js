import React, { useState } from "react";
import PropTypes from "prop-types";
import { StyledFancyContainer } from "./Input.styled";
export const FancySelect = (props) => {
    const [toggleSelect,setToggleSelect] = useState(false);
  return (
    <div>
      <StyledFancyContainer toggle={toggleSelect} {...props}>
        <label onClick={()=>{
            setToggleSelect((prevState)=>!prevState);
        }}>Select:</label>

        <ul>
          <li>Option 1</li>
          <li>Option 2</li>
          <li>Option 3</li>
        </ul>
      </StyledFancyContainer>

      <select style={{ display: "none" }}>{props.children}</select>
    </div>
  );
};

FancySelect.PropTypes = {
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
};

FancySelect.defaultProps = {
  placeholder: "Example Select",
  disabled: false,
  error: false,
};
