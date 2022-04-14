import React, { Component } from "react";
import Todo from "./Todo";
import TodoInput from "./TodoInput";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isClicked: false,
      todos: [
        { id: "1", todo: "Wash Car" },
        { id: "2", todo: "Clean Room" },
      ],
      text: "",
    };
  }

  componentDidMount() {
    console.log("Mounted");
    console.log(this.state.todos);
  }

  componentDidUpdate() {
    console.log("updated", this.state.todos);
  }

  handleClick = (event) => {
    const todo = this.state.todo;
    console.log(todo);
    this.setState({
      todos: [...this.state.todos, { id: this.state.todos.length + 1, todo }],
      todo: "",
      isClicked: !this.state.isClicked,
    });
    console.log(this.state.isClicked);
  };

  handleChange = (event) => {
    this.setState({
      todo: event.target.value,
    });
    console.log(this.state.todo);
  };

  handleDelete = (event, index) => {
    console.log(index);
    let objectCopy = [...this.state.todos];
    objectCopy.splice(index, 1);
    this.setState({ todos: [...objectCopy] });
  };

  render() {
    return (
      <div className="app">
        <TodoInput
          handleClick={this.handleClick}
          handleChange={this.handleChange}
          todo={this.state.todo}
        />
        <ul>
          {this.state.todos.map((todo, index) => {
            return (
              <div>
                <Todo todo={todo} />
                <button onClick={(evt) => this.handleDelete(evt, index)}>
                  Delete
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default TodoList;
