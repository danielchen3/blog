import React from 'react';
import { useState } from 'react';

const Post = ({ title, content, author, date }) => {
    const [isstared, setIsstared] = useState(false)
  return (
    <div className="post">
      <h2>{title}</h2>
      <p>{content}</p>
      <div className="post-meta">
        <span>By {author}</span>
        <span> | {date}</span>
      </div>
      <input type="checkbox" id={`star-${title}`} className="star-checkbox" />
      <label
        htmlFor={`star-${title}`}
        onClick={() => setIsstared(!isstared)}
        className="star-label"
      >
        ☆
      </label>
    </div>
  );
};

export default Post;