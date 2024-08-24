import React from 'react';
import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaSun, FaMoon } from "react-icons/fa";
import { MdContacts } from "react-icons/md";
import { useTheme } from '../../hooks/use-theme';
import './Header.css';

const Header = () => {

    const { theme, setTheme } = useTheme();

    const title = `Switch ${theme === 'dark' ? 'Light' : 'Dark'} Theme`;

    const handleSwitchTheme = () => {
        theme === 'dark' ? setTheme('light') : setTheme('dark');
    }

    return (
        <header className='header'>
            <ul className="header__nav">
                <li className="header__link" title='Home'>
                    <Link to='/'>
                        <FaHome />
                    </Link>
                </li>
                <li className="header__link" title="Contacts">
                    <Link to='/contacts'>
                        <MdContacts />
                    </Link>
                </li>
                <li className="header__link" title='About'>
                    <Link to='/about'>
                        <FaInfoCircle />
                    </Link>
                </li>
            </ul>
            <button
                className='switch-theme'
                title={title}
                onClick={handleSwitchTheme}
            >
                {theme === 'dark' ? <FaSun /> : <FaMoon />}
            </button>
        </header>
    );
}

export default Header;