import React, { useContext, useState } from 'react';
import { PostContext } from '../../context/postContext';

export const NavBar = () => {
    const [subbreddit, setSubreddit] = useState([])
    const {search, setSearch} = useContext(PostContext);
    const handleChange = (e) => {
        setSubreddit(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setSearch(subbreddit)
        setSubreddit([])
    }
    return (
        <div className = 'header'>
            <div className='title'>
                <h2>redditSquares</h2>  
            </div>
            <form onSubmit={handleSubmit}>     
                <input className = 'searchBar' 
                        type = 'text'
                        placeholder = 'searchbar'
                        value = {subbreddit}
                        onChange={handleChange}
                    /> 
            </form>
        </div>
    )
}