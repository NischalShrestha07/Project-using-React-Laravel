import React from 'react'
import Navbar from '../Navbar/Navbar'
import './CreatePost.css'
const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Post created:', { title, content });
    };
    return (

        <div>
            <Navbar />
            <div className="container">
                <h2>Create a New Post</h2>
                <form onSubmit={handleSubmit}>
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
                    <button type="submit">Create Post</button>
                </form>
            </div>
        </div >
    )
}

export default CreatePost
