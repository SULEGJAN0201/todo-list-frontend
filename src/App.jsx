import React, { useState, useEffect } from 'react';
import { TodoService } from './services/TodoService';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const fetchedTodos = await TodoService.getAll();
      setTodos(fetchedTodos);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const handleAddTodo = async (title) => {
    try {
      const newTodo = await TodoService.add(title);
      setTodos([...todos, newTodo]);
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  const handleToggleTodo = async (todo) => {
    try {
      await TodoService.toggle(todo);
      setTodos(todos.map(t => t.id === todo.id ? { ...t, isComplete: !t.isComplete } : t));
    } catch (error) {
      console.error('Error toggling todo:', error);
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await TodoService.delete(id);
      setTodos(todos.filter(t => t.id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <AddTodo onAdd={handleAddTodo} />
      <TodoList 
        todos={todos} 
        onToggle={handleToggleTodo} 
        onDelete={handleDeleteTodo} 
      />
    </div>
  );
};

export default App;