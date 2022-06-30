import React, { useContext } from 'react';
import { PostContext } from '../../context/postContext';
import '../../styles/cardStyles.css'

export const Card = () => {
    const { posts } = useContext(PostContext)
    
    return (
        <div className = 'cardContainer'>
            {posts.map((post) => (
                <div className = 'card' style = {{ 'background-image': `url(${post.data.url})`}}>
                    <h3 className = 'postTitle'>{post.data.title}</h3>
                    <p>{post.data.selftext}</p>
                </div>
            ))}
        </div>
    );
}