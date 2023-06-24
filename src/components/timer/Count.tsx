import { useEffect, useState } from "react";
import _ from "lodash";

export const Count = () => {
  const [count, setCount] = useState(0);

  // Debounce 사용 시
  const debouncedCountUp = _.debounce(
    () => setCount((prevCount) => prevCount + 1),
    300
  );
  const debouncedCountDown = _.debounce(
    () => setCount((prevCount) => prevCount - 1),
    300
  );

  // Debounce를 사용하지 않았을 때
  // const countUp = () => setCount((prevCount) => prevCount + 1);
  // const countDown = () => setCount((prevCount) => prevCount - 1);

  useEffect(() => {
    return () => {
      debouncedCountUp.cancel();
      debouncedCountDown.cancel();
    };
  }, []);

  return (
    <div>
      {/* Debounce를 사용했을 때 */}
      <button onClick={debouncedCountUp}>Count Up</button>
      <button onClick={debouncedCountDown}>Count Down</button>

      {/* Debounce를 사용하지 않았을 때 */}
      {/* <button onClick={countUp}>Count Up</button>
      <button onClick={countDown}>Count Down</button> */}
      <p>{count}</p>
    </div>
  );
};
