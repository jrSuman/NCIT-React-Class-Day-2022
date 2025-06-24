import { useState } from "react";
import TodoEdit from "./TodoEdit";

const Todo = () => {
  // let value = 'developer'
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState(["test one ", "test 2"]);

  const addTodo = (event) => {
    event.preventDefault(); //to prevent page reload

    const newTodos = [...todos, value];

    // const newTodos = todos
    // todos.push(value)

    setTodos(newTodos);

    //to Clear input value
    setValue("");
  };

  const handleDelete = (index) => {
    // console.log("handle delete", index)
    let newArr = todos.filter((_, i) => i !== index);
    // newArr.slice(index, 1)
    // console.log("new arr", newArr)
    setTodos(newArr)
  }

  const onUpdate = (e, i) => {
    console.log("patent update,",e, i);
    let newArr = todos;
    console.log("new arr", newArr)

    newArr[i] = e;

    console.log('new arr result', newArr)
    setTodos([...newArr])
    // console.log('todos', todos)


    // newArr[i] = newArr;
    // console.log("newArr", newArr)
    // setTodos([...newArr])
  }

  return (
    <div className="p-4 bg-white h-screen ">
      <h4>Todos</h4>
      <form
        action=""
        className="border border-gray-300 p-4 bg-gray-50 rounded-md gap-2 flex max-w-lg"
      >
        <input
          type="text"
          className="border rounded w-full border-gray-400"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white rounded px-3 text-nowrap py-2"
          onClick={addTodo}
        >
          Add Todo
        </button>
      </form>

      <div className="grid max-w-lg mt-4">
        <ol className="">
          {todos.map((item, index) => (
            <li key={index}>
              <div className="bg-gray-100 border border-gray-200 rounded mb-2 p-2 flex items-center gap-2 justify-between">
                {/* <input type="checkbox" /> */}
                {/* <span>{item}</span> */}
                <TodoEdit data={item} onUpdate={(e) => onUpdate(e, index)}/>
                <button 
                className="p-2 bg-red-500 text-white rounded" 
                onClick={() => handleDelete(index)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-trash"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                  </svg>
                </button>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Todo;
