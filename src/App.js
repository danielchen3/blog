import React from 'react';
import { useState} from 'react';
import Header from './components/Header';
import Post from './components/Post';
import Footer from './components/Footer';
import './styles.css';

export default function App(){

  const init_posts = [
    {
      id: 1,
      title: 'First Post',
      content: 'This is the content of the first post.',
      author: 'Daniel',
      date: '2025-02-18',
    },
    {
      id: 2,
      title: 'Second Post',
      content: 'This is the content of the second post.',
      author: 'ccx',
      date: '2025-01-01',
    },
  ];

  const [posts, setPosts] = useState(() => {
      const local_posts = localStorage.getItem('posts');
      return local_posts ? JSON.parse(local_posts) : init_posts;
    }
  );

  const [id, setId] = useState(3);

  const [isDeleteMode, setIsDeleteMode] = useState(false);

  const [mode, setMode] = useState('home');

  const add_post = (id) => {
    const new_posts = [...posts, {
      id: id,
      title: `This is the ${id} post`,
      content: `This is the content of the ${id} post.`,
      author: 'ccx',
      date: new Date().toISOString().split('T')[0],
    }];
    setPosts(new_posts);
    localStorage.setItem('posts', JSON.stringify(new_posts));
  };
  
  const delete_post = (id) => {
    const deleted_post = posts.filter(post => post.id !== id);
    setPosts(deleted_post);
    localStorage.setItem('posts', JSON.stringify(deleted_post));
  };

  const delete_click = (id) => {console.log("delete" + id); delete_post(id)}

  const change_mode = (mode) => {
    setMode(mode);
  }

  const reset = () => {
    setPosts(init_posts);
    localStorage.setItem('posts', JSON.stringify(init_posts));
  }

  const clearLocalStorage = () => {
    localStorage.removeItem('posts');
    setPosts(init_posts);
  }

  const post = () => {return (mode === 'home') && (
    <>
      <button onClick={() => {add_post(id); setId(id+1)}}>Add Post</button>
      <button id="delete-button" onClick={() => {setIsDeleteMode(!isDeleteMode)}}>Delete Post</button>
      <button onClick={reset}>Reset</button>
      <button id="clear-button" onClick={clearLocalStorage}>Clear Storage</button>
      {
        posts.map((post) => (
        <>
          <Post
            key={post.id}
            title={post.title}
            content={post.content}
            author={post.author}
            date={post.date}
          />
          {isDeleteMode && <button id="post-delete-button" onClick={() => delete_click(post.id)}>Delete</button>}
        </>
        ))
      }
  </>
  )}

  const about = () => {
    return (mode === 'about') && (
      <div>
        <h1>About</h1>
        <p>This is the about page</p>
      </div>
    )
  }

  const contact = () => {
    return (mode === 'contact') && (
      <div>
        <h1>Contact</h1>
        <p>Contact information is following <span>daniel.cx.chen@outlook.com</span></p>
      </div>
    )
  }

  return (
    <div className="app">
      <Header setMode={change_mode}/>
      <main className="main-content">
        {post()}
        {about()}
        {contact()}
      </main>
      <Footer />
    </div>
  );
}