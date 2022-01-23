import React from "react";
import { Spinner } from "../components/Spinner";
import { ErrorMessage } from "../components/ErrorMessage";

export const Img = ({ loading, error, url, alt }) => {
  const hasData = !(loading || error);
  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const img = hasData ? <img alt={alt} src={url} /> : null;

  return (
    <>
      {errorMessage}
      {spinner}
      {img}
    </>
  );
};
