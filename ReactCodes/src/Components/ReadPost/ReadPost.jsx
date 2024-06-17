import React from 'react'
import Navbar from '../Navbar/Navbar'

const ReadPost = () => {

    const articles = [
        {
            id: 1,
            title: 'Breaking News: React is awesome!',
            image: 'https://via.placeholder.com/600x400',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae vehicula elit. Phasellus tempus.'
        },
        {
            id: 2,
            title: 'Learn JavaScript in 30 Days',
            image: 'https://via.placeholder.com/600x400',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae vehicula elit. Phasellus tempus.'
        },
    ];

    return (
        <div>
            {/* <Navbar /> */}
            <div className="container">
                <h2>Read Posts</h2>
                <div className="main-content">
                    {articles.map(article => (
                        <div key={article.id} className="article">
                            <img src={article.image} alt={article.title} />
                            <h2>{article.title}</h2>
                            <p>{article.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ReadPost
