import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { About } from './pages/About';
import { Blog } from './pages/Blog';
import { BlogPostPage } from './pages/BlogPostPage';
import { Dev } from './pages/Dev';
import { ThemeToggle } from './components/ThemeToggle';
import { useThemePreference } from './hooks/useThemePreference';
import './App.css';

function App() {
  const { theme, toggleTheme } = useThemePreference();

  return (
    <BrowserRouter>
      <div className="app">
        <nav className="nav">
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Blog
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            About
          </NavLink>
          <NavLink to="/dev" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Dev
          </NavLink>
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
        </nav>
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog/:id" element={<BlogPostPage />} />
          <Route path="/dev" element={<Dev />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
