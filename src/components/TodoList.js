import React from "react";
import { TodoItem } from "./TodoItem";

const todos = [
    { id: 1, text: "First TODO", done: false },
    { id: 2, text: "Second TODO", done: false },
    { id: 3, text: "Third TODO", done: false },
];

function TodoList(props) {
    return (
        <ul>
            { todos.map(i => ( <TodoItem key={i.id} data={i} /> )) }
        </ul>
    );
}

export { TodoList };