import React from 'react';
import { SearchBar } from '../searchBar/SearchBar'

export const NavBar = () => {

    
    return (
    <div className = 'header'>
        <div className='title'>
            <h2>redditSquares</h2>  
        </div>
        <SearchBar />
        <div className='nav'>
            
        </div> 
    </div>
    )
}