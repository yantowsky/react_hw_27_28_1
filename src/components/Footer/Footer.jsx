import React, { useContext } from 'react';
import { ItemsTodoListContext } from '../../contexts/ItemsTodoList';
import './Footer.css';

const Footer = () => {
    const { itemsTodoList } = useContext(ItemsTodoListContext);
    const yearNow = new Date().getFullYear();

    return (
        <footer className='footer'>
            <p className="total-todos">
                {
                    !itemsTodoList.length ? 'No ' : `Total: ${itemsTodoList.length} `
                }
                {
                    itemsTodoList.length == 0 || itemsTodoList.length > 1 ? 'tasks' : 'task'
                }
            </p>
            <p className='year-todos'>
                {yearNow}
            </p>
        </footer>
    );
}

export default Footer;