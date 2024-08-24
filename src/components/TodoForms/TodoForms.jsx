import React from 'react';
import { FaPlusSquare } from "react-icons/fa";
import { Controller } from "react-hook-form";
import './TodoForms.css'


const TodoForms = ({ inputRef, itemsTodoList, searchItem, setSearchItem, control, errors, handleSubmit }) => {
    const handlerInputSearch = (event) => {
        let inputSearch = event.target.value;
        setSearchItem(inputSearch);
    }

    if (searchItem.toLowerCase() === 'error') throw new Error(`You search ${searchItem}`);

    return (
        <div className='todo-forms'>
            <form className='todo-forms__add' onSubmit={handleSubmit}>
                <Controller
                    name='task'
                    control={control}
                    render={({ field }) => (
                        <input
                            {...field}
                            type="text"
                            ref={inputRef}
                            placeholder='Add Task...'
                            aria-label='addtask'
                            autoFocus
                            autoComplete="off"
                        />
                    )}
                />
                {errors.task && <p className='form__error'>{errors.task.message}</p>}
                <button
                    type='submit'
                >
                    <FaPlusSquare />
                </button>
            </form>
            {!!itemsTodoList.length &&
                <form className='todo-forms__search' onSubmit={(event) => event.preventDefault()}>
                    <input
                        type="text"
                        role='search-box'
                        placeholder='Search Task...'
                        value={searchItem}
                        onChange={handlerInputSearch}
                    />
                </form>
            }
        </div >
    );
}

export default TodoForms;