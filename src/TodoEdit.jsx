// function TodoEdit(){
//   return(
//     <span>TodoEdit</span>
//   )
// }

  // Object Destructuring example
  // const user = {
  //   name: 'Suman Sunuwar',
  //   age: 10,
  //   rollno: 11,
  // }
  // const {name, age, rollno} = user

import { useState } from "react";

const TodoEdit = (props) => {
  console.log("TodoEdit", props);

  const { data, onUpdate } = props;
  const [isVisible, setIsVisible] = useState(false);
  const [value, setValue] = useState(data);

  const handleChange = (text) => {
    console.log("text chagne", text)
    setValue(text)
  }

  const handleUpdate = () => {
    console.log("update child")
    onUpdate(value)
  }

  return (
    <div className="">
      {isVisible ? (
        <div className="">
          <input
            type="text"
            className="border"
            value={value}
            onChange={(e) => handleChange(e.target.value)}
          />
          <button className="bg-blue-500 text-white" onClick={handleUpdate}>Update</button>
          <button onClick={() => setIsVisible(false)}>Close</button>
        </div>
      ) : (
        <div className="">
          <span>{data}</span>
          <button onClick={() => setIsVisible(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-pencil-square"
              viewBox="0 0 16 16"
            >
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
              <path
                fill-rule="evenodd"
                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default TodoEdit;
