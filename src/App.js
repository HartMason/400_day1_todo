import "./App.css";
import React from "react";
import TodoList from "./Components/TodoList";
import DisplayList from "./Components/DisplayList";

class App extends React.Component {
  render() {
    return (
      <div>
        <TodoList />
        <DisplayList />
      </div>
    );
  }
}

export default App;
