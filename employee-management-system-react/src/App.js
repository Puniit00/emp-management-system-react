import { useState } from "react";
import Footer from "./MyComponents/Footer";
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import AddTodo from "./MyComponents/AddTodo";
import { Routes, Route } from "react-router-dom";

function App() {
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to the market to buy food",
    },
    {
      sno: 2,
      title: "Go to the mall",
      desc: "You need to go to the mall to buy clothes",
    },
    {
      sno: 3,
      title: "Go to the school",
      desc: "You need to go to the school to learn",
    },
  ]);

  const onDelete = (todo) => {
    setTodos(todos.filter((e) => e !== todo));
  };

  const addTodo = (title, desc) => {
    let sno = todos.length > 0 ? todos[todos.length - 1].sno + 1 : 1;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
  };

  return (
    <>
      <Header title="REACT APP" isDisable={true} />
      <Routes>
        <Route
          path="/"
          element={<Todos todos={todos} onDelete={onDelete} />}
        />
        <Route
          path="/addTodo"
          element={<AddTodo addTodo={addTodo} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
