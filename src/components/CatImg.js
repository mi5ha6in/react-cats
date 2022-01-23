import React from "react";
import { Img } from "./Img";

export const CatImg = ({ loadingCatImg, errorLoadingCat, catURL }) => {
  return (
    <>
      <Img
        loading={loadingCatImg}
        error={errorLoadingCat}
        url={catURL}
        alt="Cat"
      />
    </>
  );
};
