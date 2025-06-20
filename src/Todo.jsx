import { useState } from "react";

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

  return (
    <div className="p-4 bg-white h-screen ">
        <h4>Todos</h4>
      <form action="" className="border border-gray-300 p-4 bg-gray-50 rounded-md gap-2 flex max-w-lg">
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
            <li>
              <div className="bg-gray-100 border border-gray-200 rounded mb-2 p-2 flex items-center gap-2">
                <input type="checkbox" />
                <span>
                  {item}
                </span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Todo;
