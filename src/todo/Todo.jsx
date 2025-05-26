import { useState } from "react";
import "./Todo.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoLists";
import { TodoDate } from "./TodoDate";
import {
  getLocalStorageTodoData,
  setLocalStorageTodoData,
} from "./TodoLocalStorage";

const Todo = () => {
  const [task, setTask] = useState(() => getLocalStorageTodoData());

  const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;

    const ifTodoContentMatch = task.find(
      (curEle) => curEle.content === content
    );
    if (ifTodoContentMatch) return;

    setTask((pervTask) => [...pervTask, { id, content, checked }]);
  };

  setLocalStorageTodoData(task);

  const handleDeleteTodo = (value) => {
    const updatedTask = task.filter((curEle) => curEle.content !== value);
    setTask(updatedTask);
  };

  const handleClearTodo = () => {
    setTask([]);
  };

  const handleCheckedTodo = (content) => {
    const updatedTask = task.map((curEle) => {
      if (curEle.content === content) {
        return { ...curEle, checked: !curEle.checked };
      } else {
        return curEle;
      }
    });
    setTask(updatedTask);
  };

  return (
    <section className="App">
      <header>
        <h1>Todo Lists</h1>
        <TodoDate />
      </header>
      <TodoForm onAddTodo={handleFormSubmit} />
      <section className="myUnOrdList">
        <ul>
          {task.length > 0 &&
            task.map((curEle, index) => {
              console.log(index);
              return (
                <TodoList
                  key={curEle.key}
                  data={curEle.content}
                  checked={curEle.checked}
                  onHandleDeleteTodo={handleDeleteTodo}
                  onHandleCheckedTodo={handleCheckedTodo}
                />
              );
            })}
        </ul>
      </section>
      <section className="clear-btn" onClick={handleClearTodo}>
        Clear All
      </section>
    </section>
  );
};

export default Todo;
