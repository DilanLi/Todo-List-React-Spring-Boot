import React, { useState } from 'react'

export default function TodoList() {
    const [todos, setTodos] = useState([
        {
            id: 1,
            description: "Learn Java",
            done: false,
            dueDate: new Date()
        },
        {
            id: 2,
            description: "Get better at React",
            done: false,
            dueDate: new Date()
        },
        {
            id: 3,
            description: "Finish reading 3 Body",
            done: false,
            dueDate: new Date()
        }
    ])


    return (
        <div>
            <h1>To Do List</h1>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>description</th>
                        <th>done</th>
                        <th>due date</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map(todo => 
                        <tr>
                            <td>{todo.id}</td>
                            <td>{todo.description}</td>
                    <td>{todo.done.toString()}</td>
                    <td>{todo.dueDate.toString()}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
