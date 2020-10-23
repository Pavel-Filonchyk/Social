import React from 'react';
import './app-header.css'
const AppHeader = () => {    // название переменной обязательно с большой буквы
    return (
        <div className = "app-header d-flex">
        <h1> Pavel Filonchyk </h1>
        <h2> 5 записей, из них понравилось 0</h2>
        </div>
    )
}

export default AppHeader