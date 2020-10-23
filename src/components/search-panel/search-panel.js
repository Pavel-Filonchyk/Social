import React from 'react';
import './search-panel.css'
const SearchPanel = ()=>{
    return (
        <input                                 // тег позволяющий создавать различные элементы интерфейса (htmlbook.ru)
            className = "form-control search-unput"    // bootstep     
            type = "text"                      // type говорит о том, что это бокс внутри которого text - текст                    
            placeholder = "Поиск по записям"   // placeholder выводит текст внутри формы, который исчезает после наведения, стандарт

        />
    )
}
export default SearchPanel