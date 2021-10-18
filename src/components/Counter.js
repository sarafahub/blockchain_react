import { useState } from "react";

function Counter() {
  const [counterValue, setValue] = useState(1);
  return (
    <>
      <div>
        <h1>
            This is My New Counter. Check It.
        </h1>
        <h2>
            Counter Value is Changing: <p> { counterValue } </p>
        </h2>
        <button onClick = {() => setValue(counterValue + 1)}>
            <h3>
                Increase Counter
            </h3>
        </button>
        <button onClick = {() => setValue(counterValue - 1)}>
            <h3>
                Decrease Counter
            </h3>
        </button>
      </div>
    </>
  );
}

export default Counter;
