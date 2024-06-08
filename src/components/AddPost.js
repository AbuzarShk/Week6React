// src/components/AddPost.js
import React, { useState } from 'react';

function AddPost({ onAdd }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ title, content, image });
    setTitle('');
    setContent('');
    setImage(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          className="form-control"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="content">Content</label>
        <textarea
          className="form-control"
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="image">Image</label>
        <input
          type="file"
          className="form-control"
          id="image"
          onChange={handleImageChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add Post
      </button>
    </form>
  );
}

export default AddPost;
