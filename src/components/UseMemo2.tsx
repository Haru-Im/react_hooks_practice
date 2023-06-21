import { ChangeEvent, useEffect, useMemo, useState } from "react";

export const UseMemo2: React.FC = () => {
  const [number, setNumber] = useState<number>(0);
  const [isKorea, setIsKorea] = useState<boolean>(true);

  const handleNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNumber(Number(event.target.value));
  };

  const toggleCountry = () => {
    setIsKorea((prev) => !prev);
  };

  const location = useMemo(() => {
    return {
      country: isKorea ? "한국" : "외국",
    };
  }, [isKorea]);

  // const location = {
  //   country: isKorea ? "한국" : "외국",
  // };

  useEffect(() => {
    console.log("useEffect 실행!");
  }, [location]);

  return (
    <div>
      <h1>하루에 몇 끼나 먹나요? 🐷</h1>
      <input type="number" value={number} onChange={handleNumberChange} />
      <h1>어느 나라에 있나요? : {location.country}</h1>
      <button onClick={toggleCountry}>비행기 타자! ✈️</button>
    </div>
  );
};
