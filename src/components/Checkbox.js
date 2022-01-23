import React from "react";
import styled from "styled-components";

const StyledCheckbox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 8px;
`;

export const Checkbox = ({
  label,
  id,
  checked,
  onChange,
  disabled,
  ...props
}) => {
  return (
    <StyledCheckbox {...props}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <label htmlFor={id}>{label}</label>
    </StyledCheckbox>
  );
};
