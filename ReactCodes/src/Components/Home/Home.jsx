import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Home.css'

const Home = () => {
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
            <Navbar />
            <header className="header">
                <h1>Welcome to NewsPortalWebsite</h1>
            </header>
            <div className="container">
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
            <footer className="footer">
                <p>&copy; 2024 NewsPortalWebsite. All Rights Reserved.</p>
            </footer>
        </div>
    )
}

export default Home
