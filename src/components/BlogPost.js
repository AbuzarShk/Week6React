// src/components/BlogPost.js
import React from 'react';

function BlogPost({ title, content, image, onDelete, index }) {
  return (
    <div className="card mb-4 shadow-sm">
      {image && (
        <img src={image} className="card-img-top" alt={title} />
      )}
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="card-text">{content}</p>
        <button className="btn btn-danger" onClick={() => onDelete(index)}>Delete</button>
      </div>
    </div>
  );
}

export default BlogPost;
