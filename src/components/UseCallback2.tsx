import React, { useState, ChangeEvent, useCallback } from "react";
import Box from "./Box";

const UseCallback2: React.FC = () => {
  const [size, setSize] = useState<number>(100);
  const [isDark, setIsDark] = useState<boolean>(false);

  const createBoxStyle = useCallback(
    () => ({
      background: "pink",
      width: `${size}px`,
      height: `${size}px`,
    }),
    [size]
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSize(Number(e.target.value));
  };

  return (
    <div>
      <input type="number" value={size} onChange={handleChange} />
      <button onClick={() => setIsDark(!isDark)}>ToggleDark</button>
      <Box createBoxStyle={createBoxStyle} />
      <div
        style={{
          backgroundColor: isDark ? "black" : "beige",
          width: 100,
          height: 100,
        }}
      />
    </div>
  );
};

export default UseCallback2;
