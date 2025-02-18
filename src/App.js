import React from 'react';
import Header from './components/Header';
import Post from './components/Post';
import Footer from './components/Footer';
import './styles.css';

const posts = [
  {
    id: 1,
    title: 'First Post',
    content: 'This is the content of the first post.',
    author: 'Daniel',
    date: '2025-2-18',
  },
  {
    id: 2,
    title: 'Second Post',
    content: 'This is the content of the second post.',
    author: 'ccx',
    date: '2025-1-1',
  },
];

const App = () => {

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        {posts.map((post) => (
          <Post
            key={post.id}
            title={post.title}
            content={post.content}
            author={post.author}
            date={post.date}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default App;