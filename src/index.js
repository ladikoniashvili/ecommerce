import React from "react";
import ReactDOM from 'react-dom/client';
import "./index.css";
import App from "./App";

import CartContextProvider from "./contexts/cartContext";


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
    <React.StrictMode>
        <CartContextProvider>
            <App />
        </CartContextProvider>
    </React.StrictMode>,
    
);
