import React from "react";

class UserClass extends React.Component {
   
    //propos use krne ke liye we have to call constructor and super
    constructor(props){
       super(props); //imp
      // console.log(this.props.name +  " Child Construtor");
     
      //state variable during that time.
       this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default",
            },
       };
    }

    async componentDidMount(){
       // console.log(this.props.name + " Child Component did mount");
       const data = await fetch("https://api.github.com/users/priyansh74");
       const json = await data.json();

       this.setState({
        userInfo:json,
       });
        
       console.log(json);
    }
    componentDidUpdate(){
        console.log("Component Did update");
    }

    componentWillUnmount(){
        console.log("Component will unmount");
    }

    render(){

        //you can use this.props.name but better deconstruct it
        const{ name, location, avatar_url} = this.state.userInfo;
       
       // console.log(this.props.name + " CHild render");

        return (
        <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @priyaannsh</h4>
       </div>
    );
    }
}
export default UserClass;