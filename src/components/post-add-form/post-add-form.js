import React from 'react';

import "../post-add-form/post-add-form.css"
const PostAddForm = () => {
    return (
        <form className = "bottom-panel d-flex">
            <input
                type = "text"
                placeholder = "What are you thinking now?"
                className = "form-control new-post-label"
            />
            <button className = "btn btn-outline-secondary" type = "submit" >
                Add post
            </button>
        </form>
    )
}

export default PostAddForm