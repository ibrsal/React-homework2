import React, { Component } from "react";
import './style.css';
var txt;
class Input extends Component {
    constructor(props){
        super(props);
        this.state = {isChecked: false};
        this.handleChecked = this.handleChecked.bind(this); 
       }
        handleChecked () {
            console.log(this.state.isChecked);
           this.state.isChecked= !this.state.isChecked;
        this.setState({isChecked: this.state.isChecked});
        console.log(this.state.isChecked);

        if (this.state.isChecked) {
           txt = 'true'
           console.log(txt);
        } else {
          txt = 'false'
        }
      }

    componentDidMount(){
    }

    render(){
    
        return (
        <input  type="checkbox" onClick={this.handleChecked} ></input>
        );
    }
}


export default Input;
export {txt};