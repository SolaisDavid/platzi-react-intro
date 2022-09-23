import React from "react";
import './TodoItem.css';

function TodoItem(props) {
    return (
        <li className="TodoItem">
            <span
                className={`Icon Icon-check ${props.data.done && 'Icon-check--active'}`}
                onClick={props.handleDoneTodo}
            >
                ✔
            </span>
            <p className={`TodoItem-p ${props.data.done && 'TodoItem-p--complete'}`}>
                {props.data.text}
            </p>
            <span
                className="Icon Icon-delete"
                onClick={props.handleDeleteTodo}
            >
                ❌
            </span>
        </li>
    );
}

export { TodoItem };