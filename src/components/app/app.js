// реакт импортируется в первую очередь (переводит jsx в js)
import React from 'react';
import AppHeader from '../app-header/app-header';   // ! Писать нужно вначеле что за переменная, функция и откуда она
import SearchPanel from '../search-panel/search-panel';  // 2 точки нужны когда выходишь из своей папки и перемещаешься в другую
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from "../post-list/post-list"
import PostAddForm from "../post-add-form/post-add-form"
import "./app.css"   // одна точка когда перемещаешься по соей папке

// главная папка в которой есть доступ к другим папкам. Такая структура - паттерная, считается удобной
const App = () => {            // переменная всегда с большой буквы. Обязательно в дальнейшем нужно вызвать функции <AppHeader/> и другие
    return(                    // переменная создаётся с колбэк функцией и возвратом return
        // все элементы должны быть обязательно обёрнуты в один див
        <div className = "app">   
            <AppHeader/>      
            <div className = "search-panel d-flex">  
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList/>
            <PostAddForm/>
        </div>
    )
}
// d-flex - bootstep
// размещаю блоки согласно тз (можно матрешкой)
export default App   // экспортирую app в index.js
