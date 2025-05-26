import { useState } from "react";

export const TodoForm = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState({});

  const handleInputChange = (value) => {
    setInputValue({ id: value, content: value, checked: false });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onAddTodo(inputValue);
    setInputValue({ id: "", content: "", checked: false });
  };
  return (
    <section>
      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            type="text"
            autoComplete="off"
            value={inputValue.content}
            onChange={(event) => handleInputChange(event.target.value)}
          />
          <button className="task-btn" type="submit">Add Tasks</button>
        </div>
      </form>
    </section>
  );
};
