// import TodoList from "./components/TodoList";
import Button from "@atlaskit/button";
import Textfield from "@atlaskit/textfield";
import {v4} from "uuid"
import React, {useCallback, useEffect, useState} from "react";
import TodoList from "./components/TodoList";
import Header from "./components/Header";

const TODO_APP_STORAGE_KEY = "TODO_APP";
function App() {
  // state: du lieu noi tai cua component hien tai
  // prop: du lieu truyen tu ben ngoai vao
  const [todoList, setTodoList] =useState([]);
  const [textInput, setTextInput] = useState("");

  useEffect(() => {
    const storagedTodoList = localStorage.getItem(TODO_APP_STORAGE_KEY);
    if (storagedTodoList) {
      setTodoList(JSON.parse(storagedTodoList));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(TODO_APP_STORAGE_KEY, JSON.stringify(todoList));
  }, [todoList]);

  const onTextInputChange = useCallback((e) => {
    setTextInput(e.target.value);
  }, []);

  const onAddBtnClick = useCallback((e) => {
    setTodoList([{id : v4(), name : textInput, isCompleted : false}, ...todoList]);
    setTextInput("");
  }, [textInput, todoList]);

  const onCheckBtnClick = useCallback((id) => {
    setTodoList((prevState) =>
      prevState.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: true } : todo
      )
    );
  }, []);

  return (
    <>
      <div className="header"><Header/></div>
      <div className="sidebar">
        this is side bar
      </div>
      <div className="content">
        <h3>Todolist</h3>
        <Textfield placeholder="Enter todo item... " elemAfterInput={
          <Button isDisabled={!textInput} appearance='primary' onClick={onAddBtnClick}>Add</Button>
        } css={{ padding: "2px 4px, 2px" }} onChange={onTextInputChange} value={textInput}
        ></Textfield>
        <TodoList todoList={todoList} onCheckBtnClick={onCheckBtnClick}/>
      </div>
      
      
    </>
  );
}

export default App;
