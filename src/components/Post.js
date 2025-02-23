import React from 'react';
import { useState } from 'react';

export default function Post({ title, content, author, date}){
  const [isstared, setIsstared] = useState(false)
  const [isEditmode, setIsEditmode] = useState(false)
  const [editTitle, setEditTitle] = useState(title);
  const [editContent, setEditContent] = useState(content);

  function edit_post(){
    console.log("edit post")
    setIsEditmode(!isEditmode)
  }

  function save_post() {
    console.log('Post saved:', editTitle, editContent);
    setIsEditmode(false);
  }

  return (
    <div className="post">
      <>
        <h2>{editTitle}</h2>
        <p>{editContent}</p>
      </>
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
      {!isEditmode? 
        <button onClick={() => edit_post()} className="post-edit-button">Edit</button>: 
        <button onClick={() => setIsEditmode(false)} className="post-edit-button">Cancel</button>
      }
      {isEditmode && <button onClick={() => {save_post()}} className="post-save-button">Save</button>}
    </div>
  );
}