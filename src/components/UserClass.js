import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy User",
        location: "Default",
        avatar_url: "Dummy",
      },
    };

    // console.log(this.props.name + "Child constructor is called");
  }

  // this is best place of recieve props and make local state variables using this.state. . it contains all the state variable in single object.

  async componentDidMount() {
    //console.log(this.props.name + "Child Component did mount");

    // render method is called -> api hit and fill the data.

    // Api calls are made here. for making api call you have to make this async function

    //const data = await fetch("https://api.github.com/users/ayu3456");

    //const json = await data.json();

    //console.log(json);

    // this.setState({
    //   userInfo: json,
    // });

    this.timer = setInterval(()=>{
        console.log("Interval called")
    },1000);

    



  }

  componentDidUpdate(prevProps,prevState){
    

   
    console.log("Component did update");
    
  }

  componentWillUnmount(){
    console.log("Component will unmount");
    // clear interval in this. 
    // this is shared between all the functions of the class. 

    clearInterval(this.timer);
  }

  render() {
    //console.log(this.props.name + "Child render called");
    //const { name, location } = this.props;

    const { name, location, avatar_url } = this.state.userInfo;

    return (

      <div className="user-card">

        <h2>Name:{name}</h2>
        <h3>Location:{location}</h3>
        <img src={avatar_url}></img>

      </div>
    );
  }
}

// This is the way to tell react that this is the react component.
// we will have render method to return a piece of jsx which will render on the UI.
// this class has a contructor and this contructor will recieve the props.
// the state object has multiple variables the setState function only update the varible 
//which are passed inside the setState function.  It find the diff btw the two objects. 


export default UserClass;
