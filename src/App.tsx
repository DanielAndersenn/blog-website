import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { Blog } from './pages/Blog';
import { Dev } from './pages/Dev';
import './App.css';

function App() {
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
        </nav>
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/dev" element={<Dev />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
