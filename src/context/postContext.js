import React, { createContext, useEffect, useState } from 'react';

export const APIRoot = 'https://www.reddit.com';

export const  PostContext = createContext();

const PostContextProvider = (props) => {
    const [posts, setPosts] = useState([]);
    
    const [search, setSearch] = useState(['villageporn'])

    useEffect(
        async () => {
            const response = await fetch(`${APIRoot}/r/${search}.json`);
            const json = await response.json();
        
            setPosts(json.data.children.filter(post => post.data.thumbnail !== 'self'));
        }, [search])

    return (
        <PostContext.Provider value = {{posts, search, setSearch}}>
            {props.children}
        </PostContext.Provider>
    )
}

export default PostContextProvider;

