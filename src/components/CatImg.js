import React from "react";
import { Img } from "./Img";
import styled from "styled-components";

const StyledCatImg = styled.div`
  width: 300px;
  height: 300px;
  text-align: center;
`;

export const CatImg = ({
  loadingCatImg,
  errorLoadingCat,
  catURL,
  ...props
}) => {
  return (
    <StyledCatImg {...props}>
      <Img
        loading={loadingCatImg}
        error={errorLoadingCat}
        url={catURL}
        alt="Cat"
      />
    </StyledCatImg>
  );
};
