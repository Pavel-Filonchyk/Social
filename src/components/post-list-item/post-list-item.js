import React from 'react';
import "./post-list-item.css"
const PostListItem = () => {
    return (                // span позволяет стилизовать текст даже внутри <p>
                            // li элемент списка маркированного ul и нумерованного ol
        <li className = "app-list d-flex justify-content-between">   
          <span className = "app-list-item-leble">  
                Hi
          </span>
          <div className = "d-flex justify-content-centr align-items-center">
            <button className = "btn-star btn-sm" type = "button">  
                <i className = "fa fa-star"></i> 
            </button>
            <button className = "btn-trash btn-sm" type = "button">  
                <i className = "fa fa-trash-o"></i> 
            </button>
            <i className = "fa fa-heart" ></i>
            
          </div>
        </li>
    )
}
// "fa fa-star" - иконка из библиотеки font-awesome
// d-flex justify-content-centr стили из bootstrap
export default PostListItem