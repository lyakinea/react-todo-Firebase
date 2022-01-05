import { FormControl } from 'react-bootstrap';
import "./index.css";

const CustomInput = (props) => {
  
    return (
            <FormControl placeholder="Add your new Todo" className='fs-4' onKeyDown={props.onKeyDown} onChange = {props.onChange} value = {props.value}/>
        )
}

/*export default CustomInput;
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import "./index.css";
const CustomInput = () => {
  const [tasks, setTasks] = useState([]);
  const [inputVal, setInputVal] = useState("");

  const handleChange = (val) => {
    setInputVal(val);
  };
  const handleClick = () => {
    if (!inputVal) return;
    setTasks([...tasks, inputVal]);
    setInputVal("");
  };
  const handleItemClick = (index) => {
    console.log("Clicks element n : ", index);

    setTasks(tasks.filter((item, itemIndex) => index !== itemIndex));
  };

  return (
    <div>
      <input
        placeholder="Add your new todo"
        onChange={(e) => handleChange(e.target.value)}
        value={inputVal}
      />
      <Button onClick={handleClick} variant="primary">
        add
      </Button>
      {tasks.map((item, index) => (
        <p key={index}
        key={index} onClick={() => handleItemClick(index)}>{item}</p>
      ))}
    </div>
  );
};
*/

export default CustomInput;