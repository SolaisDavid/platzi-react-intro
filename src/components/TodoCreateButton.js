import React from "react";
import '../styles/CreateTodoButton.css';

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