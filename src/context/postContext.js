import React, { createContext, useEffect, useState } from 'react';

export const APIRoot = 'https://www.reddit.com';

export const  PostContext = createContext();

const PostContextProvider = (props) => {
    const [posts, setPosts] = useState([]);
    
    useEffect(
        async () => {
            const response = await fetch(`${APIRoot}/r/villageporn.json`);
            const json = await response.json();
        
            setPosts(json.data.children);
        }, [])

    return (
        <PostContext.Provider value = {{posts}}>
            {props.children}
        </PostContext.Provider>
    )
}

export default PostContextProvider;

