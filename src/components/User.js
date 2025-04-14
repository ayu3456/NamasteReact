import { useEffect, useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);

  useEffect(()=>{
    // api calls 

    const timer = setInterval(()=>{
        //console.log("Namaste React Op")
    },1000);

    return () =>{
        clearInterval(timer);
       //console.log("UseEffect Return");
    }

    




  },[count])

  async function getUserInfo(){

    //const data = await fetch("https://api.github.com/users/USERNAME")

  }

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
