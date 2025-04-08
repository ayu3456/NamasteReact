import { useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);

  // we can create as many state variable as we want to

  return (
    <div className="user-card">
      <h1>Count = {count}</h1>
      <h2>Name: {props.name}</h2>
      <h3>Location: Dehradun</h3>
      <h4>Contact: @ayush</h4>

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
    </div>
  );
};

export default User;
