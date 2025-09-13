import React from "react";
import TodoItem from "./TodoItem";

const Todos = (props) => {
  return (
    <>
      <h3 className="text-center my-3">Todos List</h3>
      {props.todos.length === 0 ? (
        <div className="text-center my-5">
          <span className="badge bg-secondary fs-5 p-3">
            No Todos to display
          </span>
        </div>
      ) : (
        props.todos.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.sno}
            onDelete={props.onDelete}
          ></TodoItem>
        ))
      )}
    </>
  );
};

export default Todos;
