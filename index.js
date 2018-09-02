import React from 'react';
import ReactDOM from 'react-dom';
import List from "./List";
import './style.css';
const root=  document.getElementById("root");
function App (){
    return (
        <div>
Hello world
<List items={["* Get out of bed, Wed Sep 13 2017",
      "* Brush teeth , Thu Sep 14 2017",
      "* Eat breakfast , Fri Sep 15 2017"]} />

        </div>
    )

};
ReactDOM.render(<App />,root);
