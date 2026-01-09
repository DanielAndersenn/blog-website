import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { Blog } from './pages/Blog';
import { BlogPostPage } from './pages/BlogPostPage';
import { Dev } from './pages/Dev';
import { ThemeToggle } from './components/ThemeToggle';
import './App.css';

type Theme = 'light' | 'dark';

function App() {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <BrowserRouter>
      <div className="app">
        <nav className="nav">
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Blog
          </NavLink>
          <NavLink to="/dev" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Dev
          </NavLink>
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
        </nav>
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPostPage />} />
          <Route path="/dev" element={<Dev />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
