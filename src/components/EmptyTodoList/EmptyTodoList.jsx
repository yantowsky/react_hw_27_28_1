import React from 'react';
import './EmptyTodoList.css';


const EmptyTodoList = () => {
    return (
        <div className='todo-list todo-list--empty'>
            <p>
                Your Todo-List is Empty
            </p>
        </div>
    );
}

export default EmptyTodoList;