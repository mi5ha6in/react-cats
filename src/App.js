import React, { useState } from "react";
import { Checkbox } from "./Checkbox";

export const App = () => {
  const [isEnabled, setIsEnabled] = useState(true);
  const [isAutoRefresh, setIsAutoRefresh] = useState(false);
  const getCat = () => console.log('load new Cat');

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
      <button type="button" onClick={getCat}>
        Get cat
      </button>
      <img alt="" src="https://loremflickr.com/200/200/"/>
    </>
  );
};
