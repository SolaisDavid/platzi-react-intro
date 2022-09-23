import React from "react";
import { TodoItem } from "../TodoItem";
import './TodoList.css';

function TodoList(props) {
    return (
        <ul>
            {props.todos.map(i => (
                <TodoItem
                    key={i.id}
                    data={i}
                    handleDoneTodo={() => props.handleDoneTodo(i.id)}
                    handleDeleteTodo={() => props.handleDeleteTodo(i.id)}
                />
            ))}
        </ul>
    );
}

export { TodoList };