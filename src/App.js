import React, { useState } from "react";
import { Checkbox } from "./components/Checkbox";
import { CatImg } from "./components/CatImg";


export const App = () => {
  const [isEnabled, setIsEnabled] = useState(true);
  const [isAutoRefresh, setIsAutoRefresh] = useState(false);

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
      <CatImg />
    </>
  );
};
