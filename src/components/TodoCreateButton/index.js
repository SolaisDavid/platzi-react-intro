import React from "react";
import './CreateTodoButton.css';

function TodoCreateButton(props) {
    const handleClick = () => {
        alert('Add TODO');
    }

    return (
        <button
            className="CreateTodoButton"
            onClick={handleClick}
        >
            +
        </button>
    );
}

export { TodoCreateButton };