import React, { useState, useEffect } from "react";
import { Checkbox } from "./components/Checkbox";
import { CatImg } from "./components/CatImg";
import { getRandomCatURL } from "./services/TheCatApi";

export const App = () => {
  const [isEnabled, setIsEnabled] = useState(true);
  const [isAutoRefresh, setIsAutoRefresh] = useState(false);
  const [catURL, setCatUrl] = useState("");
  const [loadingCatImg, setLoadingCatImg] = useState(true);
  const [errorLoadingCat, setErrorLoadingCat] = useState(false);

  const loadCat = async () => {
    try {
      const randomCatURL = await getRandomCatURL();
      setCatUrl(randomCatURL);
      setLoadingCatImg(false);
    } catch (error) {
      setLoadingCatImg(false);
      setErrorLoadingCat(true);
    }
  };

  useEffect(() => {
    loadCat();
  }, []);

  useEffect(() => {
    let interval;
    if (isAutoRefresh) {
      interval = setInterval(loadCat, 5000);
      return () => clearInterval(interval);
    } else {
      clearInterval(interval);
    }
  }, [isAutoRefresh]);

  return (
    <>
      <Checkbox
        id="enabled"
        label="Enabled"
        checked={isEnabled}
        onChange={() => {
          setIsEnabled((isEnable) => !isEnabled);
          setIsAutoRefresh(false);
        }}
      />
      <Checkbox
        id="refresh"
        label="Auto-refresh every 5 second"
        checked={isAutoRefresh && isEnabled}
        onChange={() => setIsAutoRefresh((isAutoRefresh) => !isAutoRefresh)}
        disabled={!isEnabled}
      />
      <button
        type="button"
        disabled={!isEnabled || isAutoRefresh}
        onClick={() => loadCat()}
      >
        Get cat
      </button>
      <CatImg
        loadingCatImg={loadingCatImg}
        errorLoadingCat={errorLoadingCat}
        catURL={catURL}
      />
    </>
  );
};
