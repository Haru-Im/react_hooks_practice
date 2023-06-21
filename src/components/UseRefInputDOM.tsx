import { ChangeEvent, useRef, useState } from "react";

const UseRefInputDOM: React.FC = () => {
  console.log("rerender");

  const [textState, setTextState] = useState<string>("");

  const inputRef = useRef<HTMLInputElement>(null);
  const textValueRef = useRef<string>("");

  const storeInRef = (e: ChangeEvent<HTMLInputElement>) => {
    textValueRef.current = e.target.value;
  };

  const storeInState = (e: ChangeEvent<HTMLInputElement>) => {
    setTextState(e.target.value);
  };

  return (
    <div>
      <input onChange={storeInState} ref={inputRef} type="text" />
      {/* <input onChange={storeInRef} ref={inputRef} type="text" /> */}
      <button>Log input</button>
    </div>
  );
};

export default UseRefInputDOM;
