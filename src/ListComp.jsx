import { useState } from "react";
import "./App.css";

const List = ({ todo, addTodos, onClick }) => {
  const markAsdone = (id) => {
    const todoArray = [...todo];
    const selectedTodo = todo.findIndex((data) => data.id == id);
    todoArray[selectedTodo].completed = !todoArray[selectedTodo].completed;
    addTodos([...todoArray]);
  };

  const deleteTodo = (id) => {
    const todoArray = [...todo]
    const remTodos = todoArray.filter((data)=>data.id != id)
    console.log(remTodos);
    addTodos(remTodos)
  };

  return (
    <>
      {todo.map((data, index) => {
        return (
          <div key={index} className="flex flex-col">
            <div className="bg-purple-500 p-4 rounded-md m-2 flex items-center">
              <section className="flex justify-between items-center w-full">
                <div className="flex items-center w-full">
                  <input
                    type="checkbox"
                    onChange={() => markAsdone(data.id)}
                    className="mr-3 size-5"
                  />
                  <p
                    className={`text-lg font-bold ${
                      data.completed
                        ? "text-green-700 line-through"
                        : "text-white"
                    }`}
                  >
                    {data.todo}
                  </p>
                </div>

                  <i className="fa-solid fa-trash" onClick={()=>deleteTodo(data.id)} ></i>
                </section>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default List;
