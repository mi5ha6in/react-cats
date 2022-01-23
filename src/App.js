import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getRandomCatURL } from "./services/TheCatApi";
import { Checkbox } from "./components/Checkbox";
import { CatImg } from "./components/CatImg";
import { Button } from "./components/Button";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 16px;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
`;

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
    <AppContainer>
      <Checkbox
        id="enabled"
        label="Enabled"
        checked={isEnabled}
        onChange={() => {
          setIsEnabled((isEnable) => !isEnabled);
        }}
      />
      <Checkbox
        id="refresh"
        label="Auto-refresh every 5 second"
        checked={isAutoRefresh}
        onChange={() => setIsAutoRefresh((isAutoRefresh) => !isAutoRefresh)}
        disabled={!isEnabled}
      />
      <Button
        type="button"
        disabled={!isEnabled || isAutoRefresh}
        onClick={() => loadCat()}
      >
        Get cat
      </Button>
      <CatImg
        loadingCatImg={loadingCatImg}
        errorLoadingCat={errorLoadingCat}
        catURL={catURL}
      />
    </AppContainer>
  );
};
