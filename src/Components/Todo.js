import React from "react";

const Todo = ({ todo }) => {
  const { id, todo: t } = todo;
  console.log(id, t);
  return <li key={todo.id}>{todo.todo}</li>;
};

export default Todo;
