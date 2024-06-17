import React from 'react'
import './CreatePost.css'
import Navbar from '../Navbar/Navbar'
const CreatePost = () => {
    return (
        <div>
            <Navbar />
            <div className="section">
                <h1>Create Post</h1>
                <h1>Create Post</h1>
                <h1>Create Post</h1>
                <form>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" name="title" />
                    <label for="content">Content:</label>
                    <textarea id="content" name="content" rows="5" cols="50"></textarea>
                    <input type="submit" value="Submit" />
                </form>
            </div>

        </div >
    )
}

export default CreatePost
