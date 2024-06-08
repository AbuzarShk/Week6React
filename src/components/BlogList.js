// src/components/BlogList.js
import React from 'react';
import BlogPost from './BlogPost';

function BlogList({ posts, onDelete }) {
  return (
    <div className="row">
      {posts.map((post, index) => (
        <div className="col-md-6" key={index}>
          <BlogPost 
            title={post.title} 
            content={post.content} 
            image={post.image} 
            onDelete={onDelete} 
            index={index} 
          />
        </div>
      ))}
    </div>
  );
}

export default BlogList;
