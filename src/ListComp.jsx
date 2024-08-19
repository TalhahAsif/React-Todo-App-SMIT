import "./App.css";

const List = ( {todo} ) => {
  // console.log(props);
  return (
    <>
      <div className="bg-purple-500">
        {todo.map((data, index) => {
          return (
            <div key={index}>
              <p>{data}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default List;
