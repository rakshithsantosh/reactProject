// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { decrement, increment } from "../utils/counter";

// const Text = () => {
//   //Selector

//   //subscribing to the store using our selector
//   const cartItems = useSelector((store) => store.cart.items);
//   const counter = useSelector((store) => store.counter.count);

//   const dispatch = useDispatch();

//   return (
//     <>
//       <div>{cartItems}</div>
//       <div>{counter}</div>
//       <button
//         onClick={() => {
//           //dispatch an action
//           dispatch(increment());
//         }}
//       >
//         +
//       </button>
//       <button onClick={dispatch(decrement())}>-</button>
//     </>
//   );
// };

// export default Text;
