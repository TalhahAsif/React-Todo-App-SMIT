import { useState } from "react";
import "./App.css";
import Btn from "./Component/Btn";
import { useInsertionEffect } from "react";

const List = ({ todo, addTodos }) => {
  const [filter, setfilter] = useState("all");

  const markAsdone = (id) => {
    const todoArray = [...todo];
    const selectedTodo = todo.findIndex((data) => data.id == id);
    todoArray[selectedTodo].completed = !todoArray[selectedTodo].completed;
    addTodos([...todoArray]);
  };

  const deleteTodo = (id) => {
    console.log(id);
    const todoArray = [...todo];
    const remTodos = todoArray.filter((data) => data.id != id);
    console.log(remTodos);
    addTodos(remTodos);
  };

  const filteredTodo = todo.filter((data) => {
    if (filter == "all") {
      return true;
    }
    if (filter == "completed" && data.completed) {
      return true;
    }

    if (filter == "Uncompleted" && !data.completed) {
      return true;
    }
  });

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <section className="flex flex-wrap gap-6 items-center justify-center my-10">
          <Btn text="All" setfilter={setfilter} filter={filter} />
        </section>
        {!filteredTodo.length ? (
          <div>No Task available</div>
        ) : (
          filteredTodo.map((data, index) => {
            return (
              <div key={index} className="flex flex-col w-full">
                <div className="bg-purple-500 p-4 rounded-md m-2 flex items-center">
                  <section className="flex justify-between items-center w-full">
                    <div className="flex items-center w-full">
                      <input

                        type="checkbox"
                        onChange={() => markAsdone(data.id)}
                        className="mr-3 size-5"
                      />
                      <div className="flex items-center justify-between w-full">
                        <p
                          className={`text-lg font-bold ${
                            data.completed
                              ? "text-green-700 line-through"
                              : "text-white"
                          }`}
                        >
                          {data.todo}
                        </p>
                        <p className="text-sm mr-6">
                          {data.time.hour}:{data.time.minutes}
                          {data.time.amOrpm}
                        </p>
                      </div>
                    </div>

                    <i
                      className="fa-solid fa-trash hover:bg-red-600"
                      onClick={() => deleteTodo(data.id)}
                    ></i>
                  </section>
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default List;
