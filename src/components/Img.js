import React from "react";
import { Spinner } from "../components/Spinner";
import { ErrorMessage } from "../components/ErrorMessage";
import styled from "styled-components";

const StyledImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

export const Img = ({ loading, error, url, alt }) => {
  const hasData = !(loading || error);
  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const img = hasData ? <StyledImg alt={alt} src={url} /> : null;

  return (
    <>
      {errorMessage}
      {spinner}
      {img}
    </>
  );
};
