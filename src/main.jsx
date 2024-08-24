import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import ItemsTodoList from './contexts/ItemsTodoList.jsx';
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <ItemsTodoList>
                    <App />
            </ItemsTodoList>
        </BrowserRouter>
    </StrictMode>,
);