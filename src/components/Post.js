import React from 'react';
import { useState } from 'react';
import './styles.css';

export default function Post({ title, content, author, date }) {
  const [isStared, setIsStared] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editTitle, setEditTitle] = useState(title);
  const [editContent, setEditContent] = useState(content);
  const [temptitle, settemptitle] = useState(title);
  const [tempContent, settempContent] = useState(title);


  function editPost() {
    setIsEditMode(!isEditMode);
  }

  function savePost() {
    setEditTitle(temptitle);
    setEditContent(tempContent);
    console.log('Post saved:', editTitle, editContent);
    setIsEditMode(false);
  }

  function cancelEdit() {
    settemptitle(title);
    settempContent(content);
    setIsEditMode(false);
  }

  return (
    <div className="item">
      <div className="post">
        {isEditMode ? (
          <>
            <input
              type="text"
              value={temptitle}
              onChange={(e) => settemptitle(e.target.value)}
              className="edit-title-input"
            />
            <textarea
              value={tempContent}
              onChange={(e) => settempContent(e.target.value)}
              className="edit-content-input"
            />
          </>
        ) : (
          <>
            <h2>{editTitle}</h2>
            <p>{editContent}</p>
          </>
        )}
        <div className="post-meta">
          <span>By {author}</span>
          <span> | {date}</span>
        </div>
        <input
          type="checkbox"
          id={`star-${title}`}
          className="star-checkbox"
          checked={isStared}
          onChange={() => setIsStared(!isStared)}
        />
      </div>
      <div className='button-star'>
        <label
          htmlFor={`star-${title}`}
          className="star-label"
        >
          {isStared ? '★' : '☆'}
        </label>
        {!isEditMode ? (
          <button onClick={editPost} className="post-edit-button">
            Edit
          </button>
        ) : (
          <>
            <button onClick={cancelEdit} className="post-edit-button">
              Cancel
            </button>
            <button onClick={savePost} className="post-save-button">
              Save
            </button>
          </>
        )}
      </div>
    </div>
  );
}