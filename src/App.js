import React, { useEffect, useState } from "react";
import { Checkbox } from "./Checkbox";
import { getURLRandomCat } from "./services/TheCatApi";

export const App = () => {
  const [isEnabled, setIsEnabled] = useState(true);
  const [isAutoRefresh, setIsAutoRefresh] = useState(false);
  const [catUrl, setCatUrl] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const catUrl = await getURLRandomCat()
      setCatUrl(catUrl)
    }

    fetchData()
  }, [])

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
      <button type="button">
        Get cat
      </button>
      <img alt="" src={catUrl} />
    </>
  );
};
