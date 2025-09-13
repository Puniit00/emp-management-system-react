import React from "react";

const TodoItem = (props) => {
  return (
    <div>
      <h4 className="text-center">{props.todo.title}</h4>
      <p className="text-center">{props.todo.desc}</p>
      <div className="d-flex justify-content-center pb-3">
        <button className="btn btn-sm btn-danger" onClick={()=>{props.onDelete(props.todo)}}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
