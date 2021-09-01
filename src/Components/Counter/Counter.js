import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, getAPI, postAPI } from "../../Store/action/home";

function Counter() {
  var counter = useSelector((state) => state.home.counter);
  var data = useSelector((state) => state.home.data);
  const dispatch = useDispatch()

  var body = {
    id: 1,
    name: 'Hamza'
  }

  const addCounter = () => {
    dispatch(add())
  };

  const get = () => {
    dispatch(getAPI())
    console.log(data);
  };
  const post = (props) => {
    dispatch(postAPI(props))
  };
  
  return (
    <div>
      <p>{counter}</p>
      <p>{data?.id}</p>
      {
        data?
        console.log(Object.keys(data))
      :null}


      <button onClick={addCounter}>Add</button><br></br><br></br><br></br>
      <button onClick={get}>GET API</button><br></br><br></br><br></br>
      <button onClick={()=>{post(body)}}>POST DATA</button>
    </div>
  );
}

export default Counter;
