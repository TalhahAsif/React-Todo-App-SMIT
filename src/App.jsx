import { useState } from "react";
import "./App.css";
import List from "./ListComp";

function App() {
  let [text, setText] = useState("");
  let [todos, addTodo] = useState([]);

  return (
    <>
      <div className="flex flex-col items-center h-dvh py-9">
        <section className="container">
          <div class="mb-6 w-full">
            <label
              for="large-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              ADD TODO
            </label>
            <input
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
              type="text"
              id="large-input"
              class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <button
              className="p-2 min-w-48 my-4 rounded-md bg-purple-600"
              onClick={() => {
                addTodo([...todos, text]);
                console.log(todos);
                setText("")
              }}
            >
              add
            </button>
          </div>
          <List todo={todos} />
        </section>
      </div>
    </>
  );
}

export default App;
