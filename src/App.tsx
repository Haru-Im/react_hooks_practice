import { UseCallback1 } from "./components/UseCallback1";
import UseCallback2 from "./components/UseCallback2";
import { UseMemo1 } from "./components/UseMemo1";
import UseMemo2 from "./components/UseMemo2";
import { UseRefDOM } from "./components/UseRefDOM";
import UseRefInputDOM from "./components/UseRefInputDOM";
import { Count, Throttle } from "./components/timer";

const App: React.FC = () => {
  return (
    <>
      <Count />
      <Throttle />
    </>
  );
};

export default App;
