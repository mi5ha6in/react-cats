import React, { useEffect, useState } from "react";
import { Checkbox } from "./components/Checkbox";
import { getURLRandomCat } from "./services/TheCatApi";

export const App = () => {
  const [isEnabled, setIsEnabled] = useState(true);
  const [isAutoRefresh, setIsAutoRefresh] = useState(false);
  const [catURL, setCatUrl] = useState("");
  const [errorLoadingCat, setErrorLoadingCat] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const catURL = await getURLRandomCat();
        setCatUrl(catURL);
      } catch (error) {
        setErrorLoadingCat(true);
      }
    };

    fetchData();
  }, []);

  const errorLoadingCatText = <p>An error has occurred. Kitty won't load</p>;
  const imgCat = <img alt="Cat" src={catURL} />;

  return (
    <>
      <Checkbox
        id="enabled"
        label="Enabled"
        checked={isEnabled}
        onChange={() => setIsEnabled((isEnable) => !isEnabled)}
      />
      <Checkbox
        id="refresh"
        label="Auto-refresh every 5 second"
        checked={isAutoRefresh && isEnabled}
        onChange={() => setIsAutoRefresh((isAutoRefresh) => !isAutoRefresh)}
        disabled={!isEnabled}
      />
      <button type="button">Get cat</button>

      {errorLoadingCat ? errorLoadingCatText : imgCat}
    </>
  );
};
