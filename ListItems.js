import React from "react";
import Input  from "./Input";
import {txt} from "./Input";
import './style.css';
console.log(txt);

class ListItems extends React.Component {
  render() {
    return <li className ={txt ? "under":""}><Input /> {this.props.text}</li>;
  }
}

export default ListItems;