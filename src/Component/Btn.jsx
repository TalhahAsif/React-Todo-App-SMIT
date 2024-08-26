import React from "react";

const Btn = ({ filter, setfilter }) => {
  return (
    <>
      <div>
        <button
          text="All"
          className={`py-2 px-4 ${
            filter == "all" ? "bg-slate-800" : "bg-slate-700"
          } rounded-lg mx-3`}
          onClick={() => setfilter("all")}
        >
          All
        </button>
        <button
          text="Completed"
          className={`py-2 px-4 ${
            filter == "completed" ? "bg-slate-800" : "bg-slate-700"
          } rounded-lg mx-3`}
          onClick={() => setfilter("completed")}
        >
          Completed
        </button>
        <button
          text="Not Completed"
          className={`py-2 px-4 ${
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
