import { useCallback, useEffect, useState } from "react";
import _ from "lodash";

export const Throttle = () => {
  const [count, setCount] = useState(0);

  // Throttle 사용 시
  const throttledCountUp = useCallback(
    _.throttle(() => setCount((prevCount) => prevCount + 1), 1000),
    []
  );
  const throttledCountDown = useCallback(
    _.throttle(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000),
    []
  );

  // Throttle를 사용하지 않았을 때
  // const countUp = () => setCount(prevCount => prevCount + 1);
  // const countDown = () => setCount(prevCount => prevCount - 1);

  useEffect(() => {
    return () => {
      throttledCountUp.cancel();
      throttledCountDown.cancel();
    };
  }, []);

  return (
    <div>
      <h2>Throttle</h2>
      <button onClick={throttledCountUp}>Count Up</button>
      <button onClick={throttledCountDown}>Count Down</button>
      {/* Throttle를 사용하지 않았을 때 */}
      {/* <button onClick={countUp}>Count Up</button> */}
      {/* <button onClick={countDown}>Count Down</button> */}
      <p>{count}</p>
    </div>
  );
};
