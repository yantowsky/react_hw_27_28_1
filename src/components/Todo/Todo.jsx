import React, { useState, useContext, useRef } from 'react';
import { ItemsTodoListContext } from '../../contexts/ItemsTodoList';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import inputTaskSchema from '../../schemes/inputTaskSchema';
import TodoList from '../TodoList/TodoList';
import EmptyTodoList from '../EmptyTodoList/EmptyTodoList';
import TodoForms from '../TodoForms/TodoForms';
import './Todo.css';


const Todo = () => {
    const { control, handleSubmit, formState: { errors }, reset } = useForm({
        mode: 'onChange',
        defaultValues: {
            task: ""
        },
        resolver: yupResolver(inputTaskSchema)
    });

    const inputRef = useRef();

    const { itemsTodoList, setItemsTodoList } = useContext(ItemsTodoListContext);

    const [searchItem, setSearchItem] = useState('');

    const handlerAddItemTodoList = () => {
        let inputTask = inputRef.current.value.trim();
        if (!inputTask) return;

        const newItem = {
            id: Date.now(),
            checked: false,
            task: inputTask
        };

        const listItems = [...itemsTodoList, newItem];
        setItemsTodoList(listItems);
        reset();
    }

    const handleCheckedItemTodoList = (id) => {
        const listItems = itemsTodoList.map(item => item.id === id ? { ...item, checked: !item.checked } : item);
        setItemsTodoList(listItems);
    }

    const handlerDelItemTodoList = (id) => {
        const listItems = itemsTodoList.filter(item => item.id !== id);
        setItemsTodoList(listItems);
    }

    return (
        <main className='todo'>
            <TodoForms
                inputRef={inputRef}
                itemsTodoList={itemsTodoList}
                searchItem={searchItem}
                setSearchItem={setSearchItem}
                control={control}
                errors={errors}
                handleSubmit={handleSubmit(handlerAddItemTodoList)}
            />
            {itemsTodoList.length ?
                <TodoList
                    itemsTodoList={itemsTodoList.filter(item => (item.task).toLowerCase().includes(searchItem.toLowerCase()))}
                    handleCheckedItemTodoList={handleCheckedItemTodoList}
                    handlerDelItemTodoList={handlerDelItemTodoList}
                />
                :
                <EmptyTodoList />
            }
        </main>
    );
}

export default Todo;