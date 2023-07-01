import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{
   constructor(props){
    super(props);
    // console.log("Parent Construtor");
   }

   componentDidMount(){
    // console.log("Parent Component did mount");
   }

   render(){
    //console.log("Parent Render");
    return (
      <div>
          <h1>About Us</h1>
          <p>Hello, This is  Clone App</p>
          <UserClass name={"First "} location={"India"} />
         
      </div>
    );
   }

}


export default About;