import React, {Component} from "react";

class Card extends Component{
    render(){
        return(<p>Hello from {this.props.name} components</p>)
    }
}
export default Card;