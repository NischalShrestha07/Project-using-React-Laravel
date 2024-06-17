import React from 'react'
import Navbar from '../Navbar/Navbar'
import React, { useState } from 'react';

const UpdatePost = () => {
    const [postId, setPostId] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Post updated:', { postId, title, content });
    };

    return (
        <div>
            <Navbar />
            <div className="container">
                <h2>Update an Existing Post</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Post ID:</label>
                        <input
                            type="text"
                            value={postId}
                            onChange={(e) => setPostId(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Title:</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Content:</label>
                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        ></textarea>
                    </div>
                    <button type="submit">Update Post</button>
                </form>
            </div>
        </div>
    )
}

export default UpdatePost
