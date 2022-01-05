import React, { useState } from "react";

import {Container,Stack} from 'react-bootstrap';

import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import Task from "../../components/Task";
import TodoFooter from '../../components/TodoFooter';

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Box = () => {

  const [value, setValue] = useState('')
  const [tasks, setTasks] = useState([]);
  const [num, setNum] = useState(0)

  
  const handleChange = (e) =>{
    setValue(e.target.value)
  }
  

  const handleClick = () => {
    if (!value) return;
    setTasks([...tasks, value]);
    setValue("");
    setNum(num + 1);
  }
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (!value) return;
    setTasks([...tasks, value]);
    setValue("");
    setNum(num + 1);
    }
  }

  const handleClickTrash = (index) => {
      setTasks(tasks.filter((unused_item, itemIndex) => index !== itemIndex));
      setNum(num - 1)
  }
  const handleClickClearAll = () => {
    setTasks([]);
    setNum(0)
  }

  
  
  

  return (
    <Container className="box bg-light p-4 ">
      <h1>TODO APP</h1>
      <Stack direction="horizontal" className='my-4' gap={3}>
        <CustomInput onChange = {handleChange} onKeyDown={handleKeyDown} value={value}/>
        <CustomButton color='#8f4be8' border = '0'class = 'fs-3 px-3' onClick = {handleClick} content = {<FontAwesomeIcon icon={faPlus} />}/>
      </Stack>

      <Stack gap={2}>
      {tasks.map((item, index) => (
          <Task key={index} content = {item} onClick = {() => handleClickTrash(index)}/> //why?
        ))}
      </Stack>

      
      <TodoFooter len = {num} onClick={handleClickClearAll}/>
      
      
    </Container>
    
  );
};

export default Box;
