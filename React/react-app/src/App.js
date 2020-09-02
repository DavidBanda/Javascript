import React, { useState, useEffect } from 'react';
import './App.css';

// Importing components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  // State stuff
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  //Run once when the app start
  useEffect(() => {
    getLocalTodos();
  }, []);

  // Use effect
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  // Functions
  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  //Save to local
  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify([]));
  };

  return (
    <div className="App">
      <header>
        <h1>Banda's Todo List </h1>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
      />
      <TodoList filteredTodos={filteredTodos} setTodos={setTodos} />
    </div>
  );
}

export default App;
