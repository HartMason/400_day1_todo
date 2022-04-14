import React from "react";

const TodoInput = (props) => {
  console.log(props);
  return (
    <section>
      <label htmlFor="todos">ToDos</label>
      <input type="todos" onChange={props.handleChange} value={props.todo} />
      <button onClick={props.handleClick}>Submit</button>
    </section>
  );
};

export default TodoInput;
