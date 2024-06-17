import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
// import React, { useState } from 'react';

const DeletePost = () => {

    const [postId, setPostId] = useState('');

    const handleDelete = (e) => {
        e.preventDefault();
        console.log('Post deleted:', postId);
    };

    return (
        <div>
            <Navbar />
            <div className="container">
                <h2>Delete a Post</h2>
                <form onSubmit={handleDelete}>
                    <div>
                        <label>Post ID:</label>
                        <input
                            type="text"
                            value={postId}
                            onChange={(e) => setPostId(e.target.value)}
                        />
                    </div>
                    <button type="submit">Delete Post</button>
                </form>
            </div>

        </div>
    )
}

export default DeletePost
