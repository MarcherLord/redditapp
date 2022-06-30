import React from 'react';

export const APIRoot = 'https://www.reddit.com';

export const getSubredditPosts = async (subreddit) => {
    const response = await fetch(`${APIRoot}${subreddit}.json`);
    const json = await response.json();

    return json.data.children.map((subreddit) => subreddit.data);
};

export const getSubbreddits = async () => {
    const response = await fetch(`${APIRoot}/subbreddits.json`);
    const json = await response.json();

    return json.data.children.map((subreddit) => subreddit.data);
}; 

export const getComments = async (permaLink) => {
    const response = await fetch(`${APIRoot}${permaLink}.json`);
    const json = await response.json;

    return json[1].data.children.map((subreddit) => subreddit.data);
};
