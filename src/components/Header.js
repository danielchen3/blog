import React from 'react';
import './styles.css';

// const Header = () => {
//   return (
//     <header className="Header">
//       <h1>My Blog</h1>
//       <nav>
//         <ul>
//           <h3 id='header-title'><a>About</a></h3>
//           <h3 id='header-title'><a>Home</a></h3>
//           <h3 id='header-title'><a>Contact</a></h3>
//         </ul>
//       </nav>
//     </header>
//   );
// };

export default function Header({ setMode }) {
  return (
    <header className="header">
      <h1>My Blog</h1>
      <nav className="nav-menu">
        <ul className="nav-list">
          <li>
            <button className="nav-button" onClick={() => setMode('about')}>
              About
            </button>
          </li>
          <li>
            <button className="nav-button" onClick={() => setMode('home')}>
              Home
            </button>
          </li>
          <li>
            <button className="nav-button" onClick={() => setMode('contact')}>
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}