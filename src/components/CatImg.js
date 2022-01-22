import React, { useState, useEffect } from "react";
import { getURLRandomCat } from "../services/TheCatApi";
import { Spinner } from "../components/Spinner";
import { ErrorMessage } from "../components/ErrorMessage";

export const CatImg = () => {
  const [catURL, setCatUrl] = useState("");
  const [loadingCatImg, setLoadingCatImg] = useState(true);
  const [errorLoadingCat, setErrorLoadingCat] = useState(false);

  const hasData = !(loadingCatImg || errorLoadingCat);
  const errorMessage = errorLoadingCat ? <ErrorMessage /> : null;
  const spinner = loadingCatImg ? <Spinner /> : null;
  const img = hasData ? <img alt="Cat" src={catURL} /> : null;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const catURL = await getURLRandomCat();
        setCatUrl(catURL);
        setLoadingCatImg(false);
      } catch (error) {
        setLoadingCatImg(false);
        setErrorLoadingCat(true);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {errorMessage}
      {spinner}
      {img}
    </>
  );
};
