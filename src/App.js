import logo from './logo.svg';
import './App.css';
import AddTodoTask from './components/TODO/AddTodoTask';
import TodoList from './components/TODO/TodoList'
import {useState} from 'react';
function App() {

  const [todoList, setTodoList] = useState([]);

  return (
    <div className="App">
      <div className="container">
      <AddTodoTask setTodoList={setTodoList} todoList={todoList} />
      <TodoList todoList={todoList} setTodoList={setTodoList}  />
      </div>
    </div>
  );
}

export default App;
