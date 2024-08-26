import { useCallback, useEffect, useState } from "react";
import "./App.css";
import List from "./ListComp";

function App() {
  let [text, setText] = useState("");
  let [todos, addTodo] = useState([]);
  

  const addTodoEvent = () => {
    addTodo([
      ...todos,
      {
        todo: text,
        id: Date.now(),
        completed: false,
        time:{
          hour: new Date().getHours() % 12,
          minutes: new Date().getMinutes(),
          amOrpm: new Date().gethours >= 12 ? "AM" : "PM"
        }
        
      },
    ]);
    setText("");
  };

  const deleteTodo = (id) =>{
    console.log("delete");
    console.log(id);
  }

  return (
    <>
      <div className="flex flex-col items-center h-dvh py-9">
        <section className="container">
          <div className="mb-6 w-full">
            <label
              htmlFor="large-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
             Add your Task
            </label>
            <input
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
              type="text"
              id="large-input"
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <button
              className={`p-2 min-w-48 my-4 rounded-md ${
                text ? "bg-purple-600" : "bg-slate-600"
              }`}
              disabled={!text ? true : false}
              onClick={addTodoEvent}
            >
              add
            </button>
          </div>
          <List todo={todos} addTodos={addTodo}/>
        </section>
      </div>
    </>
  );
}

export default App;
