import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    console.log(this.props.name + "Child constructor is called");
  }

  // this is best place of recieve props and make local state variables using this.state. . it contains all the state variable in single object.

  componentDidMount(){
    console.log(this.props.name + "Child Component did mount"); 

    // render method is called -> api hit and fill the data. 

    // Api calls are made here. 
  }

  render() {
    console.log( this.props.name + "Child render called");
    const { name, location } = this.props;

    const { count } = this.state;

    return (
      <div className="user-card">
        <h1>count:{count}</h1>
        <button
          onClick={() => {
            // this.state.count = this.state.count + 1 // wrong way of doing this.

            // Never update state variable directly . React gives you function to update state variable directly.

            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase
        </button>

        <h2>Name:{name}</h2>
        <h3>Location:{location}</h3>
        <h4>Contact: @ayush</h4>
      </div>
    );
  }
}
// This is the way to tell react that this is the react component.

// we will have render method to return a piece of jsx which will render on the UI.

// this class has a contructor and this contructor will recieve the props.
// the state object has multiple variables the setState function only update the varibale which are passed inside the setState function.  It find the diff btw the two objects.

export default UserClass;
