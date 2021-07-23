import React from "react";
import ReactDOM from "react-dom";

//Normal function

// function NewApp() {
//   return <div>Hola a todos</div>;
// }

//Arrow Function
const App = () => {
  return <div>Hola a todos</div>;
};

ReactDOM.render(<App />, document.getElementById("root"));
