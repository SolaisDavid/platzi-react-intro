import React from "react";

function TodoItem(props) {
    return (
        <li>
            {props.data.text}
        </li>
    );
}

export { TodoItem };