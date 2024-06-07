// src/components/BlogList.js
import React from 'react';
import BlogPost from './BlogPost';

function BlogList({ posts }) {
  return (
    <div className="blog-list">
      {posts.map((post, index) => (
        <BlogPost key={index} title={post.title} content={post.content} />
      ))}
    </div>
  );
}

export default BlogList;
