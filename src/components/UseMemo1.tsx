import { ChangeEvent, useMemo, useState } from "react";

// delay 만들기 위해 CPU 많이 사용하는 함수 생성
const hardCalculator = (n: number) => {
  console.log("어려운 계산 🥵");
  for (let i = 0; i < 999999999; i++) {}
  return n + 10000;
};

const easyCalculator = (n: number) => {
  console.log("쉬운 계산 😄");
  return n + 1;
};

export const UseMemo1: React.FC = () => {
  const [hardNumber, setHardNumber] = useState<number>(0);
  const [easyNumber, setEasyNumber] = useState<number>(0);

  const handleHDChange = (event: ChangeEvent<HTMLInputElement>) => {
    setHardNumber(Number(event.target.value));
  };

  const handleEZChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEasyNumber(Number(event.target.value));
  };

  const hardSum = useMemo<number>(() => {
    return hardCalculator(hardNumber);
  }, [hardNumber]);

  return (
    <div>
      <div>
        <h1>짱 어려운 계산기</h1>
        <input value={hardNumber} type="number" onChange={handleHDChange} />
        <span>+10000 = {hardSum}</span>
      </div>
      <div>
        <h1>짱 쉬운 계산기</h1>
        <input value={easyNumber} type="number" onChange={handleEZChange} />
        <span>+1 = {easyCalculator(easyNumber)}</span>
      </div>
    </div>
  );
};
