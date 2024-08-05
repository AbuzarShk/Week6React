// src/App.js
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import BlogList from './components/BlogList';
import AddPost from './components/AddPost';
import './styles/styles.css';// Import the custom CSS file

function App() {
  // Load posts from local storage or initialize with default posts
  const [posts, setPosts] = useState(() => {
    const savedPosts = localStorage.getItem('posts');
    return savedPosts ? JSON.parse(savedPosts) : [
      { title: 'First News', content: 'Current News.', image: null },
      { title: 'Second News', content: 'Yesterday News.', image: null },
    ];
  });

  // Save posts to local storage whenever the posts state changes
  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  const addPost = (post) => {
    setPosts([...posts, post]);
  };

  const deletePost = (index) => {
    const newPosts = posts.filter((_, i) => i !== index);
    setPosts(newPosts);
  };

  return (
    <div className="App">
      <Header postCount={posts.length} />
      <div className="container">
        <AddPost onAdd={addPost} />
        <BlogList posts={posts} onDelete={deletePost} />
      </div>
    </div>
  );
}

export default App;
