import React from 'react';
import { FiHome, FiMessageCircle, FiCheckSquare, FiUsers, FiSettings, FiChevronLeft } from 'react-icons/fi';

const projects = [
  { name: 'Web App', active: true },
  { name: 'Website Redesign' },
  { name: 'Design System' },
  { name: 'Wireframes' },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo-section">
        <h1>To Do</h1>
        <button className="menu-btn"><FiChevronLeft size={24} /></button>
      </div>

      <nav className="menu">
        <ul>
          <li><FiHome size={18} /><span>Home</span></li>
          <li><FiMessageCircle size={18} /><span>Messages</span></li>
          <li><FiCheckSquare size={18} /><span>Tasks</span></li>
          <li><FiUsers size={18} /><span>Members</span></li>
          <li><FiSettings size={18} /><span>Settings</span></li>
        </ul>
      </nav>

      <div className="projects">
        <h2>MY PROJECTS</h2>
        <ul>
          {projects.map((p, i) => (
            <li key={i} className={p.active ? 'active' : ''}>
              {p.active && <span className="active-dot"></span>}
              {p.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="thoughts-time">
        <h3>Thoughts Time</h3>
        <p>We don’t have any notice for you, till then you can share your thoughts with your peers.</p>
        <button className="write-message-btn">Write a message</button>
      </div>
    </aside>
  );
}
