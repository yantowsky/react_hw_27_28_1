import React, { createContext, useState, useEffect } from 'react';

export const ItemsTodoListContext = createContext();

const ItemsTodoList = ({ children }) => {
    const [itemsTodoList, setItemsTodoList] = useState(JSON.parse(localStorage.getItem('todo_list')) || []);

    useEffect(() => {
        localStorage.setItem('todo_list', JSON.stringify(itemsTodoList));
    }, [itemsTodoList]);

    const contextValue = { itemsTodoList, setItemsTodoList }

    return (
        <ItemsTodoListContext.Provider value={contextValue}>
            {children}
        </ItemsTodoListContext.Provider>
    );
}

export default ItemsTodoList;