// src/components/BlogPost.js
import React from 'react';

function BlogPost({ CurrentNews, content, image, onDelete, index }) {
  return (
    <div className="card mb-4 shadow-sm">
      {image && (
        <img src={image} className="card-img-top" alt={CurrentNews} />
      )}
      <div className="card-body">
        <h2 className="card-title">{CurrentNews}</h2>
        <p className="card-text">{content}</p>
        <button className="btn btn-danger" onClick={() => onDelete(index)}>Delete</button>
      </div>
    </div>
  );
}

export default BlogPost;
