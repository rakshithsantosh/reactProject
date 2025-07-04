import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [amount, setAmount] = React.useState(0);
  const increvalue = Number(amount) || 0;
  const resetValue = () => {
    setAmount(0);
    dispatch(reset());
  };
  return (
    <div>
      <p>{count}</p>

      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <div>
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button
          onClick={() => {
            dispatch(incrementByAmount(increvalue));
          }}
        >
          incrementByAmount
        </button>
      </div>
      <button onClick={() => resetValue()}>reset</button>
    </div>
  );
};

export default Counter;
