import React from 'react';
import { FiCalendar, FiBell } from 'react-icons/fi';

export default function TopBar() {
  return (
    <header className="topbar">
      <div className="search-container">
        <input type="text" placeholder="Search for anything…" />
      </div>
      <div className="topbar-icons">
        <FiCalendar size={20} className="icon" />
        <FiBell size={20} className="icon" />
        <div className="user-info">
          <img
            src="https://i.pravatar.cc/150?img=32"
            alt="User Avatar"
            className="avatar"
          />
          <span>Zeynep Col, TR</span>
        </div>
      </div>
    </header>
  );
}