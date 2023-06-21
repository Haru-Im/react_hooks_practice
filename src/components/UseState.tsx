// 실습 : 버튼을 누르면 countup, countdown하는 앱
// reset 버튼을 추가해 사용자가 클릭 시 카운터를 0으로 초기화
// typescript 사용

import { useState } from "react";

export const UseState: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const handleCountUp: React.MouseEventHandler<HTMLButtonElement> = () =>
    setCount((prev) => prev + 1);
  const handleCountDown: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (count === 0) return;
    setCount((prev) => prev - 1);
  };
  const handleReset: React.MouseEventHandler<HTMLButtonElement> = () =>
    setCount(0);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>this is total {count}</h1>
      <div>
        <button onClick={handleCountDown}>CountDown</button>
        <button onClick={handleCountUp}>CountUp</button>
      </div>
      <button style={{ marginTop: 15 }} onClick={handleReset}>
        RESET
      </button>
    </div>
  );
};
