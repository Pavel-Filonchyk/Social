import React from 'react';

import './app-header.css'

const AppHeader = ({liked, allPosts}) => {
    return (
        <div className="app-header d-flex">
            <h1>Pavel Filonchyk</h1>
            <h2>{allPosts} notes, like 0 {liked}</h2>
        </div>
    )
}

export default AppHeader;