import "./App.css";
import React from "react";

class App extends React.Component {
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
        <section>
          <label htmlFor="todos">ToDos</label>
          <input
            type="todos"
            onChange={this.handleChange}
            value={this.state.todo}
          />
          <button onClick={this.handleClick}>Submit</button>
          <ul>
            {this.state.todos.map((todo, index) => {
              return (
                <div>
                  <li key={todo.id}>{todo.todo}</li>
                  <button onClick={(evt) => this.handleDelete(evt, index)}>
                    Delete
                  </button>
                </div>
              );
            })}
          </ul>
        </section>
      </div>
    );
  }
}

export default App;
