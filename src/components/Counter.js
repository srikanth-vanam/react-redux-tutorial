import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const counterIsshown=useSelector(state=>state.counter.isShown);
  const dispatch=useDispatch();
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleHandler())
  };
  const incrementHandler=()=>{
    dispatch(counterActions.increment())
  }

  const decrementHandler=()=>{
    dispatch(counterActions.decrement())
  }
  const incrementBy5Handler=()=>{
    dispatch(counterActions.incrementBy5(5))
  }

  const decrementBy5Handler=()=>{
    dispatch(counterActions.decrementBy5(5))
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {counterIsshown && <div className={classes.value}>{counter}</div>}
    <div>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
    </div>
    <div>
      <button onClick={incrementBy5Handler}>Increment By 5</button>
      <button onClick={decrementBy5Handler}>Decrement By 5</button>
    </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
