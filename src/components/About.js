import React from "react";
import UserClass from "./UserClass";
import User from "./User";
import UserContext from "../../utils/UserContext";
import { data } from "browserslist";

// fetch the data from github api and show the data over here.

// first we will create a user component (functional) then convert it to class based component.

class About extends React.Component {
  constructor(props) {
    super(props);

    //console.log("parent constructor is called");
  }

  componentDidMount() {
    //console.log("Parent component did mount")
  }

  render() {
    //console.log("parent render is called");
    return (
      <div>
        <h1>About US</h1>
        <div>
          <UserContext.Consumer>
            {({loggedInUser}) => <h1 className="text-xl font-bold">{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        <h2>This is Namaste React Web Series</h2>
        //
        <UserClass />
        <User />
      </div>
    );
  }
}

export default About;
