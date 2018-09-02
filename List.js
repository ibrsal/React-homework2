import React, { Component } from "react";
import ListItems from "./ListItems";


class List extends Component {
  render() {
   // console.log(this.props);
    return (
      <ul>
        {this.props.items.map(item => {
          return <ListItems text={item} />;
        })}
      </ul>
    );
  }
}

export default List;