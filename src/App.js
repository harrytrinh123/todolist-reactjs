// import TodoList from "./components/TodoList";
import Button from "@atlaskit/button";
import Textfield from "@atlaskit/textfield";
// eslint-disable-next-line
import React, {Component, useState} from "react";
import TodoList from "./components/TodoList";
function App() {
  // state: du lieu noi tai cua component hien tai
  // prop: du lieu truyen tu ben ngoai vao
  const [todoList, setTodoList] =useState([]);
  const [textInput, setTextInput] = useState("");

  const onTextInputChange = (e) => {
    setTextInput(e.target.value);
  }

  const onAddBtnClick = (e) => {
    setTodoList([...todoList, {id : '', name : textInput, isCompleted : false}]);
  }

  return (
    <>
      <h3>Todolist</h3>
      <Textfield placeholder="Enter todo item: " elemAfterInput={
        <Button isDisabled={true} appearance='primary' onClick={onAddBtnClick}>Add</Button>
      } css={{ padding: "2px 4px, 2px" }} onChange={onTextInputChange}
      ></Textfield>
      <TodoList/>
    </>
  );
}

export default App;
