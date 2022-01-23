import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 8px;
  width: 100%;
`;

export const Button = (props) => {
  return <StyledButton {...props} />;
};
