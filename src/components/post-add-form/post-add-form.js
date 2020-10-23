import React from 'react';

import "../post-add-form/post-add-form.css"
const PostAddForm = () => {
    return (
        <form ClassName = "botton-panel d-flex">
            <input
                type = "text"
                placeholder = "О чём вы думаете сейчас"
                className = "form-control new-post-label"
            />
            <button className = "btn btn-outline-secondary" type = "submit" >
                Добавить пост
            </button>
        </form>
    )
}

export default PostAddForm