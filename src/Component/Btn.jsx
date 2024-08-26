import React from "react";

const Btn = ({ filter, setfilter }) => {
  return (
    <>
      <div className="flex flex-wrap justify-center">
        <button
          text="All"
          className={`py-2 px-4 m-1 ${
            filter == "all" ? "bg-slate-800" : "bg-slate-700"
          } rounded-lg mx-3`}
          onClick={() => setfilter("all")}
        >
          All
        </button>
        <button
          text="Completed"
          className={`py-2 px-4 m-1 ${
            filter == "completed" ? "bg-slate-800" : "bg-slate-700"
          } rounded-lg mx-3`}
          onClick={() => setfilter("completed")}
        >
          Completed
        </button>
        <button
          text="Not Completed"
          className={`py-2 px-4 m-1 ${
            filter == "Uncompleted" ? "bg-slate-800" : "bg-slate-700"
          } rounded-lg mx-3`}
          onClick={() => setfilter("Uncompleted")}
        >
          Not Completed
        </button>
      </div>
    </>
  );
};

export default Btn;
