import { useCallback, useEffect, useState } from "react";

export const UseCallback1: React.FC = () => {
  const [number, setNumber] = useState<number>(0);
  const [toggle, setToggle] = useState<boolean>(true);

  const someFunction = useCallback(() => {
    console.log(`현재 number : ${number}`);
  }, [number]);

  useEffect(() => {
    console.log("someFunction이 변경됨");
  }, [someFunction]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(Number(e.target.value));
        }}
      />
      <button onClick={() => setToggle(!toggle)}>{toggle.toString()}</button>
      <button onClick={() => someFunction()}>Button</button>
    </div>
  );
};
