import React from 'react';
//import components
import Todo from './Todo';

const TodoList = ({ filteredTodos, setTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map(filteredTodo => (
          <Todo
            setTodos={setTodos}
            todos={filteredTodos}
            key={filteredTodo.id}
            todo={filteredTodo}
            text={filteredTodo.text}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
