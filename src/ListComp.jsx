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
      return true
    }

    if (filter == "Uncompleted" && !data.completed) {
      return true
    }
  });

  console.log(filteredTodo, "filterdtodo");

  return (
    <>
      <section className="flex gap-6 items-center justify-center my-10">
        <Btn text="All" onClick={() => setfilter("all")} filter={filter} />
        <Btn text="Completed" onClick={() => setfilter("completed")} />
        <Btn text="Not Completed" onClick={() => setfilter("Uncompleted")} />
      </section>
      {!filteredTodo.length ? (
        <div>No todo available</div>
      ) : (
        filteredTodo.map((data, index) => {
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
    </>
  );
};

export default List;
