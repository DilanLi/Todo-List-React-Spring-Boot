import React, { useState, useEffect } from 'react';
import TodoDataService from "../api/todo/TodoDataService";
import Authentication from "../Authentication";

export default function TodoList() {

    useEffect(() => {
        retrieveTodos()
    })

    function retrieveTodos(){
        let username = Authentication.getLoggedInUsername();
        TodoDataService.retrieveAllTodos(username)
        .then( res => setTodos(res.data))
        .catch( err => console.log(err))
    }

    const [todos, setTodos] = useState([])
    
    return (        
        <div>
            <h1 className="mt-5 mb-3">To Do List</h1>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>description</th>
                            <th>done</th>
                            <th>due date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map(todo =>
                            <tr key={todo.id}>
                                <td>{todo.description}</td>
                                <td>{todo.done.toString()}</td>
                                <td>{todo.targetDate}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
