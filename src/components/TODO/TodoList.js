import React, { useEffect, useState } from 'react'

const TodoList = (props) =>{
 

    const {todoList, setTodoList} = props;
    useEffect(()=>{},[todoList])

    const deleteHandler = (index) =>{
        todoList.splice(index, 1);
        
        setTodoList(todoList => {
            setTodoList(todoList);
          

            return todoList;
        });
    }
    return(
        <table className="table table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Task</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
      {
      todoList.map((ele, key)=>{
          return(
            <tr>
            <td>{key}</td>
            <td>{ele}</td>
            <td><button onClick={()=>deleteHandler(key)} type="button" className="btn btn-outline-danger">delete</button></td>
          </tr>
          )
      })}
  </tbody>
</table>
    )
}

export default TodoList