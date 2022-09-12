import React from 'react';
import '../styles/TodoCounter.css';

function TodoCounter({ done, total }) {
    return (
        <h2 className="TodoCounter">Done {done} of {total} TODOS.</h2>
    );
}

// Its recommended to use named exports to prevent weird naming when the code is imported.
export { TodoCounter };