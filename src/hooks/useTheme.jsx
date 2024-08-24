import { useLayoutEffect, useState } from "react"

const isDarkTheme = window?.matchMedia('(preferse-color-scheme: dark)');
const defaultTheme = isDarkTheme ? 'dark' : 'light';

export const useTheme = () => {
    const [theme, setTheme] = useState(localStorage.getItem('todo_theme') || defaultTheme);

    useLayoutEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('todo_theme', theme);
    }, [theme])

    return { theme, setTheme }
}