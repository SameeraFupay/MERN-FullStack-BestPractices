import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <header className="header">Header</header>
      <nav className="nav">Nav</nav>
      <main className="main">Main</main>
      <footer className="footer">Footer</footer>
    </div>
  );
};

export default App;

/* App.css */
.container {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  
  .header {
    background-color: #333;
    color: #fff;
    padding: 20px;
  }
  
  .nav {
    background-color: #ddd;
    padding: 20px;
  }
  
  .main {
    flex: 1;
    background-color: #fff;
    padding: 20px;
  }
  
  .footer {
    background-color: #333;
    color: #fff;
    padding: 20px;
  }